import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {fetchDataList} from '../../actions/pokemonDetail.action'

class PokemonDetailComponent extends Component {
    componentWillMount() {
        const url = this.props.navigation.getParam('url');
        this.props.fetchData(url)
    }
    
    render() {
        const data = this.props.pokemonDetail
        debugger
        return (<View><Text>Hol detail</Text></View>)
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

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailComponent)