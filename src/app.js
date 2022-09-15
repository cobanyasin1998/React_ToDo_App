"use strict";

var root = document.getElementById("root");
var root2 = document.getElementById("root2");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "helloWorld"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit amet."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var product = {
  product_name: "Samsung S10",
  price: 3000,
  desc: null
};

function formatPrice(p) {
  return p + " TL";
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
}, "name :", product.product_name), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "price: ", formatPrice(product.price)), getDescription(product.desc));
ReactDOM.render(template, root);
ReactDOM.render(template2, root2);
