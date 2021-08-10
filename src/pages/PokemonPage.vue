<template>
    <h1 v-if="!pokemon">Cargando...</h1>
    <div v-else>
        <h1 class="title">¿Quién es ese Pokémon?</h1>
        <pokemon-picture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"></pokemon-picture>
        <pokemon-options :pokemons="pokemonArr" :finish="showPokemon" @selection="checkSelection"></pokemon-options>
        
        <div v-if="showAnswer" class="fade-in">
            <h2>{{ message }}</h2>
            <button @click="newGame">Jugar otra vez</button>
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
            this.message = (idPokemon === this.pokemon.id) ? 'Correcto' : 'Incorrecto';
            this.message += `, el pokémon es ${this.pokemon.name}`

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

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');
    
    .title {
        -webkit-text-stroke: .5px #0f305b;
        font-family: 'Gochi Hand', Avenir, Helvetica, Arial, sans-serif;
        color: #f5c044;
        font-size: 3.2rem;
        text-shadow:
            3px 3px 0 #0f305b,
            -1px -1px 0 #0f305b,  
            1px -1px 0 #0f305b,
            -1px 1px 0 #0f305b,
            1px 1px 0 #0f305b;
    }

    button {
        font-family: 'Gochi Hand', Avenir, Helvetica, Arial, sans-serif;
        background-color: #f5c044;
        color: #0d325f;
        font-size: 1.5rem;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        cursor: pointer;
    }

    button:hover {
        background-color: #e9ab19;
    }

    h2 {
        color: #041e3d;
    }
</style>