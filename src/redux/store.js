import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers';

const reducer = combineReducers({
	user: userReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
