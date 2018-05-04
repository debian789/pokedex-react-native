import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'
import {fetchDataList, updataDataSuccess} from '../../actions'
import {connect} from 'react-redux'
import constants from '../../commons/constants'


class PokemonListComponent extends Component {

    componentWillMount() {
        this.props.fetchData(constants.environment.PAGINATION.offset)
    }

    _renderItem({item, index})  {
        return <Text>{item.name} - {index}</Text>
    }

    _handleRefresh() {
        this.children.props.extraData.fetchData(constants.environment.PAGINATION.offset)
    }

    _handleLoadMore() {
        // data old 
        // 
        this.props.fetchData(this.props.pokemons.offset, this.props.pokemons.data)
    }

    render() {
        let {pokemons} = this.props
        console.log('------------------------')
        console.log(pokemons.isRefreshing)
        console.log('------------------------')
        return(<FlatList
            data= {pokemons.data}
            extraData={this.props}
            renderItem= {this._renderItem}
            refreshing= {pokemons.isRefreshing}
            onEndReached={() => {return this._handleLoadMore.bind(this)()}}
            onRefresh= {this._handleRefresh}           
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
        fetchData: (offset, oldData) => {
            return dispatch(fetchDataList(constants.endpoinds.LIST_POKEMON, offset, oldData))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonListComponent)