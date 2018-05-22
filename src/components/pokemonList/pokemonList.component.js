import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import type, {Route, NavigationState} from 'react-native-tab-view/types';
import {connect} from 'react-redux';
import PokemonCaughtComponent from './caught/pokemonCaught.component'
import PokemonAllComponent from './all/pokemonAll.component'
import PokemonListStyle from './pokemonList.style'

const initialLayout = {
    height: 0,
    width: Dimensions
        .get('window')
        .width
}

class TapBarComponent extends Component {
    _handleIndexChange = index => {
      //  this
      //      .props
      //      .selected_tab(index)
    }

    _renderFooter = props => (<TabBar 
        labelStyle = {PokemonListStyle.label}
        style={PokemonListStyle.selected}

        pressColor="green"
        {...props}/>)

    _renderScene = SceneMap({all: PokemonAllComponent, caught: PokemonCaughtComponent})

    render() {
        return (<TabViewAnimated
            style={PokemonListStyle.container}
            navigationState={this.props.pokemonList}
            renderScene={this._renderScene}
            renderFooter={this._renderFooter}
            onIndexChange={this._handleIndexChange.bind(this)}
            initialLayout={initialLayout}
            useNativeDriver/>)
    }
}

const mapStateToProps = state => {
    return {pokemonList: state.pokemonList}
}

const mapDispatchToProps = dispatch => {
    return {
        //selected_tab : (index) => {
        //    return dispatch(selected_tab(index))
        //}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TapBarComponent)
