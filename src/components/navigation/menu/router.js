import React from 'react'
import {
    StackNavigator
} from 'react-navigation'
import DealsListComponent from '../deals/dealsList/DealsList.component'
import DealsMapComponent from '../deals/dealsMap/DealsMapComponent'
import HeaderComponent from './header/Header.component'

const Router = StackNavigator({
         DealsList: {
             screen: DealsListComponent
         },
         DealsMap: {
             screen: DealsMapComponent
         }
     },
     {
         headerMode: 'screen',
         initialRouteName: 'DealsList',
         //navigationOptions: ({navigation}) => ({
         //    header: <Header navigation={navigation}/>
         //})
         navigationOptions: (navigation) => {
           //  debugger
             return {header: <HeaderComponent navigation={navigation}></HeaderComponent>}
         }
     })

export default Router
