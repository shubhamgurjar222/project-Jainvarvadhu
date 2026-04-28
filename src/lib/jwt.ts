import jwt, { SignOptions } from "jsonwebtoken";

const ACCESS_SECRET: string = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_SECRET: string = process.env.REFRESH_TOKEN_SECRET!;
const ACCESS_EXPIRY: SignOptions["expiresIn"] = (process.env.ACCESS_TOKEN_EXPIRY as SignOptions["expiresIn"]) || "1h";
const ALGORITHM: SignOptions["algorithm"] = "HS256";

type JwtPayload = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

const generateToken = ( payload: JwtPayload, secret: string, expiresIn: SignOptions["expiresIn"]) => {
  return jwt.sign(payload, secret, { expiresIn, algorithm: ALGORITHM, });
};

const verifyToken = (token: string, secret: string): JwtPayload => {
    try {
      return jwt.verify(token, secret, { algorithms: [ALGORITHM], }) as JwtPayload; 
    } catch {
      throw new Error("Invalid or expired token");
    }
};

export const generateAccessToken = (payload: JwtPayload) => {
  return generateToken(payload, ACCESS_SECRET, ACCESS_EXPIRY);
};

export const generateRefreshToken = (payload: JwtPayload, rememberMe?: boolean) => {
  const expiry = rememberMe ? "30d" : "7d";
  return generateToken(payload, REFRESH_SECRET, expiry);
};

export const verifyAccessToken = (token: string) => {
  return verifyToken(token, ACCESS_SECRET);
}

export const verifyRefreshToken = (token: string) => {
  return verifyToken(token, REFRESH_SECRET);
}