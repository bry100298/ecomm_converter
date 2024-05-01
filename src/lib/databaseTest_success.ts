// require("dotenv").config();
const sql = require("mssql/msnodesqlv8");
const path = require("path");

// Resolve the path to .env file
const envPath = path.resolve(__dirname, "..", "..", ".env");

// Load environment variables from .env file
const envConfig = require("dotenv").config({ path: envPath });

// Check if there were any errors while loading the environment variables
if (envConfig.error) {
    console.error("Error loading .env file:", envConfig.error);
    process.exit(1); // Exit with error
}

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

console.log("Database configuration:", dbConfig);

// Export the database configuration
module.exports = dbConfig;
