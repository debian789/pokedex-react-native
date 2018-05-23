import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import ReduxNavigation from './components/navigation/reduxNavigation'

let store = configureStore()

const App = () => {
  return(<Provider store={store}>
          <View style={{flex:1}}>
            <ReduxNavigation/>
          </View>
        </Provider>)
}

export default App