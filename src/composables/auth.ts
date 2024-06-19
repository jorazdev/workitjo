
import { useRouter } from "vue-router";

export default function useAuth() {
    const router = useRouter()

    const onLogin = async () => {
        await router.push({ name: 'company'})
    }

    return {
        onLogin
    }
}