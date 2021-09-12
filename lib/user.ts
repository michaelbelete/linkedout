export type UserProps = {
  id: Number;
  fullName: string;
  email: string;
  companyId: Number;
  company: {
    name: string;
  };
}

export type Company = {
  id: Number;
  name: string;
}

export async function getLoggedInUserCompany(email) {
    const result = await fetch(`http://localhost:3000/api/company/${email}`)
    return result.json()
}

