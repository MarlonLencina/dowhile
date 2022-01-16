import { Request, Response } from "express";
import prismaClient from "../prisma";
import { getProfileService } from "../services/GetProfile";

export class GetProfileController {

    public async handle(req: Request, res: Response) {

        const {user_id} = req

        const GetProfileService = new getProfileService()

        const user = await GetProfileService.execute(user_id)

        res.json({
            user
        })
    }

}