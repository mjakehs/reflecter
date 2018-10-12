import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


const reducers = combineReducers({
    //imported reducers here
})

const storeInstance = createStore(
    reducers,
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

