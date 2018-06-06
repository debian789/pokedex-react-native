import constants from '../commons/constants'
const initialState= {
    state: false
}

export default SearchReducers = (state=initialState, action) => {
    switch(action.type) {
        case constants.action.ACTIVE_SEARCH:
            return {
                ...state,
                state: action.state
            }
        case constants.action.DEACTIVE_SEARCH:
            return {
                ...state,
                state: action.state
            }
        default: 
            return state
    }
}