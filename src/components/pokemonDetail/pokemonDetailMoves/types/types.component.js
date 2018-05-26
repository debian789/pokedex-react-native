import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {connectRequest, entitiesReducer, queriesReducer, queryMiddleware, querySelectors} from 'redux-query';
import TypesStyle from './types.style'

class TypesComponent extends Component {
    render() {
        const colorBase = [
            '#BF9569',
            '#C33766',
            '#F78019',
            '#BCC1C6',
            '#645B75',
            '#9E00AD',
            '#7E72AC',
            '#BE9A6A',
            '#0071B8'
        ]

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