import {combineReducers} from 'redux'
import {NavigationActions} from 'react-navigation'
import {AppNavigator} from '../components/navigation/menu/appNavigator'
import constants from '../commons/constants'

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
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
            break
        case constants.action.navegation.DETAIL_POKEMON:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'DetailPokemon' }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
    }

    return nextState || state
}
