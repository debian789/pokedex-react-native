import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import TypesStyle from './types.style'
import constants from '../../../../commons/constants'

class TypesComponent extends Component {
    render() {
        const colorBase = constants.colors.dark_colors

        return this
            .props
            .types
            .map((type, index) => {
                let randNumber = Math.floor(Math.random() * colorBase.length);
                const background = {
                    backgroundColor: colorBase[randNumber]
                }

                return (
                        <View  key={index} style={[TypesStyle.item, background]}>
                            <Text style={TypesStyle.itemText}>{type.type.name}</Text>
                        </View>
                )
            })
    }
}

export default connect(null)(TypesComponent)