import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import prisma from '../../../../lib/prisma'
let userAccount = null;

const configuration = {
    session: {
        jwt: true,
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email,
                        password: credentials.password
                    }
                });

                if (user == null) {
                    return null;
                } else {
                    userAccount = user;
                    return user;
                }
            }
        })
    ],
}
export default (req, res) => NextAuth(req, res, configuration)