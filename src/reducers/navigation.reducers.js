import {combineReducers} from 'redux'
import {NavigationActions} from 'react-navigation'
import AppNavigator from '../components/navigation/appNavigation'
import constants from '../commons/constants'

const firstAction = AppNavigator.router.getActionForPathAndParams('Primary');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
    tempNavState
)

export default NavigationReducers = (state=initialNavState, action) => {
    let nextState;
    
    switch(action.type) {
        case constants.action.navegation.DETAIL_POKEMON:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'PokemonDetailMovesTab', params: {params: action.params} }),
                state
            );
            break;

        case constants.action.navegation.MAIN:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Primary'}),
                state
            );
            break;
        
        
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
    }

    return nextState || state
}
