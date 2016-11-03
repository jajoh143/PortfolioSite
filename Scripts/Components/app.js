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
        return React.createElement(
            "div",
            null,
            React.createElement(Navbar, { items: links }),
            React.createElement(
                "body-container",
                null,
                this.props.children
            )
        );
    }
});

var Navbar = React.createClass({
    displayName: "Navbar",

    generateLink: function generateLink(item) {
        return React.createElement(LinkList, { text: item.text, url: item.url });
    },
    render: function render() {
        var items = this.props.items.map(this.generateLink);
        return React.createElement(
            "nav",
            { className: "navbar bg-faded" },
            React.createElement(
                Link,
                { className: "nav-link navbar-brand", to: "/" },
                "JSharp.Co"
            ),
            React.createElement(
                "ul",
                { className: "nav navbar-nav float-md-right" },
                items
            )
        );
    }
});

var LinkList = React.createClass({
    displayName: "LinkList",

    generateLink: function generateLink() {
        return React.createElement(LinkMaker, { url: this.props.url, text: this.props.text });
    },
    render: function render() {
        var content = this.generateLink();
        return React.createElement(
            "li",
            { className: "nav-item" },
            content
        );
    }
});

var LinkMaker = React.createClass({
    displayName: "LinkMaker",

    render: function render() {
        return React.createElement(
            Link,
            { className: "nav-link", to: this.props.url },
            this.props.text
        );
    }
});

var Home = React.createClass({
    displayName: "Home",

    render: function render() {
        return React.createElement(
            "div",
            { id: "home", className: "card card-inverse" },
            React.createElement(
                "div",
                { className: "card-block text-xs-right" },
                React.createElement("img", { className: "card-image img-fluid rounded float-md-left", src: "/Content/Images/bio.jpg" }),
                React.createElement(
                    "h3",
                    { className: "card-title display-1" },
                    "JSharp.Co"
                ),
                React.createElement(
                    "p",
                    { className: "card-text" },
                    "As knowledgeable as I am punny."
                )
            )
        );
    }
});

var About = React.createClass({
    displayName: "About",

    render: function render() {
        return React.createElement(
            "div",
            { id: "info", className: "card card-inverse" },
            React.createElement(
                "div",
                { className: "card-block" },
                React.createElement(
                    "h3",
                    { className: "card-title" },
                    "A bit about me"
                ),
                React.createElement(
                    "p",
                    { className: "text-white" },
                    "I code stuff. Usually using technology like:",
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "HTML"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "CSS3"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Javascript"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "ASP.NET (MVC / Web API)"
                        )
                    ),
                    "My primary background has been in website and application development, though",
                    React.createElement("br", null),
                    "Powershell Scripting has also been a passion of mine."
                )
            )
        );
    }
});

var Portfolio = React.createClass({
    displayName: "Portfolio",

    render: function render() {
        return React.createElement(
            "div",
            { id: "portfolio", className: "card card-inverse" },
            React.createElement(
                "div",
                { className: "card-block" },
                React.createElement(
                    "h3",
                    { className: "card-title" },
                    "Special title treatment"
                ),
                React.createElement(
                    "p",
                    { className: "card-text" },
                    "A few examples of stuff I've done. Note that this site has been written using React as the Primary Javascript Framework, with Bootstrap 4 used in styling, with SCSS as a preprocessor. The links below lead to my CodePen Projects, while code for this site and some of my other work (Powershell, ASP.NET MVC) can be found at my Github page."
                ),
                React.createElement(
                    "h4",
                    { className: "display-4 text-white text-md-center" },
                    "Examples"
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-4" },
                        React.createElement(
                            "a",
                            { href: "https://codepen.io/oknoblich/pen/YWLAkb" },
                            React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/YWLAkb/image/small.png" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-4" },
                        React.createElement(
                            "a",
                            { href: "https://codepen.io/oknoblich/pen/zKZVoE" },
                            React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/zKZVoE/image/small.png" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-4" },
                        React.createElement(
                            "a",
                            { href: "https://codepen.io/oknoblich/pen/wWXzpN/" },
                            React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/wWXzpN/image/small.png" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-4" },
                        React.createElement(
                            "a",
                            { href: "https://codepen.io/oknoblich/pen/JKLpyz/" },
                            React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/JKLpyz/image/small.png" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-4" },
                        React.createElement(
                            "a",
                            { href: "https://codepen.io/oknoblich/pen/zrqqvw/" },
                            React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/zrqqvw/image/small.png" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-4" },
                        React.createElement(
                            "a",
                            { href: "https://codepen.io/oknoblich/pen/WwOxrV" },
                            React.createElement("img", { className: "img-thumbnail rounded mx-auto", src: "https://codepen.io/oknoblich/pen/WwOxrV/image/small.png" })
                        )
                    )
                )
            )
        );
    }
});

var App = React.createClass({
    displayName: "App",

    render: function render() {
        return React.createElement(
            "container",
            null,
            React.createElement(Home, null),
            React.createElement(About, null),
            React.createElement(Portfolio, null),
            React.createElement(Contact, null)
        );
    }
});

var Contact = React.createClass({
    displayName: "Contact",

    render: function render() {
        return React.createElement(
            "div",
            { id: "contact", className: "card card-inverse" },
            React.createElement(
                "div",
                { className: "card-block" },
                React.createElement(
                    "h3",
                    { className: "card-title" },
                    "Contact Me!"
                ),
                React.createElement(
                    "p",
                    { className: "card-text" },
                    "Might be a contact form... eventually"
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-2" },
                        React.createElement(
                            "a",
                            { className: "btn btn-primary", target: "_blank", href: "https://www.linkedin.com/in/jacob-johnson-412019a7" },
                            "LinkedIn"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-2" },
                        React.createElement(
                            "a",
                            { className: "btn btn-secondary", href: "https://github.com/jajoh143" },
                            "Github"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-2" },
                        React.createElement(
                            "a",
                            { className: "btn btn-info", href: "mailto:jajoh143@gmail.com" },
                            "Email Me"
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(
    Router,
    null,
    React.createElement(
        Route,
        { path: "/", component: Layout },
        React.createElement(IndexRoute, { component: Home }),
        React.createElement(
            Route,
            null,
            React.createElement(Route, { path: "home", component: Home }),
            React.createElement(Route, { path: "about", component: About }),
            React.createElement(Route, { path: "portfolio", component: Portfolio }),
            React.createElement(Route, { path: "contact", component: Contact })
        )
    )
), document.getElementById('content'));

