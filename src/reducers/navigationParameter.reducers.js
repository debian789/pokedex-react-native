import constants from '../commons/constants'
const initialState = {
    params: {}
}

export default PokemonReducers = (state = initialState, action) => {
    switch (action.type) {
        case constants.action.navegation.SET_PARAMETER:
                return {
                    ...state,
                    params: action.params
                }
            break;
        case constants.action.navegation.GET_PARAMETER:
                debugger
                return {
                    ...state,
                    params: action.params
                }
            break;
        case constants.action.navegation.CLEAR_PARAMETER:
                return initialState
            break;
        default:
            return state
    }
}