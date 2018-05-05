import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addListener} from '../../utils/redux'
import Router from './menu/router'

class AppWithNavigationState extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired
    }

    render() {
        const {dispatch, navigation} = this.props
        return (
            <Router 
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
