import { ConnectionPool, config as SQLConfig } from 'mssql';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Database configuration function
export function getDatabaseConfig(): SQLConfig {
    return {
        server: process.env.DB_SERVER || '',
        database: process.env.DB_DATABASE || '',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        options: {
            trustedConnection: false, // Use SQL Server Authentication
        },
        driver: "msnodesqlv8", // Specify the driver to use
    };
}

// Function to establish database connection
export async function connectToDatabase(): Promise<ConnectionPool> {
    try {
        const config = getDatabaseConfig();
        const pool = new ConnectionPool(config);
        await pool.connect();
        console.log('Connected to database');
        return pool;
    } catch (error) {
        throw new Error(`Error connecting to database: ${error}`);
    }
}

// Function to execute SQL query
export async function executeQuery(query: string): Promise<any> {
    try {
        const pool = await connectToDatabase();
        const request = pool.request();
        const result = await request.query(query);
        await pool.close();
        return result.recordset;
    } catch (error) {
        throw new Error(`Error executing query: ${error}`);
    }
}
