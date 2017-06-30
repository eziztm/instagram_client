import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router"

import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path="second"  component={SecondPage}></Route>
        </Route>
    </Router>
, app);
