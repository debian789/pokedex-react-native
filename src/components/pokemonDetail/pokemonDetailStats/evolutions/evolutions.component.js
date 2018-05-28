import React, {Component} from 'react'
import {View,Text,Image,ActivityIndicator} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import EvolutionStyle from './evolutions.style'
import {compose} from 'redux'
import constants from '../../../../commons/constants'

const colors = constants.colors.dark_colors;
let evolutions = []

class EvolutionsComponent extends Component {

    _getUrlImage(text) {
        let list = text.split('/')
        return constants.environment.URL_IMAGE(list[list.length - 2]);
    }

    _geEvolutions (item) {
        // debugger
        if (item.list && item.list[0].evolves_to.length > 0) {

            urlImage = this._getUrlImage(item.list[0].species.url)

            return this._geEvolutions({
                list: item.list[0].evolves_to,
                data:  [...item.data,
                {
                    name: item.list[0].species.name,
                    urlImage
                    }
                ]
                })
        } else {
            //return list[0].species.name
           return  {
                list: item.list[0].evolves_to,
                data:  [...item.data, {
                    name: item.list[0].species.name,
                    urlImage
                    }]                    
            }

        }
    }

    render() {
        //const pokemon = this.props.detailPokemon
        const pokemonDetailEvolution = this.props.pokemonDetailEvolution

        if (pokemonDetailEvolution && pokemonDetailEvolution.data) {
            //  AsyncStorage.setItem('titleDetailPokemon', pokemon.data.name)
            if (pokemonDetailEvolution.data.chain && pokemonDetailEvolution.data.chain.evolves_to ) {
                evolutions.push({
                    name:pokemonDetailEvolution.data.chain.species.name,
                    urlImage:this._getUrlImage(pokemonDetailEvolution.data.chain.species.url)
                })
                evolutions.push(...this._geEvolutions({list:pokemonDetailEvolution.data.chain.evolves_to,data:[]}).data)   
            }

            return evolutions.map((item, index) => {
                debugger
                return (<View key={index}><Text>{item.name}</Text></View>)
            })

           
           
           
        } else {
            return (<ActivityIndicator size="large" color="#0000ff"/>)
        }

    }
}


const mapStateToProps = (state) => {
    return {navigation2: state.nav, 
        pokemonDetail: state.pokemonDetail,
        pokemonDetailEvolution: state.pokemonDetailEvolution
    }
}

export default connect(mapStateToProps)(EvolutionsComponent)
