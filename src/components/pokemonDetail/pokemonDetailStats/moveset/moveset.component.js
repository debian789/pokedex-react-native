import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {fetchDataList} from '../../../../actions/pokemonDetailMoveset.action'
import {compose} from 'redux'
import {
    connectRequest,
    entitiesReducer,
    queriesReducer,
    queryMiddleware,
    querySelectors,
  } from 'redux-query';
  

class MovesetComponent extends Component {
    constructor(props) {
      super(props)    
    }

    componentWillMount() {
  
     // this.tableData = []
      
    }
    
    
    componentDidMount() {
      
    }
    
    render() {
      // debugger
      //if (this.props.detailMoves &&
      //    this.props.detailMoves.count  && 
      //) {

        //WS}
        
        
        
        tableData = []



        tableHead = ['','', 'ACC', 'PWR', 'PP','']
        
        if (this.props.detailMoves) {
            this.props.detailMoves.map((item) => {
                if (item) {
                    tableData.push(['', item.name, 
                    (item.accuracy ? `${item.accuracy}%`: '' ),
                    (item.power || ''),
                    (item.pp || ''),''])
                }
            })
        }

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
        

        return (
            <Table borderStyle={{borderWidth: 0, borderColor: 'white'}}>
            <Row data={tableHead}  />
            <Rows data={tableData}/>
        </Table>
        )
    }
}





const movesRequest = connectRequest((props) => {
    if (props.moves) {
        // const count = props.moves.length;

        return props.moves.map((move, index) => {

            return {
                url: move.move.url,
                transform: body => ({
                  // The server responds with an array of IDs
                  
                detailMoves: body,

                //  detailMoves: {
                //    [index]: body,
                 // },
                


            }),
            update: {
                detailMoves: (prev, next) => {
                    // Discard previous `response` value (we don't need it anymore).
                    // return next;
debugger
                    if (prev) {
                        return [
                            ...prev,
                            next]
                    } else {
                        return [ next]
                    }
                  },
                },
            }
        })
    }
})(MovesetComponent)



const selectMoves = state => {
    return state.entities.detailMoves || undefined;
  };

export default connect(state => ({
    detailMoves: selectMoves(state),
    }))(movesRequest)



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

