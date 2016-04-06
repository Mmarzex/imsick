import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from '../ui/App';
import Test from '../ui/Test';

export default class Main extends Component {
    render() {
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="test" component={Test} />
            </Route>
        </Router>
    }
}