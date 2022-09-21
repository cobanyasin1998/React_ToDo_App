"use strict";

var root = document.getElementById("root");
var root2 = document.getElementById("root2");
var root3 = document.getElementById("root3");
var root4 = document.getElementById("root4");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "helloWorld"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit amet."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var product = {
  product_name: "Samsung S10",
  price: 3000,
  desc: null
};

function formatPrice(p) {
  return (p == 0 ? "free" : p) + " TL";
}

function getDescription(desc) {
  if (desc) {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-description"
    }, "desc");
  } else {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-description"
    }, "no desc");
  }
}

var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name :", product.product_name ? product.product_name : "no name"), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "price: ", formatPrice(product.price)), getDescription(product.desc));
var number = 0;

function addOn() {
  number++;
  renderApp();
}

function minusOn() {
  console.log("Minus");
}

function renderApp() {
  var template3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number:", number, /*#__PURE__*/React.createElement("button", {
    id: "btnPlusOne",
    onClick: addOn,
    className: "btnRed"
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    id: "btnMinusOne",
    onClick: function onClick() {
      number--;
      renderApp();
    },
    className: "btnBlue"
  }, "-1")));
  ReactDOM.render(template3, root3);
}

function tick() {
  var element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Time is: ", new Date().toLocaleTimeString()));
  ReactDOM.render(element, root4);
}

tick();
ReactDOM.render(template, root);
ReactDOM.render(template2, root2);
renderApp();
setInterval(tick, 1000);
