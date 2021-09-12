import prisma from '../../../../lib/prisma';
import { User } from '../../../../lib/user';

export default async function handle(req, res) {
    const { email } = req.query

    const user: User = await prisma.user.findFirst({
        where: {
            email: email
        },
        include: {
            company: {
                select: {
                    name: true
                }
            }
        }
    });

    res.json(user?.company)
}
