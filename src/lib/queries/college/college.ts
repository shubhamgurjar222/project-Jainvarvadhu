import { pool } from "../../../config/db";
import { RowDataPacket } from "mysql2";

type College = {
  id: number;
  college_name: string;
  state: string;
  district: string;
};

export async function searchCollegesByName(
  name: string
): Promise<College[]> {
  const trimmed = name?.trim();
  if (!trimmed || trimmed.length < 2) {
    return [];
  }

  const search = `%${trimmed}%`;

  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT id, college_name, state, district 
     FROM colleges 
     WHERE college_name LIKE ? 
     ORDER BY college_name ASC`,
    [search]
  );

  return rows as College[];
}

export async function college(state: string, city: string): Promise<College[]> {
  try {
    const query = `
      SELECT id, college_name, state, district
      FROM colleges 
      WHERE state = ? AND district = ?
    `;

    const [rows] = await pool.execute<RowDataPacket[]>(
      query,
      [state, city]
    );

    return rows as College[];
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
}