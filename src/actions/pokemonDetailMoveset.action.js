import constants from '../commons/constants'
import {fetchDataServices} from '../api'


export const getData = () => {
    return {type: constants.action.GET_DETAIL_MOVESET_POKEMON, isRefreshing: true, data: []}
}

export const getDataSuccess = (data) => {
    return {type: constants.action.GET_DETAIL_MOVESET_SUCCESS_POKEMON, data, isRefreshing: false}
}

export const getDataFail = (data) => {
    return {type: constants.action.GET_DETAIL_MOVESET_FAIL_POKEMON}
}

export const fetchDataList= (url) => {
    return (dispatch) => {
        dispatch(getData())
        
        fetchDataServices(`${url}`)
        .then(([response, json]) => {
            dispatch(getDataSuccess(json))
        })
        .catch((error) => console.log(error))
    }
}

