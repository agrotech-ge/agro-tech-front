import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase/init'
import {ref} from "vue";

export default function useLogin() {
    const checked = ref();
    const email = ref();
    const password = ref();

    const handleSubmit = async () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((response) =>
                console.log(response))
            .catch((error) => console.log(error))
    }

    return {
        checked,
        email,
        password,
        handleSubmit,
    };
};