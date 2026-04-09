import { prisma } from "@/lib/prisma";

type UserResult  = {
  id: number;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  created_at: Date | null;
};


export async function checkUserByEmail ( email: string ): Promise<UserResult | null> { 
    const trimmed = email?.trim();

    if (!trimmed) {
        return null;
    }

    const user = await prisma.users.findFirst({
        where: {
            email: trimmed
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
}