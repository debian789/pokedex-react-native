import React, {Component} from 'react'
import {View, Text, Image, ActivityIndicator} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'

class PokemonDetailLocationComponent extends Component {
    componentWillMount() {
    //   const url = this.props.navigation.getParam('url');
    //    this.props.fetchData(url)
    }
    
    render() {
        const pokemon = this.props.pokemonDetail


        

        if (pokemon && pokemon.data) {
            return(<View><Text>holoa :) </Text></View>)
        } else {
            return (<ActivityIndicator size="large" color="#0000ff" />)
        }

    }
}

const mapStateToProps = (state) => {
    return {
        navigation2: state.nav,
        pokemonDetail: state.pokemonDetail
    }
}


export default connect(mapStateToProps)(PokemonDetailLocationComponent)