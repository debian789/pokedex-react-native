import {combineReducers} from 'redux'
import PokemonReducers from './pokemon.reducers'
// import PokemonListReducers from './pokemonList.reducers'
import NavigationReducers from './navigation.reducers'
import PokemonDetailReducers from './pokemonDetail.reducers'
// import PokemonDetailTabReducers from './pokemonDetailTab.reducers'

export default combineReducers({
    pokemons: PokemonReducers,
    nav: NavigationReducers,
    //pokemonList: PokemonListReducers,
    pokemonDetail: PokemonDetailReducers,
  //  pokemonDetailTab: PokemonDetailTabReducers
})