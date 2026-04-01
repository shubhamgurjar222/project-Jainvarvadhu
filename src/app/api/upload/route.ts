import { NextResponse } from 'next/server';
import cloudinary from '@/utils/cloudinary';
import { UploadApiResponse } from 'cloudinary';


export async function POST(req: Request) {

    const username = 'testuser';
    const userId = '12345'; 

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        
        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        if (!file || !(file instanceof File)) {
            return NextResponse.json({ error: 'Invalid file' }, { status: 400 });
        }

        if (!allowedTypes.includes(file.type)) {
        return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
        }

        const MAX_SIZE = 5 * 1024 * 1024; // 5MB
        if (file.size > MAX_SIZE) {
            return NextResponse.json({ error: 'File too large' }, { status: 400 });
        }
        
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResponse = await new Promise<UploadApiResponse>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {   folder: 'uploads',
                public_id: `${username}-${userId}`,
            },
            (error, result) => {
            if (error) reject(error);
            if (!result) return reject(new Error('Upload failed'));
            resolve(result);
            }
        ).end(buffer);
        });

        return NextResponse.json(uploadResponse);
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}