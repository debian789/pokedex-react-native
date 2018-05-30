import React, {Component, TouchableHighlight} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    ActivityIndicator,
    AsyncStorage
} from 'react-native'
import {connect} from 'react-redux'
import {fetchDataEvolution, clearData, getData} from '../../../actions/pokemonDetailEvolution.action'
import {main} from '../../../actions/navegation.action'
import Icon from 'react-native-vector-icons/Ionicons';
import PokemonDetailStatsStyle from './pokemonDetailStats.style'
import StatsComponent from './stats/stats.component'
import EvolutionsComponent from './evolutions/evolutions.component';
import constants from '../../../commons/constants'

const COLOR_DIFFERENCE = constants.environment.COLOR_DIFFERENCE;

class PokemonDetailStatsComponent extends Component {

    _back() {
        
    }

    render() {
        const pokemon = this.props.pokemonDetail

        if (pokemon && pokemon.data && !pokemon.isRefreshing) {
            const randomColorA = this.props.navigationParameter.params.colors.colorA
            const randomColorB = this.props.navigationParameter.params.colors.colorB
            const randomColorC = this.props.navigationParameter.params.colors.colorC

            return (
                <View style={PokemonDetailStatsStyle.containerAll}>
                    <View
                        style={[
                        PokemonDetailStatsStyle.head, {
                            backgroundColor: `rgb(${randomColorA - COLOR_DIFFERENCE}, ${randomColorB - COLOR_DIFFERENCE}, ${randomColorC - COLOR_DIFFERENCE})`
                        }
                    ]}>
                        <View 
                            style={PokemonDetailStatsStyle.btnBack}>
                           
                                <Icon  onPress={
                                    () => {
                                        return this
                                        .props
                                        .main()
                                    }
                                
                                } name="md-arrow-round-back" style={PokemonDetailStatsStyle.iconBack}/>
                            
                        </View>
                        <View style={PokemonDetailStatsStyle.headTitle}>
                            <Text style={PokemonDetailStatsStyle.headTitleText}>title</Text>
                        </View>
                    </View>
                    <ScrollView style={PokemonDetailStatsStyle.containerScroll}>
                        <View
                            style={[
                            PokemonDetailStatsStyle.containerImage, {
                                backgroundColor: `rgb(${randomColorA}, ${randomColorB}, ${randomColorC})`
                            }
                        ]}>
                            <View style={PokemonDetailStatsStyle.containerHeaderImage}>
                                <Image
                                    style={PokemonDetailStatsStyle.pokeball}
                                    source={require('../../../commons/assets/images/pokeball.png')}/>
                                <Icon
                                    name="ios-information-circle-outline"
                                    style={PokemonDetailStatsStyle.info}/>
                            </View>
                            <Image
                                style={PokemonDetailStatsStyle.itemImage}
                                source={{
                                uri: pokemon.data.sprites.front_default
                            }}/>
                            <View style={PokemonDetailStatsStyle.count}>
                                <Text style={PokemonDetailStatsStyle.countText}>{pokemon.data.id}</Text>
                            </View>
                        </View>
                        <View
                            style={[
                            PokemonDetailStatsStyle.title, {
                                backgroundColor: `rgb(${randomColorA - COLOR_DIFFERENCE}, ${randomColorB - COLOR_DIFFERENCE}, ${randomColorC - COLOR_DIFFERENCE})`
                            }
                        ]}>
                            <Text style={PokemonDetailStatsStyle.titleText}>
                                {pokemon
                                    .data
                                    .types
                                    .map((type, index) => {
                                        return (`${index !== 0
                                            ? ' / '
                                            : ''} ${type.type.name.toUpperCase()}`)
                                    })
}
                            </Text>
                        </View>
                        <View style={PokemonDetailStatsStyle.containerStats}>
                            <StatsComponent/>
                        </View>
                        <View
                            style={[
                            PokemonDetailStatsStyle.title, {
                                backgroundColor: `rgb(${randomColorA - COLOR_DIFFERENCE}, ${randomColorB - COLOR_DIFFERENCE}, ${randomColorC - COLOR_DIFFERENCE})`
                            }
                        ]}>
                            <Text style={PokemonDetailStatsStyle.titleText}>Evolution
                            </Text>
                        </View>
                        <View style={PokemonDetailStatsStyle.containerType}>
                            <EvolutionsComponent/>
                        </View>
                    </ScrollView>

                </View>
            )
        } else {
            return (<ActivityIndicator size="large" color="#0000ff"/>)
        }
    }
}

const mapStateToProps = (state) => {
    return {navigation2: state.nav, pokemonDetail: state.pokemonDetail, navigationParameter: state.navigationParameter}
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataEvolution: (id) => {
            return dispatch(fetchDataEvolution(id))
        },
        clearData: () => {
            return dispatch(clearData())
        },
        main: () => {
            return dispatch(main())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailStatsComponent)
