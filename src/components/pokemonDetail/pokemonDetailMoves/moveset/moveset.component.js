import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {fetchDataList} from '../../../../actions/pokemonDetailMoveset.action'
import {compose} from 'redux'
import {connectRequest, entitiesReducer, queriesReducer, queryMiddleware, querySelectors} from 'redux-query';
import MovesetStyle from './moveset.style'
import constants from '../../../../commons/constants'
class MovesetComponent extends Component {
  constructor(props) {
    super(props)
    this.data = []
  }

  componentWillMount() {
    // debugger
    this.data = []
    // this.props.detailMoves = []

  }

  componentDidMount() {
    this.data = []

    // this.props.namePokemon = undefined;
  }

  componentWillUnmount() {
    this.props.moves = undefined
  }

  render() {
    // debugger if (this.props.detailMoves &&    this.props.detailMoves.count  && )
    // { WS} tableData = []

    tableHead = [
      '',
      '',
      'ACC',
      'PWR',
      'PP',
      ''
    ]

    //  debugger  if (this.props.detailMoves)  { this.props.detailMoves.map((item)
    // => {

    /*
          if (this.props.detailMoves && this.props.detailMoves[this.props.namePokemon])  {
            this.props.detailMoves[this.props.namePokemon].map((item) => {
                if (item) {
                    tableData.push(['', item.name,
                    (item.accuracy ? `${item.accuracy}%`: '' ),
                    (item.power || ''),
                    (item.pp || ''),''])
                }
            })
          }
          */

    /*
        tableData: [
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12',''],
              ['', 'zen', '90%', '80','12','']
        ]*/
    //tableHead = ['Head', 'Head2', 'Head3', 'Head4','',''] debugger
    if (!this.props.isLoading && this.props.detailMoves) {
      //  debugger
      /*this.data.push(
      [
        '',
        this.props.detailMoves.name,
        (this.props.detailMoves.accuracy
          ? `${this.props.detailMoves.accuracy}%`
          : ''),
        (this.props.detailMoves.power || ''),
        (this.props.detailMoves.pp || ''),
        ''
      ]


      )
      */
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
