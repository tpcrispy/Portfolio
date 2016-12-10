var React = require('react');
var Modal = require('boron/OutlineModal');


var modalStyle = {};
var backdropStyle = {};
var contentStyle = {
    backgroundColor: '#eee',
    height: '600px'
};

var ReactGrid = React.createClass({

  showModal: function() {
        this.refs.modal1.show();
    },
  showModal2: function() {
          this.refs.modal2.show();
    },
  showModal3: function() {
            this.refs.modal3.show();
    },
  showModal4: function() {
              this.refs.modal4.show();
    },
  hideModal: function() {
        this.refs.modal.hide();
    },

  render: function() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4 PortPhotos">
        <div className="column text-center">
          <img className="thumbnail" src="https://i.imgur.com/a0ae9Jl.jpg" onClick={this.showModal} />
            <h3>React Todo </h3>
            <h3> </h3>
              <Modal ref="modal1" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <h2 className="text-center WelcomeText2">Portfolio</h2>
                <hr></hr>
                <div className="container ">
                  <h2 className="appText">About the App:</h2>
                  <h5 className="appDis">A simple Todo App made with React - it allows users to
                    create tasks, delete and set as completed. Users also have the ability to search Todos.</h5>
                  <h2 className="appText2">The Skills I used:</h2>
                  <ul className="appSkills">
                    <li>React.js</li>
                    <li>Moment JS</li>
                    <li>Foundation 6</li>
                    <li>HTML 5 / SCSS</li>
                    <li>Webpack</li>
                  </ul>
                  <div className="container cont1">
                    <div className="expanded button-group">
                      <a className=" success hollow button btn1" target="_blank" href="https://github.com/tpcrispy/ReactTodo">GITHUB</a>
                      <a className=" hollow button " target="_blank" href="http://thawing-shelf-88513.herokuapp.com/">Live Preview</a>
                    </div>
                  </div>
                </div>
              </Modal>
        </div>


        <div className="column text-center">
          <img className="thumbnail" src="https://i.imgur.com/m6TZkjo.jpg" onClick={this.showModal2} />
            <h3>React Timer</h3>
            <h3> </h3>
              <Modal ref="modal2" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <h2 className="text-center WelcomeText2">React Timer</h2>
                <hr></hr>
                <div className="container ">
                  <h2 className="appText">About the App:</h2>
                  <h5 className="appDis">A simple app that allows users to start/stop a stopwatch and countdown timer.</h5>
                  <h2 className="appText2">The Skills I used:</h2>
                  <ul className="appSkills">
                    <li>Foundation</li>
                    <li>Webpack</li>
                    <li>React-Router</li>
                    <li>manipulation of state</li>
                    <li></li>
                  </ul>
                  <div className="container cont1">
                    <div className="expanded button-group">
                      <a className=" success hollow button btn1" target="_blank" href="https://github.com/tpcrispy/ReactTimer">GITHUB</a>
                      <a className=" hollow button" target="_blank" href="http://intense-brushlands-54467.herokuapp.com/#/?_k=hj5nqp">Live Preview</a>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>


            <div className="column text-center">
              <img className="thumbnail" src="http://i.imgur.com/lg7BW1V.png" onClick={this.showModal3} />
              <h3>This Site</h3>
              <h3> </h3>
              <Modal ref="modal3" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <h2 className="text-center WelcomeText2">3</h2>
                  <h2>I am a dialog</h2>
                  <h2>I am a dialog</h2>
                  <h2>I am a dialog</h2>
                  <div className="expanded button-group">
                    <button className=" hollow button expanded " onClick={this.hideModal}>Close</button>
                    <button className="success hollow button button expanded " onClick={this.hideModal}>Close</button>
                  </div>
              </Modal>
            </div>


          <div className="column text-center">
            <img className="thumbnail" src="https://i.imgur.com/LOk58o7.png" onClick={this.showModal4} />
            <h3>React Youtube</h3>
            <h3> </h3>
            <Modal ref="modal4" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
              <h2 className="text-center WelcomeText2">React Youtube</h2>
              <hr></hr>
              <div className="container ">
                <h2 className="appText">About the App:</h2>
                <h5 className="appDis">A application that lets users search youtube videos on the fly without needing to press search.</h5>
                <h2 className="appText2">The Skills I used:</h2>
                <ul className="appSkills">
                  <li>Bootstrap</li>
                  <li>Webpack</li>
                  <li>Youtube API</li>
                  <li>ES6 Javascript</li>
                  <li>lodash</li>
                </ul>
                <div className="container cont1">
                  <div className="expanded button-group">
                    <a className=" success hollow button btn1" target="_blank" href="https://github.com/tpcrispy/YoutubeReact">GITHUB</a>
                    <a className=" hollow button" target="_blank" href="http://arcane-fortress-60759.herokuapp.com/">Live Preview</a>
                  </div>
                </div>
              </div>
              </Modal>
            </div>
        
      </div>

    );
  }
});

module.exports = ReactGrid;
