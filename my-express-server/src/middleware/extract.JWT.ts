import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/jwt";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if(!token){
        return res.sendStatus(401);
    }
    jwt.verify(token, config.jwtSecret, (error, data) => {
        if(error){
            return res.sendStatus(403);
        }
        const payload = data;
        next();
    });
};