const dotenv = require("dotenv");
const path = require("path");

// Resolve the path to .env file
const envPath = path.resolve(__dirname, "..", "..", ".env");

// Load environment variables from .env file
const envConfig = dotenv.config({ path: envPath });

// Check if there was an error loading the .env file
if (envConfig.error) {
    console.error("Error loading .env file:", envConfig.error);
    process.exit(1); // Exit the process if there's an error loading the .env file
}

// Database configuration
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

module.exports = dbConfig;
