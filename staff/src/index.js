import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {Provider} from "react-redux"; 
import {createStore, applyMiddleware} from "redux"; 
import {composeWithDevTools} from 'redux-devtools-extension'; 
import thunk from 'redux-thunk'; 
import {Router, Route} from 'react-router'; 
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from 'react-router-redux'; 

import reducer from "./reducers";

import App from './App';
import reportWebVitals from './reportWebVitals';

import AddWorker from './views/AddWorker';
import ChangeWorker from './views/ChangeWorker';
import WorkerInfo from './views/WorkerInfo';

const store=createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history=syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}> 
    <Router history={history}>
      <Route path="/" component={App} exact />
      <Route path="/add" component={AddWorker} />
      <Route path="/workers/:id" component={WorkerInfo} exact />
      <Route path="/workers/:id/edit" component={ChangeWorker} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
