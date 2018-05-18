import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
// import PokemonListComponent from './components/pokemonList/pokemonList.component'
// import AppWithNavigationState from './components/navigation/navigation.component'
//import MainNavigationComponent from './components/navigation/mainNavigation.component'

import AppNavigator from './components/navigation/menu/appNavigator'

let store = configureStore()

const App = () => {
  return(<Provider store={store}>
          <View style={{flex:1}}>
            <AppNavigator/>
          </View>
        </Provider>)
}

// <AppWithNavigationState/>
//<PokemonListComponent></PokemonListComponent>
export default App