"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ToDoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(ToDoApp, _React$Component);

  var _super = _createSuper(ToDoApp);

  function ToDoApp() {
    _classCallCheck(this, ToDoApp);

    return _super.apply(this, arguments);
  }

  _createClass(ToDoApp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header2, null), /*#__PURE__*/React.createElement(ToDo, null), /*#__PURE__*/React.createElement(Action, null));
    }
  }]);

  return ToDoApp;
}(React.Component);

var Header = function Header() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello React");
};

var template = /*#__PURE__*/React.createElement(Header, null);
ReactDOM.render(template, document.getElementById("root"));

var Header2 = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header2, _React$Component2);

  var _super2 = _createSuper(Header2);

  function Header2() {
    _classCallCheck(this, Header2);

    return _super2.apply(this, arguments);
  }

  _createClass(Header2, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "To Do Application"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."));
    }
  }]);

  return Header2;
}(React.Component);

var ToDo = /*#__PURE__*/function (_React$Component3) {
  _inherits(ToDo, _React$Component3);

  var _super3 = _createSuper(ToDo);

  function ToDo() {
    _classCallCheck(this, ToDo);

    return _super3.apply(this, arguments);
  }

  _createClass(ToDo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "item1"), /*#__PURE__*/React.createElement("li", null, "item2"), /*#__PURE__*/React.createElement("li", null, "item3"));
    }
  }]);

  return ToDo;
}(React.Component);

var Action = /*#__PURE__*/function (_React$Component4) {
  _inherits(Action, _React$Component4);

  var _super4 = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super4.apply(this, arguments);
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", null, "Clear Items")), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Add Item")));
    }
  }]);

  return Action;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(ToDoApp, null), document.getElementById("root2"));
