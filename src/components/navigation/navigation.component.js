import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {StackNavigator} from 'react-navigation'
import {addListener} from '../../utils/redux'
import PokemonListComponent  from '../pokemonList/pokemonList.component'

import HeaderComponent from './menu/header/Header.component'



export const AppNavigator = StackNavigator({
    Main: {screen: PokemonListComponent},
    DetailPokemon: {screen: PokemonListComponent}
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

class AppWithNavigationState extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired
    }

    render() {
        const {dispatch, navigation} = this.props
        return (
            <AppNavigator 
                navigation={{
                    dispatch,
                    state: navigation,
                    addListener
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        navigation: state.navigation
    }
}

export default connect(mapStateToProps)(AppWithNavigationState)
