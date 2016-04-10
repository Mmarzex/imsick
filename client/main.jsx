import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import App from '../imports/ui/App';
import Test from '../imports/ui/Test';

class RouteContainer extends React.Component {
    render() {
        return(

            <div>
                <nav className="navbar navbar-default navbar-static-top imsick-navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand imsick-brand" href="#">I'm Sick</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav imsick-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right imsick-nav">
                                <li><a href="../navbar/">Default</a></li>
                                <li className="active"><a href="./">Static top <span className="sr-only">(current)</span></a></li>
                                <li><a href="../navbar-fixed-top/">Fixed top</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
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
            </Route>
        </Router>
    ), document.getElementById('render-target'));
    // render(<Main />, document.getElementById('render-target'));
});