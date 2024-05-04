// login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { authenticateUser } from '../../lib/auth';

interface CustomNextApiRequest extends NextApiRequest {
    session: { [key: string]: any }; // Define the session property
}

export default async function handler(req: CustomNextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        const isAuthenticated = await authenticateUser(username, password);

        if (isAuthenticated) {
            // Set session variable indicating user is logged in
            req.session.isLoggedIn = true;
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
