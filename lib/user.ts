export type UserProps = {
  id: Number;
  fullName: string;
  email: string;
  companyId: Number;
  company: {
    name: string;
  };
}

export async function getLoggedInUser() {
    const result = await fetch('http://localhost:3000/api/user')
    return result.json()
}

