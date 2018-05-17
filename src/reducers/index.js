import {combineReducers} from 'redux'
import PokemonReducers from './pokemon.reducers'
import PokemonListReducers from './pokemonList.reducers'
import NavigationReducers from './navigation.reducers'

export default combineReducers({
    pokemons: PokemonReducers,
    navigation: NavigationReducers,
    pokemonList: PokemonListReducers
})