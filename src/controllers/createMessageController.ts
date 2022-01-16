import { Request, Response } from "express";
import { CreateMessageService } from "../services/createMessageService";


export class createMessageController {

        public async handle(req: Request, res: Response){
                    
            const {message} = req.body
            const {user_id} = req

            const createMessageService = new CreateMessageService()

            const newMessage = await createMessageService.execute(message, user_id)



            return res.json(newMessage)

        }

}