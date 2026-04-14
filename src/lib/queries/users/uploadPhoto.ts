import { prisma } from "@/lib/prisma";


export async function uploadPhoto (user_id: number, photo_url: string, is_primary: boolean) {

    try {
        const data = await prisma.user_photos.create({
            data: {
                user_id,
                photo_url,
                is_primary,
            },
        });

        return data;
    } catch (error) {
        console.error("Failed to save photo In DB", error);
        return {
            success: false,
            message: "Failed to save photo in DB",
            data: null,
        };
    }

}