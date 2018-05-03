import {combineReducers} from 'redux'
import PokemonReducers from './pokemon.reducers'

export default combineReducers({
    pokemons: PokemonReducers
})