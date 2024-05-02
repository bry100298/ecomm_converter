const config = require("dotenv");
const path = require("path");

// Resolve the path to .env file
const envFilePath = path.resolve(__dirname, "..", "..", ".env");

// Load environment variables from .env file
const loadedEnvConfig = config.config({ path: envFilePath });

// Check if there was an error loading the .env file
if (loadedEnvConfig.error) {
    console.error("Error loading .env file:", loadedEnvConfig.error);
    process.exit(1); // Exit the process if there's an error loading the .env file
}

// Database configuration
const databaseConfiguration = {
    server: process.env.DB_SERVER || "",
    database: process.env.DB_DATABASE || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    options: {
        trustedConnection: false, // Use SQL Server Authentication
    },
    driver: "msnodesqlv8",
};

module.exports = databaseConfiguration;
