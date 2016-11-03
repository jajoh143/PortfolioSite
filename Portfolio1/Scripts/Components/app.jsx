var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter;
var TransitionGroup = React.addons.CSSTransitionGroup;
import {Game} from './TicTacToe/tictacktoe.jsx';

var links = [
  {
      "url" : "/home",
      "text" : "Home"
  },
  {
      "url" : "/about",
      "text": "About"
  },
  {
      "url" : "/portfolio",
      "text": "Portfolio"
  },
  {
      "url" : "/contact",
      "text": "Contact Me"
  },
];

var Layout = React.createClass ({
    render() {
        return (
          <div>
             <Navbar items={links} />
         <body-container>
             { this.props.children }
         </body-container>
          </div>
    );
    }
});

var Navbar = React.createClass({
    generateLink: function(item) {
        return <LinkList text={item.text} url={item.url} />
    },
    render: function() {
        var items = this.props.items.map(this.generateLink);
        return (
        <nav className="navbar bg-faded">
          <Link className="nav-link navbar-brand" to="/">JSharp.Co</Link>
      <ul className="nav navbar-nav float-md-right">
          {items}
      </ul>
        </nav>
      );
    }
});

var LinkList = React.createClass({
    generateLink: function() {
        return <LinkMaker url={this.props.url} text={this.props.text} />;
    },
    render: function() {
        var content = this.generateLink();
        return (
          <li className="nav-item">
              {content}
          </li>
      );
    }
});

var LinkMaker = React.createClass({
    render: function() {
        return (
            <Link className="nav-link" to={this.props.url}>{this.props.text}</Link>
     );
    }
});

var Home = React.createClass({
    render: function() {
        return (
          <div id="home" className="card card-inverse">
            <div className="card-block text-xs-right">
            <img className="card-image img-fluid rounded float-md-left" src="./Content/bio.jpg" />
            <h3 className="card-title display-1">JSharp.Co</h3>
           <p className="card-text">As knowledgeable as I am punny.</p>
            </div>
          </div>
      );
    }
});

var About = React.createClass({
    render: function(){
        return (
            <div id="info" className="card card-inverse">
            <div className="card-block">
            <h3 className="card-title">A bit about me</h3>
           <p className="card-text">
               If knowledge is a sea of potential power, then the web is a smoothly sailing ship upon its waves, crafted through fine-tuned technology to deliver results.
               I have been fascinated with web and technology which has built it since the day I received my first Compaq laptop, at ten years old.
               What has followed is a loving, somewhat fanatic desire to know anything and everything about connecting this wonderful world to an endless pool of knowledge.<br/><br/>
               Primarily self-taught, I relied on the teeming online resources to help craft my technical skills in web technologies and programmers mentality
               that would be needed to accomplish my dreams. Building small scale websites and applications for local clients, I focused on understanding methods
               which allowed for responsive, fluid design, going above and beyond the droll, almost monochromatic approach I see all too often online,
               and creating something that truly lives. By crafting results which meet the clients need and those of the organic being which is the web,
               something great is accomplished. <br/><br/> Prior to my efforts as a .NET Web Developer, I worked in both cybersecurity for a major health technology company and
               as the manager of a supplement shop, both of which required a fervent amount of study and dedication to their respective topics.
               No matter where the plan for my life has taken me, I have learned both to take joy in the walk and to embrace the challenge.
               A firm believer that I am not handed anything which is beyond my grasp or understanding in some necessary capacity,
               that there is a plan beyond my gaze for my existence, life holds unending blessings as revelations upon my life. All that is needed is to accept them.
           </p>
            </div>
            </div>);
    }
});

var Portfolio = React.createClass({
    render: function() {
        return (  <div id="portfolio" className="card card-inverse">
            <div className="card-block">
            <h3 className="card-title">Special title treatment</h3>
           <p className="card-text">A few examples of stuff I've done</p>
                <h4 className="display-4 text-white text-md-center">Examples</h4>
              <div className="row">
                <div className="col-xs-4">
                  <img className="img-thumbnail rounded mx-auto" src="https://codepen.io/oknoblich/pen/YWLAkb/image/small.png" />
                </div>
                <div className="col-xs-4">
                  <img className="img-thumbnail rounded mx-auto" src="https://codepen.io/oknoblich/pen/zKZVoE/image/small.png" />
                </div>
                <div className="col-xs-4">
                  <img className="img-thumbnail rounded mx-auto" src="https://codepen.io/oknoblich/pen/wWXzpN/image/small.png" />
                </div>
              </div>
               <div className="row">
                <div className="col-xs-4">
                  <img className="img-thumbnail rounded mx-auto" src="https://codepen.io/oknoblich/pen/JKLpyz/image/small.png" />
                </div>
                <div className="col-xs-4">
                  <img className="img-thumbnail rounded mx-auto" src="https://codepen.io/oknoblich/pen/zrqqvw/image/small.png" />
                </div>
                <div className="col-xs-4">
                  <img className="img-thumbnail rounded mx-auto" src="https://codepen.io/oknoblich/pen/WwOxrV/image/small.png" />
                </div>
               </div>
                <h4 className="display-4 text-white text-md-center">Backend Work</h4>
                <div className="row">
                    <div className="col-xs-4">

                    </div>
                    <div className="col-xs-4">

                    </div>
                    <div className="col-xs-4">

                    </div>
                </div>
            </div>
        </div>);
    }
});

var App = React.createClass({
    render: function() {
        return (
          <container>
            <Home />
            <About />
            <Portfolio />
            <Contact />
          </container>
        );
    }
});

var Contact = React.createClass({
    render: function() {
        return (  <div id="contact" className="card card-inverse">
            <div className="card-block">
            <h3 className="card-title">Contact Me!</h3>
           <p className="card-text">Might be a contact form... eventually</p>
              <div className="row">
                <div className="col-xs-6">
                  <a className="btn btn-primary" target='_blank' href="https://www.linkedin.com/in/jacob-johnson-412019a7">
                      LinkedIn
                  </a>
                </div>
                 <div className="col-xs-6">
                     <Game />
                 </div>
              </div>
            </div>
        </div>);
    }
});


ReactDOM.render(<Router>
                  <Route path="/" component={Layout}>
                    <IndexRoute component={Home} />
                    <Route>
                      <Route path="home" component={Home} />
                      <Route path="about" component={About} />
                      <Route path="portfolio" component={Portfolio} />
                      <Route path="contact" component={Contact} />
                    </Route>
                  </Route>
</Router>,
document.getElementById('content'));
