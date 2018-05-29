import React, {Component} from 'react'
import {View, Text, Image, ScrollView, ActivityIndicator, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {fetchDataList, getData} from '../../../actions/pokemonDetail.action'
import Icon from 'react-native-vector-icons/Ionicons';
import PokemonDetailMovesStyle from './pokemonDetailMoves.style'
import MovesetComponent from './moveset/moveset.component'
import MovesetStyle from './moveset/moveset.style'
import TypesComponent from './types/types.component'

class PokemonDetailMovesComponent extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.getParam('params').name}`,
            headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
                headerStyle:{
                    backgroundColor:'blue',
                },
            }
        };

    componentWillMount() {
        const url = this
            .props
            .navigation
            .getParam('params').url;

            debugger
            if (url) {
                this
                    .props
                    .fetchData(url)

            }
    }

    render() {
        const pokemon = this.props.pokemonDetail

        if (pokemon && pokemon.data) {
            return (
                <ScrollView>
                    <View style={PokemonDetailMovesStyle.containerImage}>
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
                    <View style={PokemonDetailMovesStyle.title}>
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
                        <MovesetComponent style={MovesetStyle.containerItems}
                            key={pokemon.data.name}
                            moves={pokemon.data.moves}
                            namePokemon={pokemon.data.name}/>
                    </View>
                    <View style={PokemonDetailMovesStyle.title}>
                        <Text style={PokemonDetailMovesStyle.titleText}>TYPE CONVERAGE (8)
                        </Text>
                    </View>
                    <View style={PokemonDetailMovesStyle.containerType}>
                        <TypesComponent types = {pokemon.data.types}/>
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
