require("dotenv").config();
const { connectToDatabase } = require("./database");
const sql = require("mssql/msnodesqlv8");

// Load database configuration from environment variables
const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    trustedConnection: false, // Use SQL Server Authentication
  },
  driver: "msnodesqlv8",
};

// Make the connection
sql.connect(config, async function (err) {
  if (err) console.log(err);

  try {
    // Connect to the database
    const pool = await connectToDatabase();

    // Make a request
    const request = new sql.Request();

    // Make the query
    const query =
      "SELECT * FROM [dbo].[vw_employeemasterdata] WHERE EmployeeNo = '210988'";

    // Execute the query
    const records = await request.query(query);
    console.log(records);

    // Close the connection pool
    await pool.close();
  } catch (error) {
    console.error("Error executing query:", error);
  }
});
