import React, {Component} from 'react'
import {View, Modal, Text} from 'react-native'
import {connect} from 'react-redux'
import {active,desactive} from '../../../../actions/search.action'

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
          transparent={false}

          visible={this.props.search.state}
          onRequestClose={this._close.bind(this)}>
          <Text>hola</Text>
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