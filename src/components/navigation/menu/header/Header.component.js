import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    TouchableHighlight,
    Text,
    TextInput
} from 'react-native'
import HeaderStyle from './Header.style'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {setContextNavigation} from '../../../../actions/navegation.action'
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
                             //debugger
                              // if(this.props.navigation.state.index === 0){

                              if (this.props.navigation.navigation.state.routeName === 'Main') {
                                  this.props.navigation.navigation.navigate('DetailPokemon')
                             } else {
                                  this.props.navigation.navigation.navigate('Main')

                              }

                              //  } else {
                              //      this.props.navigation.navigate('DrawerClose');
                              // }
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
        navigation2: state.navegation
    }
}


export default connect(mapStateToProps)(HeaderComponent)

//HeaderComponent.propTypes = {
//    navigation: PropTypes.object
//}



