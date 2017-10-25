import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import commentReducer from './commentReducer';

export default combineReducers({
    comments: commentReducer,
    router: routerReducer
});
