import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
// import PokemonListComponent from './components/pokemonList/pokemonList.component'

import AppWithNavigationState from './components/navigation/navigation.component'


let store = configureStore()

const App = () => {
  return(<Provider store={store}>
    <View style={{flex:1}}>
      <AppWithNavigationState/>
    </View>
  </Provider>)
}

//<PokemonListComponent></PokemonListComponent>
export default App