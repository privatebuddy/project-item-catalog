import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import middleware from './Middleware'
import reducer from './Reducers'

const store = createStore(reducer,middleware);

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
