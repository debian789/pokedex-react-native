import constants from '../commons/constants'

export const sendParametersByNavigation = (params) => {
    return {type: constants.action.navegation.DETAIL_POKEMON, params}
}

export const setParameters = params => {
    return {type: constants.action.navegation.SET_PARAMETER, params}
}

export const getParameters = () => {
    return {type: constants.action.navegation.GET_PARAMETER}
}

export const clearParameters = () => {
    return {type: constants.action.navegation.CLEAR_PARAMETER}
}

export const main = () => {
    return {type: constants.action.navegation.MAIN}
}