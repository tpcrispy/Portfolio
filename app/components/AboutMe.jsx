var React = require('react');

var AboutMe = () => {
  return (
    <div className="row  AboutMeMain">
     <div className=" expanded">
       <h1 className="WelcomeText"><span className="Hey">Here's a little </span>about me:</h1>
     </div>
     <div className="small-12 aboutMeIntro">
       <h1 className="text-center">I'm the current operator/creator of Blank, located in Blank, Australia.</h1>
     </div>
     <div className="small-12 aboutMeIntro">
       <h1 className="text-center">I have an unhealthy obsession with Austrlian sports.</h1>
     </div>
     <div className="small-12 aboutMeIntro">
       <h1 className="text-center">For some reason I (poorly) try  and play Ice Hockey to keep fit.</h1>
     </div>
     <div className=" expanded aboutMeContact">
       <h1 className="aboutMeContact">Contact Me </h1>
       <h1 className="aboutMeContact1">(if you feel like it...)</h1>
       </div>








</div>
  );
}

module.exports = AboutMe;
