import React, {Component} from 'react'
import {View, Modal, Text, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {active,desactive} from '../../../../../actions/search.action'
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchStyle from './search.style'
import searchStyle from './search.style';


class SearchComponent extends Component {

    _close() {
        debugger
        this.props.desactive()
    }

    render() {
        return (
        <View style={{flex:1}}>
        <Modal
          animationType="slide"
          transparent={true}

          visible={this.props.search.state}
          onRequestClose={this._close.bind(this)}>
          <View style={SearchStyle.container}>
          <View style={searchStyle.containerClose}>
          <Icon name="close"  onPress={this._close.bind(this)} 
          size={25} style={SearchStyle.close}
          
              /></View>

          <View style={SearchStyle.containerText}>
          <Icon name="search" size={25} style={SearchStyle.searchIcon}/>
          <TextInput
        style={SearchStyle.input}
        onChangeText={() => {}}
        underlineColorAndroid='transparent'
        autoCorrect={false}
        />
      
          </View>
        </View>

          </Modal>
        </View>)
    }
}

const mapStateToProps = state => {
    return {
        nav: state.nav,
        search: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        active: () => {
           return dispatch(active())
        },
        desactive: () => {
            return dispatch(desactive())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)