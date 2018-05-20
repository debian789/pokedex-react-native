import constants from '../commons/constants'
const initialState = {
    index: 0,
    routes: [
        {
            key: 'stats',
            title: 'Stats'
        }, {
            key: 'moves',
            title: 'Moves'
        }, {
            key: 'location',
            title: 'Location'
        }
    ]
}

export default(state = initialState, action) => {    
    switch (action.type) {
        case constants.action.tab_bar.SELECT_LOCATION_TAB:
            return {
                ...state,
                index: action.index
            }
        case constants.action.tab_bar.SELECT_MOVES_TAB:
            return {
                ...state,
                index: action.index
            }
        case constants.action.tab_bar.SELECT_STATS_TAB:
            return {
                ...state,
                index: action.index
            }
        default:
            return state
    }
}