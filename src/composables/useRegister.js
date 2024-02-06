import {ref} from "vue"
import {auth} from "../firebase/init"
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'

const useRegister = () => {
    const fields = [
        {placeholder: "სახელი", model: "firstName"},
        {placeholder: "გვარი", model: "lastName"},
        {placeholder: "ქალაქი", model: "city"},
        {placeholder: "ტელ. ნომერი", model: "phoneNumber"},
        {placeholder: "ელ. ფოსტა", model: "email"},
        {placeholder: "პაროლი", model: "password", isPassword: true},
        {placeholder: "გაიმეორეთ", model: "repeat", isPassword: true}
    ]

    const data = ref({
        firstName: '',
        lastName: '',
        city: '',
        phoneNumber: '',
        email: '',
        password: '',
        repeat: ''
    })

    const register = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.value.email, data.value.password)

            await sendEmailVerification(userCredential.user)
            console.log(data.value)
            console.log(userCredential.user.uid)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        fields,
        data,
        register
    }
}

export default useRegister