import {combineReducers} from 'redux'
import PokemonReducers from './pokemon.reducers'
import NavigationReducers from './navigation.reducers'
import PokemonDetailReducers from './pokemonDetail.reducers'
import PokemonDetailEvolutionReducers from './pokemonDetailEvolution.reducers'
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
})