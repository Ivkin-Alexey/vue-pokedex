import * as VueRouter from 'vue-router'
import PokemonList from "@/components/PokemonList"
import CaughtPokemonList from "@/components/CaughtPokemonList"
import PokemonCard from "@/components/PokemonCard";

const routes = [
    {
        path: '/',
        component: PokemonList
    },
    {
        path: '/сaught',
        component: CaughtPokemonList
    },
    {
        path: '/pokemon/:name',
        name: 'pokemonCard',
        component: PokemonCard
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router
