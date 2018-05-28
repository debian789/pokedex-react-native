import constants from '../commons/constants'
import {fetchDataServices} from '../api'


export const getData = () => {
    return {type: constants.action.GET_DETAIL_EVOLUTION_POKEMON, isRefreshing: true, data: []}
}

export const getDataSuccess = (data) => {
    return {type: constants.action.GET_DETAIL_EVOLUTION_SUCCESS_POKEMON, data, isRefreshing: false}
}

export const getDataFail = (data) => {
    return {type: constants.action.GET_DETAIL_EVOLUTION_FAIL_POKEMON}
}

export const fetchDataEvolution= (id) => {
    return (dispatch) => {
        dispatch(getData())
        
        fetchDataServices(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(([response, json]) => {
            fetchDataServices(json.evolution_chain)
                .then(([response, json]) => {
                    dispatch(getDataSuccess(json))
            })
        })
        .catch((error) => console.log(error))
    }
}
