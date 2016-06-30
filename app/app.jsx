var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Modal = require('react-modal');

var Portfolio = require('Portfolio');
var Header = require('Header');
var Nav = require('Nav');
var AboutMe = require('AboutMe');


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

  ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="aboutme" component={AboutMe}/>
      <IndexRoute component={Portfolio}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
