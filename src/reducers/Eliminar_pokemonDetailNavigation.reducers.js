import {combineReducers} from 'redux'
import {NavigationActions} from 'react-navigation'
import {AppNavigator1} from '../components/pokemonDetail/pokemonDetailNavegation.js'
import constants from '../commons/constants'

const firstAction = AppNavigator1.router.getActionForPathAndParams('DetailPokemon');
const tempNavState = AppNavigator1.router.getStateForAction(firstAction);
const initialNavState = AppNavigator1.router.getStateForAction(
    tempNavState
)

export default NavigationReducers1 = (state=initialNavState, action) => {
    let nextState;
    
    debugger
    switch(action.type) {
        case constants.action.navegation.DETAIL_POKEMON:
            nextState = AppNavigator1.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'DetailPokemon', params: {url: action.url} }),
                state
            );
            break;
        default:
            nextState = AppNavigator1.router.getStateForAction(action, state);
    }

    return nextState || state
}
