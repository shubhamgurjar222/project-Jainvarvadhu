import { pool } from "../../../config/db";
import { RowDataPacket } from "mysql2";
import { prisma } from "@/lib/prisma";


type College = {
  id: number;
  college_name: string | null;
  state: string | null;
  district: string | null;
};

export async function searchCollegesByName( name: string ): Promise<College[]> {
  const trimmed = name?.trim();
  if (!trimmed || trimmed.length < 2) {
    return [];
  }

    const colleges = await prisma.colleges.findMany({
    where: {
      college_name: {
        contains: trimmed,
      },
    },
    orderBy: {
      college_name: "asc",
    },
    take: 20,
    select: {
      id: true,
      college_name: true,
      state: true,
      district: true,
    },
  });

  return colleges;
}

export async function searchCollegeByStateDistrict(state: string, city: string): Promise<College[]> {
  try {
    const trimmedState = state?.trim();
    const trimmedDistrict = city?.trim();
    if (!trimmedState || trimmedState.length < 2) {
      return [];
    }
     if (!trimmedDistrict || trimmedDistrict.length < 2) {
      return [];
    }

    const colleges = await prisma.colleges.findMany({
      where: {
        state: {
          contains: trimmedState
        },
        district: {
          contains: trimmedDistrict
        }
      },
      orderBy: {
        college_name: "asc",
      },
      select: {
        id: true,
        college_name: true,
        state: true,
        district: true,
      },
    });

    return colleges;
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
}