<template>
    <router-link :to="{name: 'pokemonCard', params: {name: pokemon.name, pokemon}}">
        <div class="pokemonCard">
            <img
                    :src="pokemon.imgURL"
                    alt="Pokemon's image"
                    class="pokemonCard__img"
            >
            <h4>{{pokemon.name}}</h4>
            <button v-if="pokemon.isCaught">Release</button>
            <button v-else>Catch!</button>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "PokemonItem",
        props: ['pokemon']
    }
</script>

<style scoped>
    .pokemonCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10vw;
        min-width: 100px;
        border-radius: 5px;
        background: antiquewhite;
        margin: 5vw;
        padding: 1vw;
    }

    .pokemonCard__img {
        width: 100%;
    }
</style>