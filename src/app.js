"use strict";

var root = document.getElementById("root");
var app = {
  title: "To do Application",
  description: "lorem ipsum dolor.",
  items: ["item1", "item2"]
};

function onFormSubmit(event) {
  event.preventDefault();
  var item = event.target.elements.txtItem.value;

  if (item) {
    app.items.push(item);
    event.target.elements.txtItem.value = "";
    render();
  }
}

function clearItems() {
  app.items = [];
  render();
}

function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header"
  }, app.title), /*#__PURE__*/React.createElement("div", null, app.description), /*#__PURE__*/React.createElement("ul", null, app.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.toString() + "b" + index.toString()
    }, item);
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: clearItems
  }, "Clear Items")), /*#__PURE__*/React.createElement("p", null, app.items.length), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtItem"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add Item")));
  ReactDOM.render(template, root);
}

render();
