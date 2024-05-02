// const fs = require("fs");
// const path = require("path");
// const sql = require("mssql/msnodesqlv8");

// const jsonFilePath = path.join(__dirname, "data.json");

// // Define your database connection configuration
// const config = {
//   server: "192.168.0.204",
//   database: "dbEmployeeMaster",
//   user: "SA",
//   password: "P@ssw0rdLan6s",
//   options: {
//     trustedConnection: false, // Use SQL Server Authentication
//   },
//   driver: "msnodesqlv8",
// };

// // Function to fetch data from database and cache as JSON
// async function fetchDataAndCache() {
//   try {
//     const pool = await sql.connect(config);
//     const result = await pool
//       .request()
//       .query("SELECT * FROM [dbo].[m_employeemaster_data]");
//     const jsonData = JSON.stringify(result.recordset);
//     fs.writeFileSync(jsonFilePath, jsonData);
//     console.log("Data cached as JSON successfully.");
//   } catch (error) {
//     console.error("Error caching data as JSON:", error);
//   }
// }

// // Function to load data from JSON file
// function loadDataFromJSON() {
//   try {
//     if (fs.existsSync(jsonFilePath)) {
//       const jsonData = fs.readFileSync(jsonFilePath, "utf8");
//       const data = JSON.parse(jsonData);
//       console.log("Data loaded from JSON file successfully:", data);
//       return data;
//     } else {
//       console.log("JSON file does not exist.");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error loading data from JSON file:", error);
//     return null;
//   }
// }

// // Example usage:
// const cachedData = loadDataFromJSON();
// if (!cachedData) {
//   fetchDataAndCache();
// }
