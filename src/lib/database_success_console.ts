const dotenv = require("dotenv");
// const sql = require("mssql/msnodesqlv8");
const path = require("path");

// Resolve the path to .env file
const envPath = path.resolve(__dirname, "..", "..", ".env");

// Load environment variables from .env file
const envConfig = dotenv.config({ path: envPath });

// Check if there was an error loading the .env file
if (envConfig.error) {
    console.error("Error loading .env file:", envConfig.error);
} else {
    console.log("Environment variables from .env file:");
    for (const key in envConfig.parsed) {
        console.log(`${key}: ${envConfig.parsed[key]}`);
    }

    // Load environment variables into process.env
    for (const key in envConfig.parsed) {
        process.env[key] = envConfig.parsed[key];
    }
}

// Log the path where dotenv is looking for the .env file
console.log("Path to .env file:", envPath);

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
