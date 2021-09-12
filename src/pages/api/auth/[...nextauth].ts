import { User } from '.prisma/client';
import NextAuth from 'next-auth';
import bcrypt from 'bcrypt';
import Providers from 'next-auth/providers';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../../lib/prisma';
let userAccount = null;

const configuration = {
    adapter: PrismaAdapter(prisma),
    session: {
        jwt: true,
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const user : User = await prisma.user.findFirst({
                    where: {
                        email: credentials.email,
                    }
                });

                if (user == null) {
                    return null;
                } else {
                    const checkPassword = await bcrypt.compare(
                        credentials.password, user.password
                    )

                    if(checkPassword) {
                        userAccount = {
                            "name": user.fullName,
                            "email": user.email,
                            "image": user.companyId
                        }
    
                        return userAccount;

                    }else{
                        return null;
                    }
                }
            }
        })
    ],
    callbacks: {
        async session(session, token) {
            if (userAccount !== null)
            {
                session.user = userAccount;
            }
            else if (typeof token.user !== typeof undefined && (typeof session.user === typeof undefined 
                || (typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined)))
            {
                session.user = token.user;
            }
            else if (typeof token !== typeof undefined)
            {
                session.token = token;
            }
            return session;
        },
    }
}
export default (req, res) => NextAuth(req, res, configuration)