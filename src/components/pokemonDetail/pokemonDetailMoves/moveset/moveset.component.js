import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {fetchDataList} from '../../../../actions/pokemonDetailMoveset.action'
import {compose} from 'redux'
import {connectRequest, entitiesReducer, queriesReducer, queryMiddleware, querySelectors} from 'redux-query';
import MovesetStyle from './moveset.style'

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

        const colorBase = [
          '#BFEBDB',
          '#C2DEDE',
          '#92CFCC',
          '#B2E3B3',
          '#D2F4BF',
          '#D0C2E3',
          '#F9C4BF',
          '#ECCFC6',
          '#EFB0A6',
          '#FDFB78',
          '#E1E7F4',
          '#FFF597',
          '#F4E5C7',
          '#F6E9D4',
          '#EEFBF9',
          '#CCD2E3',
          '#6F86A5',
          '#E1E7F4',
          '#DCECE4',
          '#CCD2E3',
          '#DCDDAA',
          '#BF9569',
          '#C33766',
          '#7E72AC'
        ]
        let randNumber = Math.floor(Math.random() * colorBase.length);

        
      return this
        .data
        .map((item, index) => {
          //      debugger
          debugger

       
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

          //   return (<View key={Math.random()}><Text>{item.name}</Text></View>)
        })
      //  debugger  return (<Rows borderStyle={{borderWidth: 0, borderColor:
      // '#c8e1ff'}} data={this.data} flexArr={[1, 4, 2, 2, 2,0.5]} />)

    } else {
      return (
        <Text>......
        </Text>
      )
    }
  }
}

//const movesRequest = props => {
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
            let ind = index
            let pe = prev
            let net = next
            //   debugger

            return next
            /*
          if (props.first) {
            props.first = false
            prev = undefined
          }

          if (prev) {
              return [...prev, next]
          } else {
            return [next]
          }
*/

            /*
          if (prev) {
            return  [
                ...prev,
                [
                  '',
                  next.name,
                  (next.accuracy
                    ? `${next.accuracy}%`
                    : ''),
                  (next.power || ''),
                  (next.pp || ''),
                  ''
                ]
              ]

          } else {

            return  [
                [
                  '',
                  next.name,
                  (next.accuracy
                    ? `${next.accuracy}%`
                    : ''),
                  (next.power || ''),
                  (next.pp || ''),
                  ''
                ]
            ]
          }
            */

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

/*
export default compose(connect((state, props) => {
  const query = movesRequest(props);
  return {
    isLoading: querySelectors.isPending(state.queries, query),
    detailMoves: selectMoves(state, props),
    query
  };
}), connectRequest(props => props.query))(MovesetComponent);


*/