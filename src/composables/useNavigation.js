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
            icon: '<i class="btn glass fa-brands fa-square-facebook text-[#4267B2]"/>'
        },
        {
            url: '#',
            icon: '<i class="btn glass fa-brands fa-instagram text-[#E1306C]"/>'
        },
        {
            url: '#',
            icon: '<i class="btn glass fa-brands fa-twitter text-[#1DA1F2]"/>'
        }
    ]

    return {routes, links}
}