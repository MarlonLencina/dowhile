import prismaClient from "../prisma";


export class getProfileService {

    public async execute(user_id: string) {

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        return user

    }

}