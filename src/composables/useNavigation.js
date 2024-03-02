import {ref} from "vue"

export default function useNavigation() {
    const routes = ref([
        {
            title: 'მთავარი',
            path: '/'
        },
        {
            title: 'განცხადებები',
            path: '/listings'
        },
        {
            title: 'ჩვენს შესახებ',
            path: '/about'
        },
        {
            title: 'კონტაქტი',
            path: '/contact'
        },
        {
            title: 'შესვლა',
            path: '/auth/login'
        }
    ])

    const links = [
        {
            url: '#',
            icon: '',
        },
        {
            url: '#',
            icon: ''
        },
        {
            url: '#',
            icon: ''
        }
    ]

    const isAuthenticated = ref(true)
    const userName = ref('ვახო')

    return {routes, links, isAuthenticated, userName}
}