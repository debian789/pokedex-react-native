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
    constructor(props) {
        super(props)
        this.contador = 0;
        this.rgbList = constants.colors.rgbList
        this.countRgbList = this.rgbList.length;
        this.randomColorA = this.rgbList[this.contador][0];
        this.randomColorB = this.rgbList[this.contador][1];
        this.randomColorC = this.rgbList[this.contador][2];
        
    }

    componentWillMount() {
        if (!this.props.pokemons.isRefreshing) { 
            this.props.fetchData(constants.environment.PAGINATION.offset)
        }
    }
    
    _navigationDetail(item, colors, index) {
        const params = {url:item.url, name: item.name, colors}
        this.props.sendParametersByNavigation(params)
        this.props.setParameters(params)

    }

    _getPositionColor(index, countList) {
        if (index < countList) {
            return index 
        } else {
            cuadrante = Math.trunc(index/countList)
            return index - (countList * cuadrante) 
        }
    }



    _renderItem({item, index})  {
        if (this.rgbList[this.contador] && this.rgbList[this.contador][0]) {
            this.contador = this._getPositionColor(index, this.countRgbList);

            this.randomColorA  = this.rgbList[this.contador][0]
            this.randomColorB  = this.rgbList[this.contador][1]
            this.randomColorC  = this.rgbList[this.contador][2]
        }

        let idPokemon = item.url.split('/')
        idPokemon = idPokemon[idPokemon.length-2]

        return <View  key={index} style={[PokemonAllStyle.item, {backgroundColor: `rgb(${this.randomColorA}, ${this.randomColorB}, ${this.randomColorC})`}]}>
            <View style={PokemonAllStyle.head}></View>   
            <View style={PokemonAllStyle.body}>
                <TouchableHighlight
                    onPress={this._navigationDetail.bind(this, item, {colorA: this.randomColorA, colorB:this.randomColorB , colorC:this.randomColorC }, index)}
                >
                    <Image style={PokemonAllStyle.itemImage} 
                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}}
                    />
                </TouchableHighlight>
            </View>  
            <View style={PokemonAllStyle.bottom}>
                <Text style={PokemonAllStyle.name}>{item.name.toLowerCase()}</Text>
                <Text style={PokemonAllStyle.count}>{idPokemon}</Text>
            </View>
        </View>



    }

    _handleRefresh() {
        this.children.props.extraData.fetchData(constants.environment.PAGINATION.offset)
    }

    _handleLoadMore() {
        if (!this.props.pokemons.isRefreshing) {
            this.props.fetchData(this.props.pokemons.offset, this.props.pokemons.data)
        }
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
            onEndReached={this._handleLoadMore.bind(this)}
            onRefresh= {this._handleRefresh}          
            keyExtractor={(item, index) => index} 
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