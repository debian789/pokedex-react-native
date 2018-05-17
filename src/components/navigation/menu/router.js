import PokemonListComponent  from '../../pokemonList/pokemonList.component'
import PokemonDetailComponent  from '../../pokemonDetail/pokemonDetail.component'
import {StackNavigator} from 'react-navigation'
import {setContextNavigation} from '../../../actions/navegation.action'
import HeaderComponent from './header/Header.component'
import {connect} from 'react-redux'
import React from 'react'

export default  Router = StackNavigator({
    Main: {screen: PokemonListComponent},
    DetailPokemon: {screen: PokemonDetailComponent}
}, {
    headerMode: 'screen',
    initialRouteName: 'Main',
    //navigationOptions: ({navigation}) => ({
    //    header: <Header navigation={navigation}/>
    //})
    navigationOptions: (navigation) => {
      //  debugger
        return {header: <HeaderComponent navigation={navigation}></HeaderComponent>}
    }
})


const mapDispatchToProps = dispatch => {
    return {
        contextNavegation : (navegation) => {
            return dispatch(setContextNavigation(navegation))
        }
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}


// export default connect(null)(Router)




/*import React from 'react'
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
         navigationOptions: (navigation) => {
             return {header: <HeaderComponent navigation={navigation}></HeaderComponent>}
         }
     })

export default Router

*/