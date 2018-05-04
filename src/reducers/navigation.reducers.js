import {combineReducers} from 'redux'
import {NavigationActions} from 'react-navigation'
import {AppNavigator} from '../components/navigation/navigation.component'

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
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state
}





