import { prisma } from "@/lib/prisma";


export async function logout ( refreshToken: string ) { 

    try {
        const status = await prisma.refresh_tokens.deleteMany({
            where: {
                token_hash: refreshToken,
            },
        });
        return status;
    } catch (error) {
        console.error("Error checking user by email:", error);
        return null;
    }

}