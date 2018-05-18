import { DrawerNavigator } from 'react-navigation'
import ItemMenu from './menu/options/Options.component'
import Router from './menu/router'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addListener} from '../../utils/redux'

export default Navigator = DrawerNavigator({
         Router: {
             screen: Router
         }
     },
     {
         initialRouteName: 'Router',
         contentComponent: ItemMenu,
     }
)

class MainNavigatorComponent extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired
    }

    render() {
        const {dispatch, navigation} = this.props
        return (
            <Navigator 
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

//export default connect(mapStateToProps)(MainNavigatorComponent)
