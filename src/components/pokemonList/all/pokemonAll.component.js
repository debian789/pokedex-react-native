import React, {Component} from 'react'
import {View, Text, FlatList, Image, TouchableHighlight} from 'react-native'
import {fetchDataList, updataDataSuccess} from '../../../actions'
import {setParameters, getParameters} from '../../../actions/navegation.action'
import {sendParametersByNavigation} from '../../../actions/navegation.action'
import {connect} from 'react-redux'
import constants from '../../../commons/constants'
import PokemonAllStyle from './pokemonAll.style'
import {NavigationActions} from 'react-navigation'

class PokemonAllComponent extends Component {

    componentWillMount() {
        this.props.fetchData(constants.environment.PAGINATION.offset)
    }
    
    _navigationDetail(item, colors, index) {
        const params = {url:item.url, name: item.name, colors}
        this.props.sendParametersByNavigation(params)
        this.props.setParameters(params)

    }


    _renderItem({item, index})  {
        const randomColorA = Math.floor(Math.random() * (240 - 180 +1) + 180)            
        const randomColorB = Math.floor(Math.random() * (220 - 160 +1) + 160)            
        const randomColorC = Math.floor(Math.random() * (240 - 160 +1) + 160) 
        
        //const randomColorA = 123//Math.floor(Math.random() * (240 - 180 +1) + 180)            
        //const randomColorB = 210//Math.floor(Math.random() * (220 - 160 +1) + 160)            
        //const randomColorC = 140//Math.floor(Math.random() * (240 - 160 +1) + 160) 


        let idPokemon = item.url.split('/')
        idPokemon = idPokemon[idPokemon.length-2]

        return <View style={[PokemonAllStyle.item, {backgroundColor: `rgb(${randomColorA}, ${randomColorB}, ${randomColorC})`}]}>
            <View style={PokemonAllStyle.head}></View>   
            <View style={PokemonAllStyle.body}>
                <TouchableHighlight
                    onPress={this._navigationDetail.bind(this, item, {colorA: randomColorA, colorB:randomColorB , colorC:randomColorC }, index)}
                >
                    <Image style={PokemonAllStyle.itemImage} 
                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}}
                    />
                </TouchableHighlight>
            </View>  
            <View style={PokemonAllStyle.bottom}>
                <Text style={PokemonAllStyle.name}>{item.name.toLowerCase()}</Text>
                <Text style={PokemonAllStyle.count}>{index + 1}</Text>
            </View>
        </View>



    }

    _handleRefresh() {
        this.children.props.extraData.fetchData(constants.environment.PAGINATION.offset)
    }

    _handleLoadMore() {
        this.props.fetchData(this.props.pokemons.offset, this.props.pokemons.data)
    }

    render() {
        let {pokemons} = this.props
        return(<FlatList
            style={PokemonAllStyle.container}
            data= {pokemons.data}
            numColumns={3}
            extraData={this.props}
            renderItem= {this._renderItem.bind(this)}
            refreshing= {pokemons.isRefreshing}
            onEndReached={() => {return this._handleLoadMore.bind(this)()}}
            onRefresh= {this._handleRefresh}           
        ></FlatList>)
    }
}

const mapStateToProps = (state) => {   
    return {
        pokemons: state.pokemons,
        navigation2: state.nav
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (offset, oldData) => {
            return dispatch(fetchDataList(constants.endpoinds.LIST_POKEMON, offset, oldData))
        },
        sendParametersByNavigation: (params) => {
           return dispatch(sendParametersByNavigation(params))
        },
        setParameters: params => {
            return dispatch(setParameters(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonAllComponent)