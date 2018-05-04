import constants from '../commons/constants'
const initialState= {
    isRefreshing: true
}

export default PokemonReducers = (state=initialState, action) => {
    switch(action.type) {
        case constants.action.GET_LIST_POKEMON:
            return {
                ...state,
                isRefreshing: action.isRefreshing
            }
        case constants.action.GET_LIST_SUCCESS_POKEMON:
            return {
                ...state,
                data: action.data,
                isRefreshing: action.isRefreshing
            }
        case constants.action.UPDATE_LIST_SUCCESS_POKEMON:
           return {
                ...state,
                data: action.data,
                isRefreshing: action.isRefreshing
            }
        case constants.action.GET_NEXT_OFFSET:
            return {
                ...state,
                offset: action.offset
            }
        default: 
            return state
    }
}