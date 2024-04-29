import { ConnectionPool, config as SQLConfig } from 'mssql';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Database configuration
const dbConfig: SQLConfig = {
    server: process.env.DB_SERVER || '',
    database: process.env.DB_DATABASE || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    options: {
        encrypt: true, // For encrypted connection
        enableArithAbort: true // To avoid SQL Server connection errors
    },
};

// Function to establish database connection
export async function connectToDatabase(): Promise<ConnectionPool> {
    try {
        const pool = new ConnectionPool(dbConfig);
        await pool.connect();
        console.log('Connected to database');
        return pool;
    } catch (error) {
        throw new Error(`Error connecting to database: ${error}`);
    }
}
