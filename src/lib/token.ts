
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export async function generateToken(userId: number, type: any, expiryMinutes = 10) {
  const rawToken = crypto.randomBytes(32).toString("hex");

  const hashed = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex");

  await prisma.auth_token.create({
    data: {
      userId,
      type,
      hashed_token: hashed,
      expiresAt: new Date(Date.now() + expiryMinutes * 60 * 1000),
    },
  });

  return rawToken;
}

export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}