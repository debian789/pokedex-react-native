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

export const fetchData= (url) => {
    return (dispatch) => {
        dispatch(getData)
    

    fetchDataServices(`${constants.environment.URL_SERVICES}${url}`)
    .then(([response, json]) => {
        dispatch(getDataSuccess(json.results))
    })
    .catch((error) => console.log(error))
}
}



