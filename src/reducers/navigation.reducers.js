import {combineReducers} from 'redux'
import {NavigationActions} from 'react-navigation'
import Router from '../components/navigation/menu/router'
import constants from '../commons/constants'

const firstAction = Router.router.getActionForPathAndParams('Main');
const tempNavState = Router.router.getStateForAction(firstAction);
const initialNavState = Router.router.getStateForAction(
    tempNavState
)

export default NavigationReducers = (state=initialNavState, action) => {
    let nextState;
    
    switch(action.type) {
        case 'Login':
            break;
        case constants.action.navegation.GET_CONTEXT_NAVIGATION:
            nextState = {
                ...state,
                navegation: action.navegation
            }
        default:
            nextState = Router.router.getStateForAction(action, state);
    }

    return nextState || state
}





