import constants from '../commons/constants'


export const getContextNavigation = (navegation) => {
    return {type: constants.action.navegation.GET_CONTEXT_NAVIGATION, navegation}
}

export const setContextNavigation = (navegation) => {
    return (dispatch) => {
        dispatch(getContextNavigation(navegation))
    }
}
