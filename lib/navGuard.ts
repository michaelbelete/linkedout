import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

export function checkLoggedIn() {
    const [session, loading] = useSession();
    const router = useRouter();

    if(!loading) {
        if(session){
            router.push('/')
        }
    }
}