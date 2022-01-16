import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: "token is missing"
        })
    }
    
    token = token.split(" ")[1]

    try {
        const {
            sub
        } = verify(token, process.env.JWT_SECRET) as IPayload

        console.log(sub)
        req.user_id = sub

        return next()
    } catch (error) {
        return res.status(401).json({
            message: "token is expired or wrong"
        })
    }
}