import React, {Component} from 'react'
import {
    View,
    TouchableHighlight,
    Text,
    Image,
    ScrollView,
    ActivityIndicator,
    AsyncStorage
} from 'react-native'
import {connect} from 'react-redux'
import {fetchDataList, getData} from '../../../actions/pokemonDetail.action'
import {clearParameters} from '../../../actions/navegation.action'
import Icon from 'react-native-vector-icons/Ionicons';
import PokemonDetailMovesStyle from './pokemonDetailMoves.style'
import MovesetComponent from './moveset/moveset.component'
import MovesetStyle from './moveset/moveset.style'
import TypesComponent from './types/types.component'
import constants from '../../../commons/constants'

const COLOR_DIFFERENCE = constants.environment.COLOR_DIFFERENCE;

class PokemonDetailMovesComponent extends Component {

    static navigationOptions = ({navigation}) => {
        const randomColorA = navigation
            .getParam('params')
            .colors
            .colorA - COLOR_DIFFERENCE
        const randomColorB = navigation
            .getParam('params')
            .colors
            .colorB - COLOR_DIFFERENCE
        const randomColorC = navigation
            .getParam('params')
            .colors
            .colorC - COLOR_DIFFERENCE

        return {
            title: `${navigation
                .getParam('params')
                .name}`,

            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                flex: 1,
                color: 'white'
            },
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: `rgb(${randomColorA}, ${randomColorB}, ${randomColorC})`
            },
            headerLeft: (
                <TouchableHighlight
                    onPress={() => navigation.navigate('Primary')}
                    underlayColor={`rgb(${randomColorA}, ${randomColorB}, ${randomColorC})`}>
                    <Icon name="md-arrow-round-back" style={PokemonDetailMovesStyle.btnBack}/>
                </TouchableHighlight>
            )
        }
    };

    componentWillMount() {
        const url = this
            .props
            .navigation
            .getParam('params')
            .url;

        if (url) {
            this
                .props
                .fetchData(url)
        }
    }

    render() {
        const pokemon = this.props.pokemonDetail
        if (pokemon && pokemon.data) {

            const randomColorA = this
                .props
                .navigation
                .getParam('params')
                .colors
                .colorA
            const randomColorB = this
                .props
                .navigation
                .getParam('params')
                .colors
                .colorB
            const randomColorC = this
                .props
                .navigation
                .getParam('params')
                .colors
                .colorC

            return (
                <ScrollView>
                    <View
                        style={[
                        PokemonDetailMovesStyle.containerImage, {
                            backgroundColor: `rgb(${randomColorA}, ${randomColorB}, ${randomColorC})`
                        }
                    ]}>
                        <View style={PokemonDetailMovesStyle.containerHeaderImage}>
                            <Image
                                style={PokemonDetailMovesStyle.pokeball}
                                source={require('../../../commons/assets/images/pokeball.png')}/>
                            <Icon
                                name="ios-information-circle-outline"
                                style={PokemonDetailMovesStyle.info}/>
                        </View>
                        <Image
                            style={PokemonDetailMovesStyle.itemImage}
                            source={{
                            uri: pokemon.data.sprites.front_default
                        }}/>
                        <View style={PokemonDetailMovesStyle.count}>
                            <Text style={PokemonDetailMovesStyle.countText}>{pokemon.data.id}</Text>
                        </View>
                    </View>
                    <View
                        style={[
                        PokemonDetailMovesStyle.title, {
                            backgroundColor: `rgb(${randomColorA - COLOR_DIFFERENCE}, ${randomColorB - COLOR_DIFFERENCE}, ${randomColorC - COLOR_DIFFERENCE})`
                        }
                    ]}>
                        <Text style={PokemonDetailMovesStyle.titleText}>MOVERSET</Text>
                    </View>
                    <View style={PokemonDetailMovesStyle.containerMovesets}>
                        <View style={MovesetStyle.containerTitle}>
                            <View style={MovesetStyle.itemStart}>
                                <Text></Text>
                            </View>
                            <View style={MovesetStyle.itemTitle}>
                                <Text></Text>
                            </View>
                            <View style={MovesetStyle.itemCount}>
                                <Text style={MovesetStyle.itemCountText}>ACC</Text>
                            </View>
                            <View style={MovesetStyle.itemCount}>
                                <Text style={MovesetStyle.itemCountText}>PWR</Text>
                            </View>
                            <View style={MovesetStyle.itemCount}>
                                <Text style={MovesetStyle.itemCountText}>PP</Text>
                            </View>
                            <View style={MovesetStyle.itemEnd}>
                                <Text></Text>
                            </View>
                        </View>
                        <MovesetComponent
                            style={MovesetStyle.containerItems}
                            key={pokemon.data.name}
                            moves={pokemon.data.moves}
                            namePokemon={pokemon.data.name}/>
                    </View>
                    <View
                        style={[
                        PokemonDetailMovesStyle.title, {
                            backgroundColor: `rgb(${randomColorA - COLOR_DIFFERENCE}, ${randomColorB - COLOR_DIFFERENCE}, ${randomColorC - COLOR_DIFFERENCE})`
                        }
                    ]}>
                        <Text style={PokemonDetailMovesStyle.titleText}>TYPE CONVERAGE (8)
                        </Text>
                    </View>
                    <View style={PokemonDetailMovesStyle.containerType}>
                        <TypesComponent types={pokemon.data.types}/>
                    </View>
                </ScrollView>
            )
        } else {
            return (<ActivityIndicator size="large" color="#0000ff"/>)
        }
    }
}

const mapStateToProps = (state) => {
    return {navigation2: state.nav, pokemonDetail: state.pokemonDetail}
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (url) => {
            return dispatch(fetchDataList(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailMovesComponent)
