import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import repoReducer from './repo';

const reducers = combineReducers({
	repo: repoReducer,
});

const middleware = [thunk];

const store = createStore(
	reducers,
	{},
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
