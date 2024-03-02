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
            title: 'კონტაქტი',
            path: '/contact'
        },
        {
            title: 'შესვლა',
            path: '/auth/login'
        }
    ])

    return {routes}
}