import prisma from "../../../../lib/prisma";
import { getSession } from "next-auth/client";
import { UserProps } from "../../../../lib/user";

export default async function handle(req, res) {
    const session = await getSession({ req });
    if(session) {
        const user: UserProps = await prisma.user.findFirst({
            where: { email: session.user.email},
            include: {
                company: {
                    select: { name: true }
                }
            }
        });
        res.json(user)
    }else{
        res.json({ "data": "not logged In" })
    }


}