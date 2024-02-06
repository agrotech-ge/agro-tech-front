import {ref} from "vue";

const useMain = () => {
    const tractors = ref([
        {
            photo: '/src/assets/images/tractors/tractor1.svg',
            publishDate: '2024-02-03 08:30',
            title: 'ქირავდება ტრაქტორი Kubota MU4501, არის იდეალურ მდ...',
            price: '10,000 ₾'
        },
        {
            photo: '/src/assets/images/tractors/tractor2.svg',
            publishDate: '2024-02-03 09:45',
            title: 'იყიდება ტრაქტორი Powertrac Euro...',
            price: '12,000 ₾'
        },
        {
            photo: '/src/assets/images/tractors/tractor3.svg',
            publishDate: '2024-02-03 11:00',
            title: 'ქირავდება',
            price: '15,000 ₾'
        },
        {
            photo: '/src/assets/images/tractors/tractor4.svg',
            publishDate: '2024-02-03 13:15',
            title: 'იყიდება',
            price: '20,000 ₾'
        },
        {
            photo: '/src/assets/images/tractors/tractor5.svg',
            publishDate: '2024-02-03 14:30',
            title: 'იყიდება John Deere 3028EN, საუკეთესო მდგომარებაში...',
            price: '25,000 ₾'
        },
        {
            photo: '/src/assets/images/tractors/tractor6.svg',
            publishDate: '2024-02-03 16:45',
            title: 'ქირავდება John Deere 3028EN, საუკეთ...',
            price: '30,000 ₾'
        },
        {
            photo: '/src/assets/images/tractors/tractor7.svg',
            publishDate: '2024-02-03 18:00',
            title: 'იყიდება',
            price: '35,000 ₾'
        },
        {
            photo: '/src/assets/images/tractors/tractor8.svg',
            publishDate: '2024-02-03 19:15',
            title: 'ქირავდება, სასწრაფოდ',
            price: '40,000 ₾'
        }
    ])

    const members = ref([
        {
            photo: '/src/assets/images/members/member1.svg',
            name: 'ნიკოლოზ კაციტაძე',
            description: 'ჯგუფის ლიდერი, მენტორი, იდეის ავტორი'
        },
        {
            photo: '/src/assets/images/members/member2.svg',
            name: 'ლაშა გაგნიძე',
            description: 'front-end დეველოპერი, back-end დეველოპერი'
        },
        {
            photo: '/src/assets/images/members/member3.svg',
            name: 'კარლო ცუცქირიძე',
            description: 'front-end დეველოპერი, back-end დეველოპერი'
        },
        {
            photo: '/src/assets/images/members/member4.svg',
            name: 'სანდრო ღუღუნიშვილი',
            description: 'back-end დეველოპერი'
        },
        {
            photo: '/src/assets/images/members/member5.svg',
            name: 'ვახო ბარათაშვილი',
            description: 'back-end დეველოპერი, UI/UX დიზაინერი'
        },
        {
            photo: '/src/assets/images/members/member6.svg',
            name: 'ანდრია ბიბიაშვილი',
            description: 'back-end დეველოპერი'
        }
    ])

    return {tractors, members}
}

export default useMain