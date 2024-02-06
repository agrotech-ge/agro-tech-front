import {ref} from "vue"

const useContact = () => {
    const data = ref({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    return {data}
}

export default useContact