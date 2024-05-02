// import { authMiddleware } from "@clerk/nextjs";

// // export default authMiddleware({
// //     publicRoutes: ['/', '/api/clerk'],
// //   })

// export default authMiddleware({
//     publicRoute: ["/test"],
// });

// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// middleware.ts

// middleware.ts

// middleware.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { authenticateUser } from './lib/auth'; // Import your authentication logic

// Middleware function to check if a user is authenticated
const requireAuthentication = async (req: NextApiRequest, res: NextApiResponse) => {
    // Check if username and password are provided in the request body
    const { username, password } = req.body;

    // Perform authentication logic using your own method (e.g., querying the database)
    const isAuthenticated = await authenticateUser(username, password);

    if (!isAuthenticated) {
        // If authentication fails, send a 401 Unauthorized response
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    // If authentication succeeds, proceed with the next middleware or handler
};

// Middleware function for caching
const cacheMiddleware = (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    // Implement caching logic here
    // Example: Check if the response exists in cache, if not, proceed with the next middleware or handler
    next();
};

const middleware = {
    requireAuthentication,
    cacheMiddleware,
};

export default middleware;
