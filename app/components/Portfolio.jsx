var React = require('react');
var Modal = require('boron/OutlineModal');
var Intro = require('Intro');
var PortNav = require('PortNav');


var Portfolio = React.createClass ({
  render: function() {
    return (
    <div className="aboutme">
      <Intro />
      <div>
        <hr></hr>
        <h3 className="text-center PortText">Here's some of my work</h3>
        <PortNav />
      </div>
    </div>
    );
  }
});

module.exports = Portfolio;
