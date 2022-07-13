<template>
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
</template>

<script>
    export default {
        name: "PokemonCard",
        data() {
            return {
                pokemon: this
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>