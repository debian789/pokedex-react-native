import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {connectRequest} from 'redux-query';
import MovesetStyle from './moveset.style'
import constants from '../../../../commons/constants'

class MovesetComponent extends Component {
  constructor(props) {
    super(props)
    this.data = []
  }

  componentWillMount() {
    this.data = []    
  }

  componentDidMount() {
    this.data = []
  }

  componentWillUnmount() {
    this.props.moves = undefined
  }

  render() {
    if (!this.props.isLoading && this.props.detailMoves) {
      this
        .data
        .push(this.props.detailMoves)

        const colorBase = constants.colors.light_colors
        
        return this
        .data
        .map((item, index) => {
          let randNumber = Math.floor(Math.random() * colorBase.length);
       
          const background = {
            backgroundColor: colorBase[randNumber]
          }

          return (
            <View key={index} style={MovesetStyle.containerRow}>
              <View style={[MovesetStyle.itemStart, background]}>
                <Text></Text>
              </View>
              <View style={MovesetStyle.itemTitle}>
                <Text>{item.name}</Text>
              </View>
              <View style={MovesetStyle.itemCount}>
                <Text style={MovesetStyle.itemCountText}>{(item.accuracy
                    ? `${item.accuracy}%`
                    : '')}</Text>
              </View>
              <View style={MovesetStyle.itemCount}>
                <Text style={MovesetStyle.itemCountText} >{(item.power || '')}</Text>
              </View>
              <View style={MovesetStyle.itemCount}>
                <Text style={MovesetStyle.itemCountText}>{(item.pp || '')}</Text>
              </View>
              <View style={[MovesetStyle.itemEnd, background]}>
                <Text></Text>
              </View>
            </View>
          )
        })
    } else {
      return (
        <Text>......
        </Text>
      )
    }
  }
}

const movesRequest = connectRequest((props) => {
  let name = props.namePokemon

  return props
    .moves
    .map((item, index) => {
      return {
        url: item.move.url,
        transform: body => ({detailMoves: body}),
        update: {
          detailMoves: (prev, next) => {
            return next

          }
        },
        force: true
      }
    })

})(MovesetComponent)

const selectMoves = (state, props) => {
  return state.entities.detailMoves || undefined;
};

export default connect(state => ({detailMoves: selectMoves(state)}))(movesRequest)
