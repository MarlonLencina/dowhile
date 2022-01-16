import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/authenticateUserService";


export class AuthenticateUserController {

    public async handle (req: Request, res: Response) {

        const {code} = req.body

        const service = new AuthenticateUserService()

       try {
        const result = await service.execute(code)

        res.status(200).json(result)
       } catch (error) {
            res.status(400).json(error.message)
       }
        

    }
}