import {ref} from "vue"
import {auth} from "../firebase/init"
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useRouter} from "vue-router"

export default function useRegister() {
    const router = useRouter()
    const password = ref('');
    const repeatPassword = ref('');

    const formFields = [
        {placeholder: "სახელი", model: "firstName"},
        {placeholder: "გვარი", model: "lastName"},
        {placeholder: "ქალაქი", model: "city"},
        {placeholder: "ტელ. ნომერი", model: "phoneNumber"},
        {placeholder: "ელ. ფოსტა", model: "email"}
    ];

    const additionalFields = [
        {placeholder: "პინკოდი", model: "verCode"}
    ];

    const formData = ref({
        firstName: '',
        lastName: '',
        city: '',
        phoneNumber: '',
        email: '',
        verCode: '',
    });

    const cities = ref([
        "თბილისი",
        "ბათუმი",
        "ქუთაისი",
        "რუსთავი",
        "გორი",
        "ზუგდიდი",
        "ფოთი",
        "ხაშური",
        "სამტრედია",
        "სენაკი",
        "ზესტაფონი",
        "მარნეული",
        "თელავი",
        "ახალციხე",
        "ქობულეთი",
        "ოზურგეთი",
        "კასპი",
        "ჭიათურა",
        "წყალტუბო",
        "საგარეჯო",
        "გარდაბანი",
        "ბორჯომი",
        "ტყიბული",
        "ხონი",
        "ბოლნისი",
        "ახალქალაქი",
        "გურჯაანი",
        "მცხეთა",
        "ყვარელი",
        "ახმეტა",
        "ქარელი",
        "ლანჩხუთი",
        "დუშეთი",
        "საჩხერე",
        "დედოფლისწყარო",
        "ლაგოდეხი",
        "ნინოწმინდა",
        "აბაშა",
        "წნორი",
        "თერჯოლა",
        "მარტვილი",
        "ხობი",
        "წალენჯიხა",
        "ვანი",
        "ბაღდათი",
        "ვალე",
        "ჩხოროწყუ",
        "თეთრიწყარო",
        "დმანისი",
        "ონი",
        "წალკა",
        "ამბროლაური",
        "სიღნაღი",
        "ცაგერი",
        "ჯვარი",
        "სოხუმი",
        "ცხინვალი",
        "გაგრა",
        "ოჩამჩირე",
        "გუდაუთა",
        "გალი",
        "ტყვარჩელი",
        "ახალი ათონი"
    ]);

    const validateFormData = () => {
        const valid = Object.values(formData.value).every(d => d);
        if (valid) {
            router.push('/auth/register2/' + formData.value['email']);
        } else {
            alert("შეავსეთ ყველა ველი!")
        }
    }

    const error = ref(null);
    const isVerifying = ref(false);
    const isVerified = ref(false);
    const handleRegister = async () => {
        error.value = null;
        isVerifying.value = false;
        isVerified.value = false;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, 'lashadeveloper@gmail.com', '1234567890');

            await sendEmailVerification(userCredential.user, {
                url: 'http://localhost:5173/auth/register2',
            });

            isVerifying.value = true;
            alert('Verification email sent! Please check your inbox and click the link.');
        } catch (error) {
            error.value = error.message;
            console.log(error)
        }
    }

    return {
        formFields,
        additionalFields,
        formData,
        password,
        repeatPassword,
        validateFormData,
        handleRegister,
        cities
    }
}