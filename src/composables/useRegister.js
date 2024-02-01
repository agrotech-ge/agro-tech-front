import {ref} from "vue";
import {auth} from "../firebase/init";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from "vue-router";

export default function useRegister() {
    const router = useRouter()
    const password = ref('');
    const repeatPassword = ref('');

    const formFields = [
        {placeholder: "სახელი", model: "firstName"},
        {placeholder: "გვარი", model: "lastName"},
        {placeholder: "ქალაქი", model: "city"},
        {placeholder: "უბანი", model: "distinct"},
        {placeholder: "ელ. ფოსტა", model: "email"}
    ];

    const additionalFields = [
        {placeholder: "პინკოდი", model: "verCode"}
    ];

    const formData = ref({
        firstName: '',
        lastName: '',
        city: '',
        distinct: '',
        email: '',
        verCode: '',
    });

    const validateFormData = () => {
        const valid = Object.values(formData.value).every(d => d);
        if (valid) {
            router.push('/auth/registration-step-two');
        } else {
            alert("შეავსეთ ყველა ველი!")
        }
    }

    const handleRegister = async () => {
        if (password.value !== repeatPassword.value) {
            alert('პაროლები არ ემთხვევა!')
        } else {
            createUserWithEmailAndPassword(auth, formData['email'], password.value)
                .then((response) =>
                    console.log(response))
                .catch((error) => console.log(error))
        }
    };

    return {
        formFields,
        additionalFields,
        formData,
        password,
        repeatPassword,
        validateFormData,
        handleRegister
    }
}