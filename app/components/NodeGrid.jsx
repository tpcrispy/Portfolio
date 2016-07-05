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
          <img className="thumbnail" src={"app/Assets/Todo.jpg"} onClick={this.showModal} />
            <h3>1</h3>

              <Modal ref="modal1" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <h2 className="text-center WelcomeText2">1</h2>
                <hr></hr>
                <div className="container ">
                  <h2 className="appText">About the App:</h2>
                  <h5 className="appDis">A simple Todo App made with React - it allows users to
                    create tasks, delete and set as completed.</h5>
                  <h2 className="appText2">The Skills I used:</h2>
                  <ul className="appSkills">
                    <li>React</li>
                    <li>Moment JS</li>
                    <li>Redux</li>
                    <li>Firebase</li>
                    <li>Webpack</li>
                  </ul>
                  <div className="container cont1">
                    <div className="expanded button-group">
                      <a className=" success hollow button btn1">GITHUB</a>
                      <a className=" hollow button ">Live Preview</a>
                    </div>
                  </div>
                </div>
              </Modal>
        </div>


        <div className="column text-center">
          <img className="thumbnail" src="http://placehold.it/300x300" onClick={this.showModal2} />
            <h3>2</h3>

              <Modal ref="modal2" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <h2 className="text-center WelcomeText2">2</h2>
                  <h2>The skills:</h2>
                  <h2>I am a dialog</h2>
                  <h2>I am a dialog</h2>
                  <div className="expanded button-group">
                    <button className=" hollow button expanded " onClick={this.hideModal}>Close</button>
                    <button className=" success hollow button button expanded " onClick={this.hideModal}>Close</button>
                  </div>
              </Modal>
            </div>


            <div className="column text-center">
              <img className="thumbnail" src="http://placehold.it/300x300" onClick={this.showModal3} />
              <h3>3</h3>

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
            <img className="thumbnail" src="http://placehold.it/300x300" onClick={this.showModal4} />
            <h3>4</h3>

            <Modal ref="modal4" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
              <h2 className="text-center WelcomeText2">4</h2>
                <h2>I am a dialog</h2>
                <h2>I am a dialog</h2>
                <h2>I am a dialog</h2>
                <div className="expanded button-group portButton">
                  <button className=" hollow button expanded " onClick={this.hideModal}>Close</button>
                  <button className=" success hollow button button expanded " onClick={this.hideModal}>Close</button>
                </div>
              </Modal>
            </div>
      </div>
    );
  }
});

module.exports = ReactGrid;
