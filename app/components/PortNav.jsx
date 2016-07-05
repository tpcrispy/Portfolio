var React = require('react');
// EACH ONE OF THE PORTFOLIO GRIDS
var ReactGrid = require('ReactGrid');
var HtmlGrid = require('HtmlGrid');
var NodeGrid = require('NodeGrid');
var AngularGrid = require('AngularGrid');

var PortNav = React.createClass({
  getInitialState: function () {
    return {
      lang: 'React'
    };
  },
  setLang: function(lang) {
    this.setState({
      lang: lang
    });
  },
  render: function() {
    return (
      <section id="Nav">
       <div>
            <div className="nav">
               <nav>
                   <ul>
                        <li className={this.state.lang=='React'?'true':'false'} onClick={() => this.setLang('React')}><a href="#/"><span className="colorPort">React.JS</span></a></li>
                        <li className={this.state.lang=='HTML'?'true':'false'} onClick={() => this.setLang('HTML')}><a href="#/"><span className="colorPort">HTML+CSS</span></a></li>
                        <li className={this.state.lang=='Node'?'true':'false'} onClick={() => this.setLang('Node')}><a href="#/"><span className="colorPort">Node.JS</span></a></li>
                        <li className={this.state.lang=='Angular'?'true':'false'} onClick={() => this.setLang('Angular')}><a href="#/"><span className="colorPort">Angular.JS</span></a></li>
                   </ul>
                </nav>
            </div>
            <hr></hr>
              { this.state.lang=='React' ? <ReactGrid /> : null }
              { this.state.lang=='HTML' ? <HtmlGrid /> : null }
              { this.state.lang=='Node' ? <NodeGrid /> : null }
              { this.state.lang=='Angular' ? <AngularGrid /> : null }
        </div>
    </section>
    );
  }
});

module.exports = PortNav;
