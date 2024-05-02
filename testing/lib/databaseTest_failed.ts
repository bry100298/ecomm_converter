require("dotenv").config();
const sql = require("mssql/msnodesqlv8");
const path = require("path");

// console.log("Path to .env file:", process.env.PATH_TO_ENV);

// Log the path where dotenv is looking for the .env file
// console.log("Path to .env file:", path.resolve(__dirname, "..", "..", ".env"));


// Resolve the path to .env file
const envPath = path.resolve(__dirname, "..", "..", ".env");

// Set the PATH_TO_ENV environment variable
process.env.PATH_TO_ENV = envPath;

// Log the path where dotenv is looking for the .env file
console.log("Path to .env file:", envPath);

// Log the path where dotenv is looking for the .env file
console.log("Path to .env file:", path.resolve(__dirname, "..", "..", ".env"));

// Log the content of the .env file
console.log("Environment variables from .env file:");
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_SERVER:", process.env.DB_SERVER);
console.log("DB_DATABASE:", process.env.DB_DATABASE);

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