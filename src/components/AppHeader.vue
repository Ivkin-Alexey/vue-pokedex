<template>
    <header>
        <nav>
            <router-link to="/">All pokemons</router-link>
            <router-link to="/caught">Caught pokemons</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped>
    header {
        display: block;
        background-color: aquamarine;
    }

    nav {
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

</style>