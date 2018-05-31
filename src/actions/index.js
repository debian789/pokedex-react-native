import constants from '../commons/constants'
import {fetchDataServices} from '../api'

export const getData = () => {
    return {type: constants.action.GET_LIST_POKEMON, isRefreshing: true, data: []}
}

export const getDataSuccess = (data) => {
    return {type: constants.action.GET_LIST_SUCCESS_POKEMON, data, isRefreshing: false}
}

export const getDataFail = (data) => {
    return {type: constants.action.GET_LIST_FAIL_POKEMON}
}

export const updataDataSuccess = (oldData, newData) => {
    const data = [...oldData, ...newData]   
    return {type: constants.action.UPDATE_LIST_SUCCESS_POKEMON, data, isRefreshing: false}
}

export const getNextOffset = (offset) => {
    const next = offset + constants.environment.PAGINATION.limit
    return {type: constants.action.GET_NEXT_OFFSET, offset: next}
}

export const fetchDataList= (url, offset, oldData) => {
    return (dispatch) => {
        
        dispatch(getData())
        dispatch(getNextOffset(offset))
        fetchDataServices(`${constants.environment.URL_SERVICES}${url(offset)}`)
        .then(([response, json]) => {            
            if (oldData && oldData.length > 0) {
                dispatch(updataDataSuccess(oldData, json.results))
            } else {
                dispatch(getDataSuccess(json.results))
            }            
        })
        .catch((error) => console.log(error))
    }
}
