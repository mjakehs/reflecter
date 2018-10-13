//react app dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//styles
import './index.css';

//main app include
import App from './components/App/App';

//redux dependencies
import {applyMiddleware, createStore, combineReducers} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

//reducer includes
import admin from './redux/reducers/admin.reducer';
import feedbackForm from './redux/reducers/form.reducer';
import stage from './redux/reducers/stage.reducer';

const reducers = combineReducers({
    //imported reducers here
    admin,
    feedbackForm,
    stage,
})

const storeInstance = createStore(
    reducers,
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

