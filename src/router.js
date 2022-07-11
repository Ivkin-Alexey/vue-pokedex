import * as VueRouter from 'vue-router'
import PokemonList from "@/components/PokemonList"
import CaughtPokemonList from "@/components/CaughtPokemonList"

const routes = [
    {
        path: '/',
        component: PokemonList
    },
    {
        path: '/сaught',
        component: CaughtPokemonList
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router
