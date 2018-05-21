import PokemonListComponent  from '../pokemonList/pokemonList.component'
import PokemonDetailComponent  from '../pokemonDetail/pokemonDetail.component'
// import PokemonDetailNavegation  from '../pokemonDetail/pokemonDetailNavegation'
import {StackNavigator} from 'react-navigation'
import {setContextNavigation} from '../../actions/navegation.action'
import HeaderComponent from './menu/header/Header.component'
//import {connect} from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
// import {addListener} from '../../utils/redux'


const pokemonDetailNavegation = StackNavigator({
  DetailPokemon: {screen: PokemonDetailComponent},
}, {
    headerMode: 'screen',
    initialRouteName: 'DetailPokemon',
    navigationOptions: {
      headerStyle: {backgroundColor: 'red'},
      title: 'You are not logged in'
    }  
})

const Main = StackNavigator({
    Main: {screen: PokemonListComponent},
   // DetailPokemon: {screen: PokemonDetailComponent},

  }, {
    headerMode: 'screen',
    initialRouteName: 'Main',
    navigationOptions: (navigation) => {
        return {header: <HeaderComponent navigation={navigation}></HeaderComponent>}
    }
})




// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Primary: { screen: Main },
  pokemonDetailNavegation: {screen: pokemonDetailNavegation},

}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'Primary'
})

export default PrimaryNav

