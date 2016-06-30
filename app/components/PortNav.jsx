var React = require('react');
var Nav = require('Nav');
// EACH ONE OF THE PORTFOLIO GRIDS
var ReactGrid = require('ReactGrid');
var HtmlGrid = require('HtmlGrid');
var NodeGrid = require('NodeGrid');
var AngularGrid = require('AngularGrid');

var PortNav = React.createClass({
  getInitialState: function () {
    return {
            React: 'true',
            HTML: 'false',
            Node: 'false',
            Angular: 'false', // Here and above is for the Subnav (Portfolio Navbar), and below is for rendering the components
            ReactCom: true,
            HTMLCom: false,
            NodeCom: false,
            AngularCom: false
    };
  },
  onClickState: function () {
      this.setState({
        React: 'true',
        HTML: 'false',
        Node: 'false',
        Angular: 'false',
        ReactCom: true,
        HTMLCom: false,
        NodeCom: false,
        AngularCom: false
      });
  },
  onClickState1: function () {
      this.setState({
        React: 'false',
        HTML: 'true',
        Node: 'false',
        Angular: 'false',
        ReactCom: false,
        HTMLCom: true,
        NodeCom: false,
        AngularCom: false
      });
  },
  onClickState2: function () {
      this.setState({
        React: 'false',
        HTML: 'false',
        Node: 'true',
        Angular: 'false',
        ReactCom: false,
        HTMLCom: false,
        NodeCom: true,
        AngularCom: false
      });
  },
  onClickState3: function () {
      this.setState({
        React: 'false',
        HTML: 'false',
        Node: 'false',
        Angular: 'true',
        ReactCom: false,
        HTMLCom: false,
        NodeCom: false,
        AngularCom: true
      });
  },
  render: function() {
    return (
      <section id="Nav">
       <div>
            <div className="nav">
               <nav>
                   <ul>
                        <li className={this.state.React} onClick={this.onClickState}><a href="#/" ><span className="colorPort">React.JS</span></a></li>
                        <li className={this.state.HTML} onClick={this.onClickState1}><a href="#/" ><span className="colorPort">HTML+CSS</span></a></li>
                        <li className={this.state.Node} onClick={this.onClickState2}><a href="#/" ><span className="colorPort">Node.JS</span></a></li>
                        <li className={this.state.Angular} onClick={this.onClickState3}><a href="#/" ><span className="colorPort">Angular.JS</span></a></li>
                   </ul>
                </nav>
            </div>
            <hr></hr>
              { this.state.ReactCom    ? <ReactGrid />    : null }
              { this.state.HTMLCom     ? <HtmlGrid />     : null }
              { this.state.NodeCom     ? <NodeGrid />     : null }
              { this.state.AngularCom  ? <AngularGrid />  : null }
        </div>
    </section>
    );
  }
});

module.exports = PortNav;
