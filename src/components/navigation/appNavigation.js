import PokemonListComponent  from '../pokemonList/pokemonList.component'
import PokemonDetailComponent  from '../pokemonDetail/pokemonDetail.component'
import pokemonAllComponent from '../pokemonList/all/pokemonAll.component'
import pokemonCaughtComponent from '../pokemonList/caught/pokemonCaught.component'
import {StackNavigator, TabNavigator, TabBarBottom,} from 'react-navigation'
import {setContextNavigation} from '../../actions/navegation.action'
import HeaderComponent from './menu/header/Header.component'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';


const tabBarIcon = (nameInactive, nameActive) => ({ tintColor, focused }) => (
  <Icon name={focused ? nameActive : nameInactive} size={26} color={focused ? tintColor : Colors.tabInactive} />
);



const tab =  TabNavigator({
  All: { screen: pokemonAllComponent,
    navigationOptions: {
      tabBarLabel: "Statistics",
      tabBarIcon: tabBarIcon("ios-stats-outline", "ios-stats")
    }
   } ,
  Caught: { screen: pokemonCaughtComponent } 
},{
tabBarPosition: 'bottom',

tabBarOptions: {
  activeTintColor:'white'
}

});


const pokemonDetailNavegation = StackNavigator({
  DetailPokemon: {screen: PokemonDetailComponent},
}, {
    headerMode: 'screen',
    initialRouteName: 'DetailPokemon',
    showBack: true
    //navigationOptions: {
    //  headerStyle: {backgroundColor: 'red'},
    //  title: 'You are not logged in'
    //}  
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
  Primary: { screen: tab },
  pokemonDetailNavegation: {screen: pokemonDetailNavegation},

}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'Primary'
})

export default PrimaryNav

