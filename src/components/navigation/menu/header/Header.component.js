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

class HeaderComponent extends Component {
    constructor () {
        super()
        
    }

    render () {
        return (
             <View style={HeaderStyle.container}>
                 <View style={HeaderStyle.containerA}>
                     <TouchableHighlight
                          style={HeaderStyle.menu}
                          onPress={() => {
                              //debugger
                              //if (this.props.navigation.navigation.state.index === 0) {
                             //  debugger
                             //debugger
                                  this.props.navigation.navigation.navigate('DrawerOpen')
                               //   this.props.navigation.navigate('DrawerOpen')
                              //} else {
                              //    this.props.navigation.navigation.navigate('DrawerClose')
                              //}
                          }}>
                         <Text><Icon style={HeaderStyle.menuIcon} name="bars" size={30}/></Text>
                     </TouchableHighlight>
                     <View style={HeaderStyle.logo}><Text style={HeaderStyle.logoText}>Offrie</Text></View>
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
                         <Text><Icon name="map" size={30} style={HeaderStyle.navegationIcon}/></Text>
                     </TouchableHighlight>
                 </View>
                 <View style={HeaderStyle.containerB}>
                     <View style={HeaderStyle.searchContainer}>
                         <View style={HeaderStyle.searchView}><Icon name="filter" size={30}
                                                                    style={HeaderStyle.searchIcon}/></View>

                         <View style={HeaderStyle.searchInput}><TextInput style={HeaderStyle.searchTextInput}
                                                                          underlineColorAndroid='transparent'/></View>
                         <View style={HeaderStyle.searchView}><Icon name="search" size={30}
                                                                    style={HeaderStyle.searchIcon}/></View>

                     </View>
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



