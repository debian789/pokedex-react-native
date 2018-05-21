import {combineReducers} from 'redux'
import PokemonReducers from './pokemon.reducers'
import NavigationReducers from './navigation.reducers'
import PokemonDetailReducers from './pokemonDetail.reducers'

export default combineReducers({
    pokemons: PokemonReducers,
    nav: NavigationReducers,
    pokemonDetail: PokemonDetailReducers,
})