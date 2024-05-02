// require("dotenv").config();
// import * as sql from "mssql/msnodesqlv8";

// // Load environment variables from .env file
// const dbConfig: sql.config = {
//     server: process.env.DB_SERVER || "",
//     database: process.env.DB_DATABASE || "",
//     user: process.env.DB_USER || "",
//     password: process.env.DB_PASSWORD || "",
//     options: {
//         trustedConnection: false, // Use SQL Server Authentication
//     },
//     driver: "msnodesqlv8",
// };

// // Main function to connect to the database and execute query
// async function main() {
//     let pool;
//     try {
//         // Make the connection
//         pool = await sql.connect(dbConfig);

//         // Make a request
//         const request = pool.request();

//         // Make the query
//         const query =
//             "SELECT * FROM [dbo].[vw_employeemasterdata] WHERE EmployeeNo = '210988'";

//         // Execute the query
//         const result = await request.query(query);
//         console.log(result.recordset);

//         // Close the connection pool
//         await pool.close();
//     } catch (error) {
//         console.error("Error executing query:", error);
//         if (pool) {
//             // Close the connection pool if an error occurred
//             await pool.close();
//         }
//     }
// }

// // Call the main function
// main();
