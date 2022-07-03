<template>
    <PokemonList/>
</template>

<script>
    import PokemonList from "@/components/PokemonList";

export default {
  name: 'App',
    components: {
      PokemonList
    }
}
</script>

<style>
    button {
        cursor: pointer;
    }
</style>
