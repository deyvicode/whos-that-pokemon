<template>
    <h1 v-if="!pokemon">Loading...</h1>
    <div v-else>
        <h1>¿Who's that Pokemon?</h1>
        <pokemon-picture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"></pokemon-picture>
        <pokemon-options :pokemons="pokemonArr" @selection="checkSelection"></pokemon-options>
        
        <div v-if="showAnswer" class="fade-in">
            <h2>{{ message }}</h2>
            <button @click="newGame">Nuevo Juego</button>
        </div>
    </div>
</template>

<script>
import PokemonPicture from '../components/Picture.vue'
import PokemonOptions from '../components/Options.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    mounted() {
        this.mixPokemonArray()
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkSelection(idPokemon) {
            this.showPokemon = true
            this.message = (idPokemon === this.pokemon.id) ? 'Correct' : 'Oops';
            this.message += `, the pokemon is ${this.pokemon.name}`

            this.showAnswer = true
        },
        newGame() {
            this.pokemonArr = []
            this.pokemon = null
            this.showPokemon = false
            this.showAnswer = false
            this.message = ''

            this.mixPokemonArray()
        }
    }
}
</script>

<style>

</style>