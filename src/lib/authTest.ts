const authFunctions = require("./auth.ts");

// Example usage
async function main() {
    // Login
    const loggedIn = await authFunctions.login("210988", "210988");
    if (loggedIn) {
        // Perform actions for logged-in user
        console.log("User is logged in");
    } else {
        // Handle failed login
        console.log("Login failed");
    }

    // Logout
    await authFunctions.logout();
}

// Call the main function
main();
