import { Router, Request, Response, response } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { createMessageController } from "../controllers/createMessageController";
import { GetLastThreeMessagesController } from "../controllers/GetLastThreeMessagesController";
import { GetProfileController } from "../controllers/GetProfileController";
import { ensureAuthenticated } from "../Middlewares/ensureAuthenticated";

export const routes = Router()

routes.get("/github", (req: Request, res: Response) => {

    return res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)

})

routes.get("/signin/callback", (req: Request, res: Response) => {

    const {code} = req.query

    return res.json({
        message: "code was generated",
        code
    })

})

routes.post("/authenticate", new AuthenticateUserController().handle)

routes.post("/messages", ensureAuthenticated, new createMessageController().handle)

routes.get("/messages", new GetLastThreeMessagesController().handle)

routes.get("/profile", ensureAuthenticated, new GetProfileController().handle)