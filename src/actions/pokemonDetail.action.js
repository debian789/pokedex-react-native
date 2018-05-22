import constants from '../commons/constants'
import {fetchDataServices} from '../api'

export const getUrl = (url) => {
    return {type: constants.action.navegation.DETAIL_POKEMON, url}
}

export const getData = () => {
    return {type: constants.action.GET_DETAIL_POKEMON, isRefreshing: true, data: []}
}

export const getDataSuccess = (data) => {
    return {type: constants.action.GET_DETAIL_SUCCESS_POKEMON, data, isRefreshing: false}
}

export const getDataFail = (data) => {
    return {type: constants.action.GET_DETAIL_FAIL_POKEMON}
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

