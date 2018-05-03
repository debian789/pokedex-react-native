import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import PokemonListComponent from './components/pokemonList/pokemonList.component'

let store = configureStore()

const App = () => {
  return(<Provider store={store}>
    <View style={{flex:1}}>
    <PokemonListComponent></PokemonListComponent>
    </View>
  </Provider>)
}

export default App