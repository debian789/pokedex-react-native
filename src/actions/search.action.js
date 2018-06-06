import constants from '../commons/constants'

export const active = () => {
    return {type: constants.action.ACTIVE_SEARCH, state: true}
}

export const desactive = () => {
    return {type: constants.action.DEACTIVE_SEARCH, state: false}
}