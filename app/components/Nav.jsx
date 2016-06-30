var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Portfolio by Thomas Smith</li>
          <li><IndexLink to="/" activeClassName="active-link">Portfolio</IndexLink></li>
          <li><Link to="/aboutme" activeClassName="active-link">About Me</Link></li>
          <li><Link to="/resume" activeClassName="active-link">Resume</Link></li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
