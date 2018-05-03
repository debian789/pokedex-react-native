import constants from '../commons/constants'

export default PokemonReducers = (state=[], action) => {
    switch(action.type) {
        case constants.action.GET_LIST_POKEMON:
            return {
                ...state
            }
        case constants.action.GET_LIST_SUCCESS_POKEMON:
            return {
                ...state,
                data: action.data
            }
        default: 
            return state
    }
}