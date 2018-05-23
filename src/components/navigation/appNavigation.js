// import PokemonListComponent  from '../pokemonList/pokemonList.component'
import pokemonAllComponent from '../pokemonList/all/pokemonAll.component'
import pokemonCaughtComponent from '../pokemonList/caught/pokemonCaught.component'
import PokemonDetailStatsComponent from '../pokemonDetail/pokemonDetailStats/pokemonDetailStats.component'
import PokemonDetailMovesComponent from '../pokemonDetail/pokemonDetailMoves/pokemonDetailMoves.component'
import PokemonDetailLocationComponent from '../pokemonDetail/pokemonDetailLocation/pokemonDetailLocation.component'
import PokemonDetailComponent from '../pokemonDetail/pokemonDetail.component';
import {StackNavigator, TabNavigator, TabBarBottom,} from 'react-navigation'
import HeaderComponent from './menu/header/Header.component'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native'

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
  PokemonDetailLocation: { 
    screen: PokemonDetailLocationComponent,
    navigationOptions: {
      tabBarLabel: "Location",
    }
  },
  PokemonDetailMoves: { 
    screen: PokemonDetailMovesComponent,
    navigationOptions: {
      tabBarLabel: "Moves",
    }
  } 
},{
  initialRouteName: 'PokemonDetailStats',
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
    /*
    navigationOptions: (navigation) => {
     return {
       headerTitle: 'titulo ? ',
      headerLeft: (
        <Icon name="arrow-back" size={30} color="#4F8EF7"
          onPress={() => { return navigation.navigation.navigate('Primary')}}
        />
      ),
      headerStyle: { backgroundColor: 'blue'},
     }
    }
    */
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