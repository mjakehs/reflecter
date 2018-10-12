import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import admin from './redux/reducers/admin.reducer';
import feedbackForm from './redux/reducers/form.reducer';


const reducers = combineReducers({
    //imported reducers here
    admin,
    feedbackForm,
})

const storeInstance = createStore(
    reducers,
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

