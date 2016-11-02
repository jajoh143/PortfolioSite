"use strict";

var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var Link = _ReactRouter.Link;
var browserHistory = _ReactRouter.browserHistory;

var TransitionGroup = React.addons.CSSTransitionGroup;

var links = [{
    "url": "/home",
    "text": "Home"
}, {
    "url": "/about",
    "text": "About"
}, {
    "url": "/portfolio",
    "text": "Portfolio"
}, {
    "url": "/contact",
    "text": "Contact Me"
}];

var Layout = React.createClass({
    displayName: "Layout",

    render: function render() {
        return React.createElement("div", null, React.createElement(Navbar, { items: links }), React.createElement("body-container", null, this.props.children));
    }
});

var Navbar = React.createClass({
    displayName: "Navbar",

    generateLink: function generateLink(item) {
        return React.createElement(LinkList, { text: item.text, url: item.url });
    },
    render: function render() {
        var items = this.props.items.map(this.generateLink);
        return React.createElement("nav", { className: "navbar bg-faded" }, React.createElement(Link, { className: "nav-link navbar-brand", to: "/" }, "JSharp.Co"), React.createElement("ul", { className: "nav navbar-nav float-md-right" }, items));
    }
});

var LinkList = React.createClass({
    displayName: "LinkList",

    generateLink: function generateLink() {
        return React.createElement(LinkMaker, { url: this.props.url, text: this.props.text });
    },
    render: function render() {
        var content = this.generateLink();
        return React.createElement("li", { className: "nav-item" }, content);
    }
});

var LinkMaker = React.createClass({
    displayName: "LinkMaker",

    render: function render() {
        return React.createElement(Link, { className: "nav-link", to: this.props.url }, this.props.text);
    }
});

var Home = React.createClass({
    displayName: "Home",

    render: function render() {
        return React.createElement("div", { id: "home", className: "card card-inverse" }, React.createElement("div", { className: "card-block text-xs-right" }, React.createElement("img", { className: "card-image img-fluid rounded float-md-left", src: "./Content/bio.jpg" }), React.createElement("h3", { className: "card-title display-1" }, "JSharp.Co"), React.createElement("p", { className: "card-text" }, "As knowledgeable as I am punny.")));
    }
});

var About = React.createClass({
    displayName: "About",

    render: function render() {
        return React.createElement("div", { id: "info", className: "card card-inverse" }, React.createElement("div", { className: "card-block" }, React.createElement("h3", { className: "card-title" }, "A bit about me"), React.createElement("p", { className: "card-text" }, "If knowledge is a sea of potential power, then the web is a smoothly sailing ship upon its waves, crafted through fine-tuned technology to deliver results. I have been fascinated with web and technology which has built it since the day I received my first Compaq laptop, at ten years old. What has followed is a loving, somewhat fanatic desire to know anything and everything about connecting this wonderful world to an endless pool of knowledge.", React.createElement("br", null), React.createElement("br", null), "Primarily self-taught, I relied on the teeming online resources to help craft my technical skills in web technologies and programmers mentality that would be needed to accomplish my dreams. Building small scale websites and applications for local clients, I focused on understanding methods which allowed for responsive, fluid design, going above and beyond the droll, almost monochromatic approach I see all too often online, and creating something that truly lives. By crafting results which meet the clients need and those of the organic being which is the web, something great is accomplished. ", React.createElement("br", null), React.createElement("br", null), " Prior to my efforts as a .NET Web Developer, I worked in both cybersecurity for a major health technology company and as the manager of a supplement shop, both of which required a fervent amount of study and dedication to their respective topics. No matter where the plan for my life has taken me, I have learned both to take joy in the walk and to embrace the challenge. A firm believer that I am not handed anything which is beyond my grasp or understanding in some necessary capacity, that there is a plan beyond my gaze for my existence, life holds unending blessings as revelations upon my life. All that is needed is to accept them.")));
    }
});

var Portfolio = React.createClass({
    displayName: "Portfolio",

    render: function render() {
        return React.createElement("div", { id: "portfolio", className: "card card-inverse" }, React.createElement("div", { className: "card-block" }, React.createElement("h3", { className: "card-title" }, "Special title treatment"), React.createElement("p", { className: "card-text" }, "A few examples of stuff I've done"), React.createElement("h4", { className: "display-4 text-white text-md-center" }, "FrontEnd Work (Codepen.IO)"), React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-xs-4" }, React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/YWLAkb/image/small.png" })), React.createElement("div", { className: "col-xs-4" }, React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/zKZVoE/image/small.png" })), React.createElement("div", { className: "col-xs-4" }, React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/wWXzpN/image/small.png" }))), React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-xs-4" }, React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/JKLpyz/image/small.png" })), React.createElement("div", { className: "col-xs-4" }, React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/zrqqvw/image/small.png" })), React.createElement("div", { className: "col-xs-4" }, React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/WwOxrV/image/small.png" }))), React.createElement("h4", { className: "display-4 text-white text-md-center" }, "Backend Work"), React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-xs-4" }), React.createElement("div", { className: "col-xs-4" }), React.createElement("div", { className: "col-xs-4" }))));
    }
});

var App = React.createClass({
    displayName: "App",

    render: function render() {
        return React.createElement("container", null, React.createElement(Home, null), React.createElement(About, null), React.createElement(Portfolio, null), React.createElement(Contact, null));
    }
});

var Contact = React.createClass({
    displayName: "Contact",

    render: function render() {
        return React.createElement("div", { id: "contact", className: "card card-inverse" }, React.createElement("div", { className: "card-block" }, React.createElement("h3", { className: "card-title" }, "Contact Me!"), React.createElement("p", { className: "card-text" }, "Might be a contact form... eventually"), React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-xs-6" }, React.createElement("a", { className: "btn btn-primary", target: "_blank", href: "https://www.linkedin.com/in/jacob-johnson-412019a7" }, "LinkedIn")), React.createElement("div", { className: "col-xs-6" }))));
    }
});

ReactDOM.render(React.createElement(Router, null, React.createElement(Route, { path: "/", component: Layout }, React.createElement(IndexRoute, { component: Home }), React.createElement(Route, null, React.createElement(Route, { path: "home", component: Home }), React.createElement(Route, { path: "about", component: About }), React.createElement(Route, { path: "portfolio", component: Portfolio }), React.createElement(Route, { path: "contact", component: Contact })))), document.getElementById('content'));

