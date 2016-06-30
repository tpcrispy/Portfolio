var React = require('react');

var Portfolio = require('Portfolio');
var Header = require('Header');
var Nav = require('Nav');
var Modal = require('react-modal');


var Main = (props) => {
    return (
        <div>
          <Header />
          <Nav />
          {props.children}
        </div>
    );
  }


module.exports = Main;
