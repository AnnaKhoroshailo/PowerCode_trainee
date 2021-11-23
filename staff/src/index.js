import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Router, Route, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "react-router-redux";

import reducer from "./reducers";

import reportWebVitals from "./reportWebVitals";

import Staff from "./views/Staff";
import AddWorker from "./views/AddWorker";
import ChangeWorker from "./views/ChangeWorker";
import LogIn from "./views/LogIn";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(createBrowserHistory(), store);
const user = sessionStorage.getItem("user");

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" exact>
        {user ? <Staff /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" component={LogIn} />
      <Route path="/add">
        {user ? <AddWorker /> : <Redirect to="/login" />}
      </Route>
      <Route path="/workers/:id/edit">
        {user ? <ChangeWorker /> : <Redirect to="/login" />}
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
