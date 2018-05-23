import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {fetchDataList} from '../../../../actions/pokemonDetailMoveset.action'

class MovesetComponent extends Component {

    componentWillMount() {
        if (this.props.moves) {
            this.props.moves.map((move, index) => {
                move[index].move.url
            })
        }

    }

    render() {
        debugger
        const data = {
            tableHead: ['','', 'ACC', 'PWR', 'PP',''],
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
            ]
          }

        return (
            <Table borderStyle={{borderWidth: 0, borderColor: 'white'}}>
            <Row data={data.tableHead}  />
            <Rows data={data.tableData}/>
        </Table>
        )
    }
}

const mapDispatchToProps = () =>  {
    return {
        fetchData: (url) => {
            return dispatch(fetchDataList(url))
        }
    }
}


export default connect(null)(MovesetComponent)

