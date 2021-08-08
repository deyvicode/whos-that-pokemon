import pokemonApi from "../api/pokemonApi";

// genera un numero entero aleatorio entre min y max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getPokemons = () => {

    let pokemons = []
    
    // ejecuto 4 veces la generacion de un numero aleatorio
    for (let index = 0; index < 4; index++) {
        let pok = 0

        do {
            // genero un numero aleatorio entre 1 y 650
            pok = getRandomInt(1, 650)
        } while (pokemons.includes(pok)) 
        // si el numero ya existe en pokemons[] va generar nuevamente 
        // hasta que consiga uno diferente.

        //agrego el numero generado al arrglo de pokemones
        pokemons.push(pok)
    }

    return pokemons
}

const getPokemonOptions = async () => {
    const idPokemons = getPokemons()
    const pokemons = await getPokemonNames(idPokemons)
    return pokemons
}

const getPokemonNames = async ([a, b, c, d] = []) => {
    const promises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    const [r1, r2, r3, r4] = await Promise.all(promises)
    
    return [
        {id: r1.data.id, name: r1.data.name},
        {id: r2.data.id, name: r2.data.name},
        {id: r3.data.id, name: r3.data.name},
        {id: r4.data.id, name: r4.data.name}
    ]
}

export default getPokemonOptions