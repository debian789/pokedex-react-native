import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import AppNavigator from './components/navigation/menu/appNavigator'

let store = configureStore()

const App = () => {
  return(<Provider store={store}>
          <View style={{flex:1}}>
            <AppNavigator/>
          </View>
        </Provider>)
}

export default App