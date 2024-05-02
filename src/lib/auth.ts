// src/lib/auth.ts

const mssqlUsers = require("mssql/msnodesqlv8"); // Import mssql module
const usersData = require("./database.ts"); // Import the database configuration

// Function to authenticate a user based on EmployeeNo and password
const authenticateUser = async (employeeNo, password) => {
    try {
        // Create a connection pool
        const pool = await mssqlUsers.connect(usersData);

        // Query to check if the provided EmployeeNo and password combination exists in the database
        const query = `
            SELECT COUNT(*) AS count
            FROM [dbo].[vw_employeemasterdata]
            WHERE EmployeeNo = @employeeNo AND [password] = @password;
        `;

        // Execute the query using the database connection
        const result = await pool.request()
            .input('employeeNo', mssqlUsers.VarChar, employeeNo)
            .input('password', mssqlUsers.VarChar, password)
            .query(query);

        // Check if any records were found (i.e., count > 0)
        if (result.recordset[0].count > 0) {
            return true; // Authentication succeeds
        } else {
            return false; // Authentication fails
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        return false; // Authentication fails due to an error
    }
};

module.exports = { authenticateUser };
