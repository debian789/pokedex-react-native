import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from 'react-native-table-component';
import {fetchDataList} from '../../../../actions/pokemonDetailMoveset.action'
import {compose} from 'redux'
import {connectRequest, entitiesReducer, queriesReducer, queryMiddleware, querySelectors} from 'redux-query';

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
    // { WS}

    //tableData = []

    tableHead = [
      '',
      '',
      'ACC',
      'PWR',
      'PP',
      ''
    ]

    //  debugger  if (this.props.detailMoves)  {
    // this.props.detailMoves.map((item) => {

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
        //tableHead = ['Head', 'Head2', 'Head3', 'Head4','','']
    //debugger
    if (!this.props.isLoading && this.props.detailMoves) {
     //  debugger
     this.data.push(
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

     //    return this.data.map((item) => {
     //      debugger



     //  return (<View key={Math.random()}><Text>{item.name}</Text></View>)
   // })
  //  debugger 



  
    return (<Rows borderStyle={{borderWidth: 0, borderColor: '#c8e1ff'}} data={this.data} flexArr={[1, 4, 2, 2, 2,0.5]} />)

    } else {
      return (<Text>...... </Text>)
    }
  }
}

//const movesRequest = props => {
const movesRequest = connectRequest((props) => {
  let name = props.namePokemon
  
  return props.moves.map((item, index) => {
    return {
      url: item.move.url ,
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


export default connect(state => ({
    detailMoves: selectMoves(state),
    }))(movesRequest)




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