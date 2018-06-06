import React, { Component } from 'react'
import {View, Modal, TouchableHighlight, Text} from 'react-native'
import HeaderStyle from './Header.style'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {strings} from '../../../../../locales/i18n'
import SearchComponent from './search.component'
import {active,desactive} from '../../../../actions/search.action'


class HeaderComponent extends Component {
    constructor () {
        super()        
    }

    _activeModal() {
        this.props.activeModal()
    }

    render () {
        return (
             <View style={HeaderStyle.container}>
                 <View style={HeaderStyle.containerA}>
                     <View style={HeaderStyle.logo}><Text style={HeaderStyle.logoText}>{strings('global.title')}</Text></View>
                     <TouchableHighlight
                          style={HeaderStyle.navegation}
                          onPress={this._activeModal.bind(this)}>
                         <Text><Icon name="search" size={25} style={HeaderStyle.searchIcon}/></Text>
                     </TouchableHighlight>
                 </View>
                 <SearchComponent/>
             </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navigation2: state.nav
    }
}

const mapDispatchToProps = dispatch => {
    return {
        activeModal: () => {
            return dispatch(active())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
