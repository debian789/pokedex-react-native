import React, {Component} from 'react'
import {View,Text,Image,ActivityIndicator} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import StatsStyle from './stats.style'
import {compose} from 'redux'
import constants from '../../../../commons/constants'

const colors = constants.colors.dark_colors;

class StatsComponent extends Component {
    render() {
        //const pokemon = this.props.detailPokemon
        const pokemon = this.props.pokemonDetail


        if (pokemon && pokemon.data) {
            //  AsyncStorage.setItem('titleDetailPokemon', pokemon.data.name)

            // <View style={[StatsStyle.barItem, {width: `${width}%`}]}></View>
            return pokemon.data.stats.map((item, index) => {
                let width = item.base_stat >=  100 ? 100 : item.base_stat;

                return (
                    <View style={StatsStyle.container} key={index}>
                        <View style={StatsStyle.textItem}>
                            <Text style={StatsStyle.text}>{item.stat.name}</Text>
                        </View>
                        <View style={StatsStyle.containerBar}>
                            <View style={[StatsStyle.barItem,{backgroundColor: colors[index]}, {width: `${width}%`}]}></View>
                        </View>
                    </View>
                )
            })

           
        } else {
            return (<ActivityIndicator size="large" color="#0000ff"/>)
        }

    }
}


const mapStateToProps = (state) => {
    return {navigation2: state.nav, pokemonDetail: state.pokemonDetail}
}

export default connect(mapStateToProps)(StatsComponent)
