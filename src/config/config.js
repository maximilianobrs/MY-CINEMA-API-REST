import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000
export const DB_NAME = process.env.DB_NAME || 'postgres'
export const DB_USER = process.env.DB_USER || 'postgres'
export const DB_PASSWORD = process.env.PASSWORD || 'postgres'
export const DB_HOST = process.env.DB_NAME || 'localhost'
export const DB_DIALECT = process.env.DB_NAME || 'postgres'