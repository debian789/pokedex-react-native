import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

const App = () => {
  <Provider store={store}>
    <View></View>
  </Provider>
}

export default App