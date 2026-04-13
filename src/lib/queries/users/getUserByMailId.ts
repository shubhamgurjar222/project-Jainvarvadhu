import { prisma } from "@/lib/prisma";

export async function getUserByMailId (email: string) {

    try {
        const existingEmail = await prisma.users.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                hashed_password: true,
                phone_no: true,
                dob: true,
                gender: true,
                community: true,
                country: true,
                created_at: true,
                updated_at: true
            },
        });

        if (!existingEmail) {
            return {"success": false, "message": "user Not found", "data": null}
        }

        return {"success": true, "message": "User Found", "data": existingEmail};
    } catch (error) {
        console.error("Error adding new user in DB:", error);
        return null;
    }

}