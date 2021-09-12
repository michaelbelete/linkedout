import prisma from '../../../../lib/prisma';
import bcrypt from 'bcrypt';

export default async function handle(req, res) {
    const { fullName, email, password, company } = req.body;
    let companyId;
    const dbCompany = await prisma.company.findFirst({
        where: {
            name: company,
        },
    });

    if (dbCompany) {
        companyId = dbCompany.id
    } else {
        //create company
        const addCompany = await prisma.company.create({
            data: {
                name: company
            }
        });

        companyId = addCompany.id
    }

    const checkEmail = await prisma.user.findFirst({
        where: {
            email: email,
        }
    });

    if (checkEmail) {
        res.json("User already Exist please login");
    } else {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const dbUser = await prisma.user.create({
            data: {
                fullName: fullName,
                email: email,
                password: hashedPassword,
                company: { connect: { id: companyId } }
            }
        });

        res.json(dbUser);
    }


}
