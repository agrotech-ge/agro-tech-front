import {ref} from "vue"

export default function useMain() {
    const tractors = ref([
        {
            id: 1,
            photo: '/src/assets/images/tractors/tractor1.svg',
            publishDate: '2024-02-03 08:30',
            title: 'ქირავდება ტრაქტორი Kubota MU4501, არის იდეალურ მდ...',
            desc: 'იყიდება, არის კარგ მდგომარეობაში',
            price: '10,000 ₾',
            full_name: 'გიორგი გიორგაძე',
            phone_number: '551-11-12-22',
            specs: {
                manufacturer: 'Farmtrac',
                model: 'grandMA',
                release_year: '2016',
                fuel_type: 'დიზელი',
                engine_volume: '3.3',
                listing_type: 'იყიდება'
            },
            photos: [
                '/src/assets/images/tractor/Rectangle 39.png',
                '/src/assets/images/tractor/Rectangle 40.png',
                '/src/assets/images/tractor/Rectangle 41.png',
                '/src/assets/images/tractor/Rectangle 42.png'
            ]
        },
        {
            id: 2,
            photo: '/src/assets/images/tractors/tractor2.svg',
            publishDate: '2024-02-03 09:45',
            title: 'იყიდება ტრაქტორი Powertrac Euro...',
            desc: 'იყიდება, არის კარგ მდგომარეობაში',
            price: '12,000 ₾',
            full_name: 'გიორგი გიორგაძე',
            phone_number: '551-11-12-22',
            specs: {
                manufacturer: 'Farmtrac',
                model: 'grandMA',
                release_year: '2016',
                fuel_type: 'დიზელი',
                engine_volume: '3.3',
                listing_type: 'იყიდება'
            },
            photos: [
                '/src/assets/images/tractor/Rectangle 39.png',
                '/src/assets/images/tractor/Rectangle 40.png',
                '/src/assets/images/tractor/Rectangle 41.png',
                '/src/assets/images/tractor/Rectangle 42.png'
            ]
        },
        {
            id: 3,
            photo: '/src/assets/images/tractors/tractor3.svg',
            publishDate: '2024-02-03 11:00',
            title: 'ქირავდება',
            desc: 'იყიდება, არის კარგ მდგომარეობაში',
            price: '15,000 ₾',
            full_name: 'გიორგი გიორგაძე',
            phone_number: '551-11-12-22',
            specs: {
                manufacturer: 'Farmtrac',
                model: 'grandMA',
                release_year: '2016',
                fuel_type: 'დიზელი',
                engine_volume: '3.3',
                listing_type: 'იყიდება'
            },
            photos: [
                '/src/assets/images/tractor/Rectangle 39.png',
                '/src/assets/images/tractor/Rectangle 40.png',
                '/src/assets/images/tractor/Rectangle 41.png',
                '/src/assets/images/tractor/Rectangle 42.png'
            ]
        },
        {
            id: 4,
            photo: '/src/assets/images/tractors/tractor4.svg',
            publishDate: '2024-02-03 13:15',
            title: 'იყიდება',
            desc: 'იყიდება, არის კარგ მდგომარეობაში',
            price: '20,000 ₾',
            full_name: 'გიორგი გიორგაძე',
            phone_number: '551-11-12-22',
            specs: {
                manufacturer: 'Farmtrac',
                model: 'grandMA',
                release_year: '2016',
                fuel_type: 'დიზელი',
                engine_volume: '3.3',
                listing_type: 'იყიდება'
            },
            photos: [
                '/src/assets/images/tractor/Rectangle 39.png',
                '/src/assets/images/tractor/Rectangle 40.png',
                '/src/assets/images/tractor/Rectangle 41.png',
                '/src/assets/images/tractor/Rectangle 42.png'
            ]
        },
        {
            id: 5,
            photo: '/src/assets/images/tractors/tractor5.svg',
            publishDate: '2024-02-03 14:30',
            title: 'იყიდება John Deere 3028EN, საუკეთესო მდგომარებაში...',
            desc: 'იყიდება, არის კარგ მდგომარეობაში',
            price: '25,000 ₾',
            full_name: 'გიორგი გიორგაძე',
            phone_number: '551-11-12-22',
            specs: {
                manufacturer: 'Farmtrac',
                model: 'grandMA',
                release_year: '2016',
                fuel_type: 'დიზელი',
                engine_volume: '3.3',
                listing_type: 'იყიდება'
            },
            photos: [
                '/src/assets/images/tractor/Rectangle 39.png',
                '/src/assets/images/tractor/Rectangle 40.png',
                '/src/assets/images/tractor/Rectangle 41.png',
                '/src/assets/images/tractor/Rectangle 42.png'
            ]
        },
        {
            id: 6,
            photo: '/src/assets/images/tractors/tractor6.svg',
            publishDate: '2024-02-03 16:45',
            title: 'ქირავდება John Deere 3028EN, საუკეთ...',
            desc: 'იყიდება, არის კარგ მდგომარეობაში',
            price: '30,000 ₾',
            full_name: 'გიორგი გიორგაძე',
            phone_number: '551-11-12-22',
            specs: {
                manufacturer: 'Farmtrac',
                model: 'grandMA',
                release_year: '2016',
                fuel_type: 'დიზელი',
                engine_volume: '3.3',
                listing_type: 'იყიდება'
            },
            photos: [
                '/src/assets/images/tractor/Rectangle 39.png',
                '/src/assets/images/tractor/Rectangle 40.png',
                '/src/assets/images/tractor/Rectangle 41.png',
                '/src/assets/images/tractor/Rectangle 42.png'
            ]
        },
        {
            id: 7,
            photo: '/src/assets/images/tractors/tractor7.svg',
            publishDate: '2024-02-03 18:00',
            title: 'იყიდება',
            desc: 'იყიდება, არის კარგ მდგომარეობაში',
            price: '35,000 ₾',
            full_name: 'გიორგი გიორგაძე',
            phone_number: '551-11-12-22',
            specs: {
                manufacturer: 'Farmtrac',
                model: 'grandMA',
                release_year: '2016',
                fuel_type: 'დიზელი',
                engine_volume: '3.3',
                listing_type: 'იყიდება'
            },
            photos: [
                '/src/assets/images/tractor/Rectangle 39.png',
                '/src/assets/images/tractor/Rectangle 40.png',
                '/src/assets/images/tractor/Rectangle 41.png',
                '/src/assets/images/tractor/Rectangle 42.png'
            ]
        },
        {
            id: 8,
            photo: '/src/assets/images/tractors/tractor8.svg',
            publishDate: '2024-02-03 19:15',
            title: 'ქირავდება, სასწრაფოდ',
            desc: 'იყიდება, არის კარგ მდგომარეობაში',
            price: '40,000 ₾',
            full_name: 'გიორგი გიორგაძე',
            phone_number: '551-11-12-22',
            specs: {
                manufacturer: 'Farmtrac',
                model: 'grandMA',
                release_year: '2016',
                fuel_type: 'დიზელი',
                engine_volume: '3.3',
                listing_type: 'იყიდება'
            },
            photos: [
                '/src/assets/images/tractor/Rectangle 39.png',
                '/src/assets/images/tractor/Rectangle 40.png',
                '/src/assets/images/tractor/Rectangle 41.png',
                '/src/assets/images/tractor/Rectangle 42.png'
            ]
        }
    ])

    function getTractorById(id) {
        return tractors.value.find(tractor => tractor.id === id)
    }

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

    const _members = ref([
        {
            photo: '/src/assets/images/members/member1.svg',
            name: 'ნიკოლოზ კაციტაძე',
            description: 'ნიკოლოზ კაციტაძე არის ჯგუფის ლიდერი, მენტორი და იდეის ავტორი.'
        },
        {
            photo: '/src/assets/images/members/member2.svg',
            name: 'ლაშა გაგნიძე',
            description: 'ლაშა გაგნიძე არის ჯგუფის წევრი, რომელსაც ეკუთვნის ამ  საიტის front და back მხარეები.'
        },
        {
            photo: '/src/assets/images/members/member3.svg',
            name: 'კარლო ცუცქირიძე',
            description: 'კარლო ცუცქირიძე არის ჯგუფის წევრი, რომელსაც ეკუთვნის ამ საიტის front და back მხარეები.'
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

    return {tractors, getTractorById, members, _members}
}