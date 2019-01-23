import {createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import  ReduxThunk  from 'redux-thunk';
import modules from './modules';

const middlewares = [
    createLogger(),
    ReduxThunk
]; 

const configure = preloadedState => createStore(
    modules,
    preloadedState,
    compose( applyMiddleware(...middlewares))
);

export default configure;