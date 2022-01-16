import { Request, Response } from "express";
import prismaClient from "../prisma";
import { GetLastThreeMessagesService } from "../services/GetLastThreeMessagesService";

export class GetLastThreeMessagesController {

    public async handle(req: Request, res: Response) {

        const getLastThreeMessagesService = new GetLastThreeMessagesService()

        const messages = await getLastThreeMessagesService.execute()

        res.json({
            messages
        })
    }

}