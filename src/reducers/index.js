import {combineReducers} from 'redux'
import PokemonReducers from './pokemon.reducers'
import NavigationReducers from './navigation.reducers'
import PokemonDetailReducers from './pokemonDetail.reducers'
import PokemonDetailEvolutionReducers from './pokemonDetailEvolution.reducers'
import NavigationParameterReducers from './navigationParameter.reducers'
import SearchReducers from './search.reducers'

import {
    connectRequest,
    entitiesReducer,
    queriesReducer,
    queryMiddleware,
  } from 'redux-query';

export default combineReducers({
    pokemons: PokemonReducers,
    nav: NavigationReducers,
    pokemonDetail: PokemonDetailReducers,
    pokemonDetailEvolution: PokemonDetailEvolutionReducers,
    entities: entitiesReducer,
    queries: queriesReducer,
    navigationParameter: NavigationParameterReducers,
    search: SearchReducers
})