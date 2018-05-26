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
  }

  componentWillMount() {

    this.props.detailMoves = []

  }

  componentDidMount() {
    this.props.namePokemon = undefined;
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
      debugger

     // this.props.detailMoves.data.map(() => {
       //return (<View><Text>{Math.random()}</Text><Text>{uuidv1()}</Text></View>)
        return (<Rows data={this.props.detailMoves}/>)
     // })
    } else {
      return (<Text>...... </Text>)
    }
  }
}

const movesRequest = props => {
    return {
      url: props.move.move.url ,
      transform: body => ({detailMoves: body}),
      update: {
        detailMoves: (prev, next) => {
          /*if (prev) {
            return {
              data: [
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
            }
          } else {
            */
           debugger
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
      },
      force: true

    }


}

const selectMoves = (state, props) => {
  return state.entities.detailMoves || undefined;
};

/*
export default connect(state => ({
    detailMoves: selectMoves(state),
    }))(movesRequest)

*/

export default compose(connect((state, props) => {
  const query = movesRequest(props);
  //debugger
  return {
    isLoading: querySelectors.isPending(state.queries, query),
    detailMoves: selectMoves(state, props),
    query
  };
}), connectRequest(props => props.query))(MovesetComponent);

/*
const topStoriesRequest = () => {
    return {
      url: `https://hacker-news.firebaseio.com/v0/topstories.json`,
      transform: body => ({
        topStoryIds: body,
      }),
      update: {
        topStoryIds: (prev, next) => {
          return next;
        },
      },
    };
  };

  const itemRequest = itemId => {
    return {
      url: `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`,
      transform: body => ({
        itemsById: {
          [itemId]: body,
        },
      }),
      update: {
        itemsById: (prev, next) => {
          return {
            ...prev,
            ...next,
          };
        },
      },
    };
  };



  const selectItem = (state, props) => {
    return (state.entities.itemsById || {})[props.itemId];
  };



export default compose(
    connect((state, props) => {
      const query = itemRequest(props.itemId);
      return {
        isLoading: querySelectors.isPending(state.queries, query),
        item: selectItem(state, props),
        query,
      };
    }),
    connectRequest(props => props.query)
  )(MovesetComponent);

*/

/*
const mapStateToProps = state => ({
    message: state.entities.message,
  });

const mapPropsToConfigs = () => helloRequest();

const mapDispatchToProps = () =>  {
    return {
        fetchData: (url) => {
            return dispatch(fetchDataList(url))
        }
    }
}
*/

/*
export default compose(
  connect(mapStateToProps),
  connectRequest(mapPropsToConfigs)
)(MovesetComponent);

*/
//export default connect(null)(MovesetComponent)
