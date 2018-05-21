import React, {Component} from 'react'
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {fetchDataList} from '../../actions/pokemonDetail.action'
import {selected_tab} from '../../actions/pokemonList.action'
import PokemonDetailStats from './pokemonDetailStats/pokemonDetailStats.component'
import PokemonDetailStyle from './pokemonDetail.style'
import type, {Route, NavigationState} from 'react-native-tab-view/types';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';

const initialLayout = {
    height: 0,
    width: Dimensions
        .get('window')
        .width
}

class PokemonDetailComponent extends Component {
    componentWillMount() {
        const url = this.props.navigation.getParam('url');
       // this.props.navigation.setOptions({title:'hola ? '});
        this.props.fetchData(url)

    }

    _handleIndexChange = index => {
        debugger
        this
            .props
            .selected_tab(index)
    }

    _renderFooter = props => (<TabBar 
        labelStyle = {PokemonDetailStyle.label}
        style={PokemonDetailStyle.selected}

        pressColor="green"
        {...props}/>)

    _renderScene = SceneMap({
        stats: PokemonDetailStats, 
        moves: PokemonDetailStats, 
        location: PokemonDetailStats})

    render() {
        return (<TabViewAnimated
            style={PokemonDetailStyle.container}
            navigationState={this.props.pokemonDetailTab}
            renderScene={this._renderScene}
            renderFooter={this._renderFooter}
            onIndexChange={this._handleIndexChange.bind(this)}
            initialLayout={initialLayout}
            useNativeDriver/>)
    }
}

const mapStateToProps = state => {
    return {
        pokemonDetail: state.pokemonDetail,
        pokemonDetailTab: state.pokemonDetailTab,
        navigation2: state.nav}
}

const mapDispatchToProps = dispatch => {
    return {
        selected_tab : (index) => {
            return dispatch(selected_tab(index))
        },
        fetchData: (url) => {
            debugger
            return dispatch(fetchDataList(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailComponent)