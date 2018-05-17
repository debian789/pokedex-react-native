import constants from '../commons/constants'
const initialState = {
    index: 0,
    routes: [
        {
            key: 'all',
            title: 'all'
        }, {
            key: 'caught',
            title: 'caught'
        }
    ]
}

export default(state = initialState, action) => {    
    switch (action.type) {
        case constants.action.tab_bar.SELECT_ALL_TAB:
            return {
                ...state,
                index: action.index
            }
          // return action.index
        case constants.action.tab_bar.SELECT_CAUGHT_TAB:
            return {
                ...state,
                index: action.index
            }
        default:
            return state
    }
}