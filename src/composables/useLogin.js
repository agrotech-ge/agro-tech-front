import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase/init'
import {ref} from "vue";
import {useRouter} from "vue-router";

export default function useLogin() {
    const router = useRouter()
    const checked = ref();
    const email = ref();
    const password = ref();

    const handleSubmit = async () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((response) => {
                router.push('/')
                console.log(response)
            })
            .catch((error) => console.log(error))
    }

    return {
        checked,
        email,
        password,
        handleSubmit,
    };
};