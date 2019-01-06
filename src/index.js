import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import { createStore } from 'redux'
import reducerCombined from './ReduxFiles/Reducers/ReducerCombined'

export const store=createStore(reducerCombined);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

serviceWorker.unregister();
