import mysql, { Pool } from "mysql2/promise";

export const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST as string,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
});

async function checkDbConnection(): Promise<void> {
  try {
    const connection = await pool.getConnection();
    console.log("Database connection established successfully");
    connection.release();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}

checkDbConnection();