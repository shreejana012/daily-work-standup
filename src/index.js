import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StandUpIndex from './containers/StandUpIndex';
import StandUpNew from './containers/StandUpNew';
import StandUpShow from './containers/StandUpShow';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './stores/store';
ReactDOM.render(
<App />
, document.getElementById('root'));
registerServiceWorker();
