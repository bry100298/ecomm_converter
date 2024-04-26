const sql = require("mssql/msnodesqlv8");

// Create a database configuration
const config = {
  server: "192.168.0.204",
  database: "dbEmployeeMaster",
  user: "SA",
  password: "P@ssw0rdLan6s",
  options: {
    trustedConnection: false, // Use SQL Server Authentication
  },
  driver: "msnodesqlv8",
};

// Make the connection
sql.connect(config, function (err) {
  if (err) console.log(err);

  // Make a request
  const request = new sql.Request();

  // Make the query
  const query =
    "SELECT * FROM [dbo].[m_employeemaster_data] WHERE SAPEmployeeNo = '0090210988'";

  request.query(query, function (err, records) {
    if (err) console.log(err);
    else {
      console.log(records);
      // Your output as records
    }
  });
});
