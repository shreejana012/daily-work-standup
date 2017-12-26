import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import StandUpIndex from './containers/StandUpIndex';
import StandUpNew from './containers/StandUpNew';
import StandUpShow from './containers/StandUpShow';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './stores/store';
ReactDOM.render(
<Provider store = {store}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path= "/standups/new" component= {StandUpNew} />
                <Route path= "/standups/:id" component= {StandUpShow} />
                <Route path= "/standups" component= {StandUpIndex} />
            </Switch>
        </div>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
