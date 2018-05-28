import constants from '../commons/constants'
const initialState= {
    isRefreshing: true
}

export default PokemonDetailEvolutionReducers = (state=initialState, action) => {
    switch(action.type) {
        case constants.action.GET_DETAIL_EVOLUTION_POKEMON:
            return {
                ...state,
                isRefreshing: action.isRefreshing
            }
        case constants.action.GET_DETAIL_EVOLUTION_SUCCESS_POKEMON:
            return {
                ...state,
                data: action.data,
                isRefreshing: action.isRefreshing
            }
        case constants.action.UPDATE_DETAIL_EVOLUTION_SUCCESS_POKEMON:
           return {
                ...state,
                data: action.data,
                isRefreshing: action.isRefreshing
            }
        default: 
            return state
    }
}