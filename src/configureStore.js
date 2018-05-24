import {createStore, applyMiddleware} from 'redux';

import Reducers from './reducers'
import thunk from 'redux-thunk'
import {queryMiddleware} from 'redux-query'
export default configureStore = () => {
    const middleware = queryMiddleware(
        state => state.queries,
        state => state.entities
      );
      
    let store = createStore(Reducers, applyMiddleware(thunk, middleware))



    return store
}