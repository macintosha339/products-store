import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk';

const persistedState = localStorage.getItem('redux-store')
? JSON.parse(localStorage.getItem('redux-store'))
: {}
export const store = createStore(rootReducer, persistedState, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  ));

store.subscribe(() => {
    localStorage.setItem('redux-store', JSON.stringify(store.getState()))
})