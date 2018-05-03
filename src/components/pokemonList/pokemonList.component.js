import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'
import {fetchData} from '../../actions'
import {connect} from 'react-redux'
import constants from '../../commons/constants'

class PokemonListComponent extends Component {

    componentWillMount() {
        this.props.fetchData()
    }


    _renderItem({item, index})  {
        return <Text>{item.name} - {index}</Text>
    }

    render() {
        let {pokemons} = this.props
        return(<FlatList
            data= {pokemons.data}
            renderItem={this._renderItem}
        ></FlatList>)
    }
}


const mapStateToProps = (state) => {    
    return {
        pokemons: state.pokemons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            return dispatch(fetchData(constants.endpoinds.list_pokemon))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonListComponent)