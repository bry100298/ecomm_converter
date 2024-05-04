// auth.ts

import { pool } from './database';

export async function authenticateUser(username: string, password: string): Promise<boolean> {
    try {
        // Query
        const result = await pool.request()
            .input('username', username)
            .input('password', password)
            .query('SELECT * FROM [dbo].[vw_employeemasterdata] WHERE EmployeeNo = @username AND Password = @password');

        return result.recordset.length > 0;
    } catch (error) {
        console.error('Authentication error:', error);
        return false;
    }
}
