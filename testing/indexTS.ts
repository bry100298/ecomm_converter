// ts-node indexTS.ts but cannot tsc indexTS.ts, tsc will create a .js for example it will craete indexTS.js
require("dotenv").config();
const sql = require("mssql/msnodesqlv8");

// Load environment variables from .env file
const dbConfig = {
    server: process.env.DB_SERVER || "",
    database: process.env.DB_DATABASE || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    options: {
        trustedConnection: false, // Use SQL Server Authentication
    },
    driver: "msnodesqlv8",
};

// Main function to connect to the database and execute query
async function main() {
    try {
        // Make the connection
        await sql.connect(dbConfig);

        // Make a request
        const request = new sql.Request();

        // Make the query
        const query =
            "SELECT * FROM [dbo].[vw_employeemasterdata] WHERE EmployeeNo = '210988'";

        // Execute the query
        const result = await request.query(query);
        console.log(result);

        // Close the SQL connection
        await sql.close();
    } catch (error) {
        console.error("Error executing query:", error);
    }
}

// Call the main function
main();
