import PokemonListComponent  from '../../pokemonList/pokemonList.component'
import PokemonDetailComponent  from '../../pokemonDetail/pokemonDetail.component'
import {StackNavigator} from 'react-navigation'
import {setContextNavigation} from '../../../actions/navegation.action'
import HeaderComponent from './header/Header.component'
import {connect} from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import {addListener} from '../../../utils/redux'

// export default  Router = StackNavigator({
export const AppNavigator = StackNavigator({
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

class AppWithNavigationState extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      nav: PropTypes.object.isRequired,
    };
  
    render() {
      const { dispatch, nav } = this.props;
      return (
        <AppNavigator
          navigation={{
            dispatch,
            state: nav,
            addListener,
          }}
        />
      );
    }
  }
  
  const mapStateToProps = state => ({
    nav: state.nav,
  });
  
  export default connect(mapStateToProps)(AppWithNavigationState);




/*

const mapDispatchToProps = dispatch => {
    return {
        contextNavegation : (navegation) => {
            debugger
            return dispatch(setContextNavigation(navegation))
        }
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}



 export default connect(mapStateToProps, mapDispatchToProps)(Router)

*/


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