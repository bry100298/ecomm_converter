// require("dotenv").config();
// const sql = require("mssql/msnodesqlv8");

// // Load database configuration from environment variables
// const config = {
//   server: process.env.DB_SERVER,
//   database: process.env.DB_DATABASE,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   options: {
//     trustedConnection: false, // Use SQL Server Authentication
//   },
//   driver: "msnodesqlv8",
// };

// // Make the connection
// sql.connect(config, function (err) {
//   if (err) console.log(err);

//   // Make a request
//   const request = new sql.Request();

//   // Make the query
//   const query =
//     "SELECT * FROM [dbo].[vw_employeemasterdata] WHERE EmployeeNo = '210988'";

//   request.query(query, function (err, records) {
//     if (err) console.log(err);
//     else {
//       console.log(records);
//       // Your output as records
//     }
//   });
// });
