import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    ActivityIndicator,
    AsyncStorage
} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {fetchDataList, getData} from '../../../actions/pokemonDetail.action'
import Icon from 'react-native-vector-icons/Ionicons';
import {Table,TableWrapper,Row,Rows,Col, Cols, Cell} from 'react-native-table-component';
//import MovesetComponent from './moveset/moveset.component'
import PokemonDetailStatsStyle from './pokemonDetailStats.style'
//import TypesComponent from './types/types.component'
import StatsComponent from './stats/stats.component'
import {compose} from 'redux'
import {connectRequest, entitiesReducer, queriesReducer, queryMiddleware, querySelectors} from 'redux-query';

class PokemonDetailStatsComponent extends Component {
    /*
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
          title: 'sdafasdf', //params ? params.titleDetailPokemon: 'Default Screen Title',
          headerStyle: { backgroundColor: 'red'},
        }
    };*/
    /*
    static navigationOptions = {
        title: 'What to do today?',
        headerStyle: {
            backgroundColor: '#16a085'
        },
        headerTitleStyle: {
            color: 'white'
        }
    }*/
/*
    componentWillMount() {
        debugger
        const url = this
            .props
            .navigation
            .getParam('url');
        this
            .props
            .fetchData(url)
    }
    /*

    async componentDidMount() {
        /*    const value = await AsyncStorage.getItem('titleDetailPokemon');
        this
            .props
            .navigation
            .setParams({titleDetailPokemon: value})*/
   // }

    render() {
        //const pokemon = this.props.detailPokemon
        const pokemon = this.props.pokemonDetail

        if (pokemon && pokemon.data) {
            //  AsyncStorage.setItem('titleDetailPokemon', pokemon.data.name)

            return (
                <ScrollView>
                    <View style={PokemonDetailStatsStyle.containerImage}>
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
                            <Text style={PokemonDetailStatsStyle.countText}>123</Text>
                        </View>
                    </View>
                    <View style={PokemonDetailStatsStyle.title}>
                    <Text style={PokemonDetailStatsStyle.titleText}>                
                        {
                            pokemon.data.types.map((type, index) => {
                                return (`${index !== 0 ? ' / ': ''} ${type.type.name.toUpperCase()}`)
                            })
                        }
                        </Text>
                    </View>
                    <View style={PokemonDetailStatsStyle.containerStats}>
                        <StatsComponent/>
                    </View>
                    <View style={PokemonDetailStatsStyle.title}>
                        <Text style={PokemonDetailStatsStyle.titleText}>TYPE CONVERAGE (8)
                        </Text>
                    </View>
                    <View style={PokemonDetailStatsStyle.containerType}>
                    </View>
                </ScrollView>
            )
        } else {
            return (<ActivityIndicator size="large" color="#0000ff"/>)
        }

    }
}

/*
const pokemonDetailRequest = connectRequest((props) => {

    return {
      url: props.navigation.getParam('url'),
      transform: body => ({
        detailPokemon: body,
      }),
      update: {
        detailPokemon: (prev, next) => {
          return next;
        },
      },
      force:true

  }
})(PokemonDetailStatsComponent)



const selectPokemons = state => {
    return state.entities.detailPokemon || undefined;
  };



export default connect(state => ({
    detailPokemon: selectPokemons(state),
    }))(pokemonDetailRequest)
*/

const mapStateToProps = (state) => {
    return {navigation2: state.nav, pokemonDetail: state.pokemonDetail}
}

export default connect(mapStateToProps)(PokemonDetailStatsComponent)
