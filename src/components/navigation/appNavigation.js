import pokemonAllComponent from '../pokemonList/all/pokemonAll.component'
import pokemonCaughtComponent from '../pokemonList/caught/pokemonCaught.component'
import PokemonDetailStatsComponent from '../pokemonDetail/pokemonDetailStats/pokemonDetailStats.component'
import PokemonDetailMovesComponent from '../pokemonDetail/pokemonDetailMoves/pokemonDetailMoves.component'
import PokemonDetailLocationComponent from '../pokemonDetail/pokemonDetailLocation/pokemonDetailLocation.component'
import {StackNavigator, TabNavigator} from 'react-navigation'
import HeaderComponent from './menu/header/Header.component'
import React from 'react'

// list the pokemon tab
const tabNavigationPokemonList =  TabNavigator({
  All: { screen: pokemonAllComponent,
    navigationOptions: {
      tabBarLabel: "All",
    }
   } ,
  Caught: { screen: pokemonCaughtComponent } 
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    upperCaseLabel: false,
    style: {
      backgroundColor: 'white'
    },
    labelStyle : {
      color: 'red'
    }
  }
});

// Detail the pokemon tab
const tabNavigationPokemonDetail =  TabNavigator({
  PokemonDetailStats: { 
    screen: PokemonDetailStatsComponent,
    navigationOptions: {
      tabBarLabel: "Stats",
    }
  },
  PokemonDetailMoves: { 
    screen: PokemonDetailMovesComponent,
    navigationOptions: {
      tabBarLabel: "Moves",
    }
  }, 
  PokemonDetailLocation: { 
    screen: PokemonDetailLocationComponent,
    navigationOptions: {
      tabBarLabel: "Location",
    }
  },
},{
  initialRouteName: 'PokemonDetailMoves',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    upperCaseLabel: false,
    style: {
      backgroundColor: 'white'
    },
    labelStyle : {
      color: 'red'
    }
  }
});

const pokemonDetailNavegation = StackNavigator({
  DetailPokemon: {screen: tabNavigationPokemonDetail},
}, {
    headerMode: 'screen',
    initialRouteName: 'DetailPokemon',
    showBack: false,
})

const Main = StackNavigator({
    Main: {screen: tabNavigationPokemonList},
    
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