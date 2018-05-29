import React, { Component } from 'react'
import {View, TouchableHighlight, Text} from 'react-native'
import HeaderStyle from './Header.style'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {strings} from '../../../../../locales/i18n'

class HeaderComponent extends Component {
    constructor () {
        super()        
    }

    render () {
        return (
             <View style={HeaderStyle.container}>
                 <View style={HeaderStyle.containerA}>
                     <View style={HeaderStyle.logo}><Text style={HeaderStyle.logoText}>{strings('global.title')}</Text></View>
                     <TouchableHighlight
                          style={HeaderStyle.navegation}
                          onPress={() => {
                            if (this.props.navigation.navigation.state.routeName === 'Main') {
                                this.props.navigation.navigation.navigate('DetailPokemon')
                            } else {
                                this.props.navigation.navigation.navigate('Main')
                            }
                          }}>
                         <Text><Icon name="search" size={25} style={HeaderStyle.searchIcon}/></Text>
                     </TouchableHighlight>
                 </View>
             </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navigation2: state.nav
    }
}

export default connect(mapStateToProps)(HeaderComponent)
