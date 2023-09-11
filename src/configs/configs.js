import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000
export const DB_NAME = process.env.DB_NAME || 'postgres'
export const DB_USER = process.env.DB_USER || 'postgres'
export const DB_PASSWORD = process.env.DB_PASSWORD || '1234'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DIALECT = process.env.DB_DIALECT || 'postgres'