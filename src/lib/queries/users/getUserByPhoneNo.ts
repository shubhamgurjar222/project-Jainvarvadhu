import { prisma } from "@/lib/prisma";

export async function getUserByPhoneNo (phoneNo: string) {

    try {
        const existingPhoneNo = await prisma.users.findUnique({
            where: {
                phone_no: phoneNo,
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                phone_no: true,
                created_at: true,
            },
        });

        return existingPhoneNo
    } catch (error) {
        console.error("Error adding new user in DB:", error);
        return null;
    }

}