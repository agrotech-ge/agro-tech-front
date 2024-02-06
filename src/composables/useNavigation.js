import {ref} from "vue"

const useNavigation = () => {
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

    return {routes}
}

export default useNavigation