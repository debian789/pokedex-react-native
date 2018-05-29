import React, {Component} from 'react'
import {View, Text, Image, ActivityIndicator} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {clearData, fetchDataEvolution} from '../../../../actions/pokemonDetailEvolution.action'
import {connect} from 'react-redux'
import EvolutionStyle from './evolutions.style'
import {compose} from 'redux'
import constants from '../../../../commons/constants'

const colors = constants.colors.dark_colors;

class EvolutionsComponent extends Component {
    
    componentWillMount() {    
        this.evolutions = []
        this.props.clearData()
        if (this.props.pokemonDetail.data) {
            this.props.clearData()
            this.props.fetchDataEvolution(this.props.pokemonDetail.data.id)
        }
    }

    componentWillUnmount() {
        this.evolutions = []
    }
   
    _getUrlImage(text) {
        let list = text.split('/')
        return constants
            .environment
            .URL_IMAGE(list[list.length - 2]);
    }

    _geEvolutions(item) {
        if (item.list && item.list[0].evolves_to.length > 0) {
            let urlImage = this._getUrlImage(item.list[0].species.url)
            return this._geEvolutions({
                list: item.list[0].evolves_to,
                data: [
                    ...item.data, {
                        name: item.list[0].species.name,
                        urlImage
                    }
                ]
            })
        } else {
            let urlImage = this._getUrlImage(item.list[0].species.url)
            return {
                list: item.list[0].evolves_to,
                data: [
                    ...item.data, {
                        name: item.list[0].species.name,
                        urlImage
                    }
                ]
            }
        }
    }

    render() {
        const pokemonDetailEvolution = this.props.pokemonDetailEvolution
        this.evolutions = [];
        if (pokemonDetailEvolution && pokemonDetailEvolution.data && !pokemonDetailEvolution.isRefreshing) {
            if (pokemonDetailEvolution.data.chain && pokemonDetailEvolution.data.chain.evolves_to) {
                this.evolutions.push({
                    name: pokemonDetailEvolution.data.chain.species.name,
                    urlImage: this._getUrlImage(pokemonDetailEvolution.data.chain.species.url)
                })
                this.evolutions.push(...this._geEvolutions({list: pokemonDetailEvolution.data.chain.evolves_to, data: []}).data)
            }
            
            return (
                <View style={EvolutionStyle.container}>
                    {this.evolutions.map((item, index) => {
                        return (
                            <View key={index} style={[EvolutionStyle.itemEvolution, {backgroundColor: constants.colors.dark_colors[index]}]}>
                                <Image
                                    style={EvolutionStyle.imgPokemon}
                                    source={{
                                    uri: item.urlImage
                                }}/>
                                <Text style={EvolutionStyle.itemText}>{item.name}</Text>
                            </View>
                        )
                    })
}
                </View>
            )

        } else {
            return (<ActivityIndicator size="large" color="#0000ff"/>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        navigation2: state.nav, 
        pokemonDetail: state.pokemonDetail, 
        pokemonDetailEvolution: state.pokemonDetailEvolution
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataEvolution: (id) => {
            return dispatch(fetchDataEvolution(id))
        },
        clearData: () => {
            return dispatch(clearData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EvolutionsComponent)
