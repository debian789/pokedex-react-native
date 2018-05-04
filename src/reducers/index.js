import {combineReducers} from 'redux'
import PokemonReducers from './pokemon.reducers'

import NavigationReducers from './navigation.reducers'

export default combineReducers({
    pokemons: PokemonReducers,
    navigation: NavigationReducers
})