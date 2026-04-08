import { NextResponse } from 'next/server';
import cloudinary from '@/utils/cloudinary';
import { UploadApiResponse } from 'cloudinary';
import { successResponse, errorResponse } from '@/utils/apiResponse';


export async function POST(req: Request) {

    const username = 'testuser';
    const userId = Math.random(); 

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

        if (!file || !(file instanceof File)) {
            return errorResponse(400, 'File upload failed');
        }

        if (!allowedTypes.includes(file.type)) {
            return errorResponse(400, 'Invalid file type');
        }

        const MAX_SIZE = 5 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
            return errorResponse(400, 'File too large');
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

        return successResponse(200, uploadResponse, 'File uploaded successfully');
    } catch (error) {
        return errorResponse(500, 'File upload failed', error);
    }
}