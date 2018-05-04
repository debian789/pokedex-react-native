import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {StackNavigator} from 'react-navigation'
import {addListener} from '../../utils/redux'
import PokemonListComponent  from '../pokemonList/pokemonList.component'

export const AppNavigator = StackNavigator({
    Main: {screen: PokemonListComponent}
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
