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
          <img className="thumbnail" src="http://i.imgur.com/G7u0BEs.jpg" onClick={this.showModal} />
            <h3>FirstWebDesigns <br /> (Freelancing)</h3>

              <Modal ref="modal1" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <h2 className="text-center WelcomeText2">1</h2>
                <hr></hr>
                <div className="container ">
                  <h2 className="appText">About the Site:</h2>
                  <h5 className="appDis">My Freelancing Site I built using Wordpress and the Divi Child-Theme.</h5>
                  <h2 className="appText2">The Skills I used:</h2>
                  <ul className="appSkills">
                    <li>Wordpress</li>
                    <li>Divi (child-theme)</li>
                    <li>CSS</li>
                    <li>Wordpress plugins</li>
                  </ul>
                  <div className="container cont1">
                    <div className="expanded button-group">
                      <a className=" success hollow button btn1">GITHUB</a>
                      <a className=" hollow button " target="_blank" href="http://www.firstwebdesigns.com.au/">Live Preview</a>
                    </div>
                  </div>
                </div>
              </Modal>
        </div>


        <div className="column text-center">
          <img className="thumbnail" src="http://i.imgur.com/fC9QDc3.jpg" onClick={this.showModal2} />
            <h3>CreditScoreDoc<br /> (Live)</h3>

              <Modal ref="modal2" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <h2 className="text-center WelcomeText2">1</h2>
                <hr></hr>
                <div className="container ">
                  <h2 className="appText">About the Site:</h2>
                  <h5 className="appDis">A site designed for a client in the UK made using Wordpress - Theme was Betheme with use of the Visual Composer.</h5>
                  <h2 className="appText2">The Skills I used:</h2>
                  <ul className="appSkills">
                    <li>Wordpress</li>
                    <li>Betheme (child-theme)</li>
                    <li>CSS</li>
                    <li>Wordpress plugins</li>
                  </ul>
                  <div className="container cont1">
                    <div className="expanded button-group">
                      <a className=" success hollow button btn1">GITHUB</a>
                      <a className=" hollow button " target="_blank" href="http://www.creditscoredoc.com/">Live Preview</a>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>


            <div className="column text-center">
              <img className="thumbnail" src="https://i.imgur.com/gVJIsfB.jpg" onClick={this.showModal3} />
              <h3>Tiny Tackers <br/>(non-live)</h3>

                <Modal ref="modal3" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                  <h2 className="text-center WelcomeText2">Tiny Tackers</h2>
                  <hr></hr>
                  <div className="container ">
                    <h2 className="appText">About the Site:</h2>
                    <h5 className="appDis">A simple site made with HTMl/CSS/Bootstrap - has not yet been brought into full production.</h5>
                    <h2 className="appText2">The Skills I used:</h2>
                    <ul className="appSkills">
                      <li>Bootstrap</li>
                      <li>HTML 5</li>
                      <li>CSS</li>
                    </ul>
                    <div className="container cont1">
                      <div className="expanded button-group">
                        <a className=" success hollow button btn1">GITHUB</a>
                        <a className=" hollow button " target="_blank" href="https://i.imgur.com/gVJIsfB.jpg">Live Preview</a>
                      </div>
                    </div>
                  </div>
                </Modal>
            </div>


          <div className="column text-center">
            <img className="thumbnail" src="https://i.imgur.com/x5NgK4N.jpg" onClick={this.showModal4} />
            <h3> Salamanca Cafe <br /> (non-live)</h3>

              <Modal ref="modal4" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <h2 className="text-center WelcomeText2">Salamanca Wharf Cafe</h2>
                <hr></hr>
                <div className="container ">
                  <h2 className="appText">About the Site:</h2>
                  <h5 className="appDis">A simple site made with fullpage.JS (http:www.alvarotrigo.com/fullPage). - has not yet been brought into full production.</h5>
                  <h2 className="appText2">The Skills I used:</h2>
                  <ul className="appSkills">
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>HTML 5</li>
                    <li>CSS</li>
                  </ul>
                  <div className="container cont1">
                    <div className="expanded button-group">
                      <a className=" success hollow button btn1">GITHUB</a>
                      <a className=" hollow button " target="_blank" href="https://i.imgur.com/gVJIsfB.jpg">Live Preview</a>
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
