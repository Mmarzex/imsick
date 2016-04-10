import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from '../imports/ui/App';
import Test from '../imports/ui/Test';
import SicknessMap from '../imports/map/SicknessMap';

class RouteContainer extends React.Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

Meteor.startup(() => {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={RouteContainer}>
                <IndexRoute component={App}/>
                <Route path="test" component={Test} />
								<Route path="maptest" component={SicknessMap} />
            </Route>
        </Router>
    ), document.getElementById('render-target'));
    // render(<Main />, document.getElementById('render-target'));
});