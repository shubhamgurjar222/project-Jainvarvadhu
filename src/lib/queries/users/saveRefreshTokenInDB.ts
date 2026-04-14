import { prisma } from "@/lib/prisma";
import { hashToken } from "@/lib/hashRefreshToken";

export async function saveRefreshTokenInDB (userId: number, token: string) {

    const hashedToken = await hashToken(token)

    try {
        const data = await prisma.refresh_tokens.create({
            data: {
                user_id: userId,
                token_hash: hashedToken,
                expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
        });

        return data;
    } catch (error) {
        console.error("Error saving refresh token:", error);
        return {
            success: false,
            message: "Failed to save refresh token",
            data: null,
        };
    }

}