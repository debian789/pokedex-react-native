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

    _handleRefresh() {
        //debugger
        this.children.props.extraData.fetchData()
        //props.fetchData()
    }

    _handleLoadMore() {
        debugger
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
          
            onRefresh= {this._handleRefresh}
           
        ></FlatList>)
    }
}
/*

            onEndReached={this._handleLoadMore}
*/
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