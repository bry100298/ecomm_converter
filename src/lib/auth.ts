const mssqlUsers = require("mssql/msnodesqlv8"); // Import mssql module
const usersData = require("./database.ts"); // Import the database configuration

async function login(username: string, password: string): Promise<boolean> {
    try {
        // Create a connection pool
        const pool = await mssqlUsers.connect(usersData);

        // Query
        const result = await pool.request()
            .input("username", mssqlUsers.VarChar, username)
            .input("password", mssqlUsers.VarChar, password)
            .query("SELECT * FROM [dbo].[vw_employeemasterdata] WHERE EmployeeNo = @username AND Password = @password");

        // Check if user exists
        if (result.recordset.length > 0) {
            // User authenticated successfully
            console.log("Login successful");
            return true;
        } else {
            // User not found or incorrect credentials
            console.log("Invalid username or password");
            return false;
        }

        // Close the connection pool
        await pool.close();
    } catch (err) {
        // Handle errors
        console.error("Error:", err);
        return false;
    }
}

async function logout() {
    // You can implement logout functionality here if needed
    console.log("User logged out");
}

module.exports = {
    login,
    logout
};
