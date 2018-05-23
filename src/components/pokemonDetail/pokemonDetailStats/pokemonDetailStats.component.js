import React, {Component} from 'react'
import {View, Text, Image, ActivityIndicator, AsyncStorage} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {fetchDataList} from '../../../actions/pokemonDetail.action'

class PokemonDetailStatsComponent extends Component {
/*
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
    
        return {
          title: 'sdafasdf', //params ? params.titleDetailPokemon: 'Default Screen Title',
          headerStyle: { backgroundColor: 'red'},
        }
    };*/

    static navigationOptions = {
        title: 'What to do today?',
        headerStyle: {
          backgroundColor: '#16a085',
        },
        headerTitleStyle: {
          color: 'white'
        },
      }

    componentWillMount() {
       const url = this.props.navigation.getParam('url');
        this.props.fetchData(url)
    }



    async componentDidMount() {
        const value = await AsyncStorage.getItem('titleDetailPokemon');
        this.props.navigation.setParams({titleDetailPokemon: value})
      }
    




    //  componentWillUpdate() {
    //      const pokemon = this.props.pokemonDetail
    //       debugger
    //     if (pokemon && pokemon.data) {
    //          debugger
    //          this.props.navigation.setParams({title: 'ho'})
    //      }
    // }
    
    render() {
        const pokemon = this.props.pokemonDetail

        

        if (pokemon && pokemon.data) {
            AsyncStorage.setItem('titleDetailPokemon', pokemon.data.name)
            // this.props.navigation.setParams({title: 'ho'})

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

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (url) => {
            return dispatch(fetchDataList(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailStatsComponent)