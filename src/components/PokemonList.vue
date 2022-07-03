<template>
    <ul class="pokemonList">
        <PokemonItem
                v-for="pokemon of pokemons"
                :pokemon="pokemon"
                :key="pokemon.name"
        />
    </ul>
</template>

<script>
    import PokemonItem from "@/components/PokemonItem";

    export default {
        name: "pokemonList",
        components: {PokemonItem},
        data() {
            return {
                pokemons: []
            }
        },
        mounted() {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
                .then(res => res.json())
                .then(data => {
                    let promises = data.results.map((result) => {
                        return fetch(result.url)
                            .then(res => res.json())
                            .then(resultData => {
                                return {
                                    name: resultData.name,
                                    url: result.url,
                                    imgURL: resultData.sprites.other['official-artwork'].front_default,
                                    types: resultData.types.map(type => type.type.name).join(', '),
                                    abilities: resultData.abilities.map(ability => ability.ability.name).join(', '),
                                    weight: resultData.weight,
                                    isCaught: false,
                                }
                            })
                    })
                    Promise.all(promises).then(pokemons => this.pokemons = this.pokemons.concat(pokemons))
                })
        }
    }


</script>

<style scoped>
    .pokemonList {
        display: flex;
        flex-wrap: wrap;
    }
</style>