// const mssqlModule = require("mssql/msnodesqlv8"); // Import mssql module
// // delete require.cache[require.resolve('./database.ts')];
// const empdata = require("./database.ts"); // Import the database configuration


// async function mainasd() {
//     try {
//         // Create a connection pool
//         const pool = await mssqlModule.connect(empdata);

//         // Query
//         const result = await pool.request()
//             .query("SELECT * FROM [dbo].[vw_employeemasterdata] WHERE EmployeeNo = '210988'");

//         // Log the result
//         console.log("Query result:", result.recordset);

//         // Close the connection pool
//         await pool.close();
//     } catch (err) {
//         // Handle errors
//         console.error("Error:", err);
//     }
// }

// // Call the main function
// mainasd();
