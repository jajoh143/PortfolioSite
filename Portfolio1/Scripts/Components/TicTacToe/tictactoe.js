"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Square = (function (_React$Component) {
  _inherits(Square, _React$Component);

  function Square() {
    _classCallCheck(this, Square);

    _get(Object.getPrototypeOf(Square.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { className: "square" },
        this.props.value
      );
    }
  }]);

  return Square;
})(React.Component);

var Board = (function (_React$Component2) {
  _inherits(Board, _React$Component2);

  function Board() {
    _classCallCheck(this, Board);

    _get(Object.getPrototypeOf(Board.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(i) {
      return React.createElement(Square, { value: i });
    }
  }, {
    key: "render",
    value: function render() {
      var status = 'Next player: X';
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "status" },
          status
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(0),
          this.renderSquare(1),
          this.renderSquare(2)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(3),
          this.renderSquare(4),
          this.renderSquare(5)
        ),
        React.createElement(
          "div",
          { className: "board-row" },
          this.renderSquare(6),
          this.renderSquare(7),
          this.renderSquare(8)
        )
      );
    }
  }]);

  return Board;
})(React.Component);

var Game = (function (_React$Component3) {
  _inherits(Game, _React$Component3);

  function Game() {
    _classCallCheck(this, Game);

    _get(Object.getPrototypeOf(Game.prototype), "constructor", this).apply(this, arguments);
  }

  // ========================================

  _createClass(Game, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "game" },
        React.createElement(
          "div",
          { className: "game-board" },
          React.createElement(Board, null)
        ),
        React.createElement(
          "div",
          { className: "game-info" },
          React.createElement("div", null),
          React.createElement("ol", null)
        )
      );
    }
  }]);

  return Game;
})(React.Component);

function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3);

    var a = _lines$i[0];
    var b = _lines$i[1];
    var c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
/* status */ /* TODO */

