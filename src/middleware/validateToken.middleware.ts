import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Payload } from '@interfaces/payload.interface';

const { TOKEN_SECRET } = process.env;

export const ValidateToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token: string | undefined = req.header('auth-token');
        if (!token) {
            res.status(401).json({ success: false, response: 'Access denied' });
            return;
        }
        const payload = jwt.verify(token, TOKEN_SECRET || 'TokenTest') as Payload;
        req.userId = payload._id;
        next();
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', e.message);
            res.status(401).json({ success: false, response: e.message });
        } else {
            console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', e);
            res.status(401).json({ success: false, response: e });
        }
        throw e;
    }
};
