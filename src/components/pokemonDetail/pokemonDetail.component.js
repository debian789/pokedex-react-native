import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'


class PokemonDetailComponent extends Component {
    render () {
        return(<View>{ this.props.body}</View>) 
    }
}


const mapStateToProps = state => {
    return {
        body: state.body
    }
} 

export default connect(mapStateToProps)(PokemonDetailComponent)