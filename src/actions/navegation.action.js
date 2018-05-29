import constants from '../commons/constants'

export const setParams = (params) => {
    return {type: constants.action.navegation.DETAIL_POKEMON, params}
}