import { prisma } from "@/lib/prisma";
import { error } from "console";

type UserResult  = {
  id: number;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  created_at: Date | null;
};


export async function checkUserByEmail ( email: string ): Promise<UserResult | null> { 
    const trimmed = email?.trim().toLowerCase();;

    if (!trimmed) {
        return null;
    }

    try {
        const user = await prisma.users.findUnique({
            where: {
                email: trimmed,
                mode: "insensitive"
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                created_at: true
            },
        });
        return user;
    } catch (error) {
        console.error("Error checking user by email:", error);
        return null;
    }

}