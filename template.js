var root = document.getElementById("root");
var root2 = document.getElementById("root2");
var root3 = document.getElementById("root3");
var root4 = document.getElementById("root4");
var template = (
  <div>
    <h1 id="helloWorld">Hello World</h1>
    <div>Lorem ipsum dolor sit amet.</div>
    <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    </ul>
  </div>
);

var product = {
  product_name: "Samsung S10",
  price: 3000,
  desc: null,
};

function formatPrice(p) {
  return (p == 0 ? "free" : p) + " TL";
}
function getDescription(desc) {
  if (desc) {
    return <p id="product-description">desc</p>;
  } else {
    return <p id="product-description">no desc</p>;
  }
}
var template2 = (
  <div>
    <h2 id="product-name">
      name :{product.product_name ? product.product_name : "no name"}
    </h2>
    <p id="product-price">price: {formatPrice(product.price)}</p>
    {getDescription(product.desc)}
  </div>
);

var number = 0;
function addOn() {
  number++;
  renderApp();
}
function minusOn() {
  console.log("Minus");
}


function renderApp(){
  var template3 = (
    <div>
      <h1>
        Number:{number}
        <button id="btnPlusOne" onClick={addOn} className="btnRed">
          +1
        </button>
        <button
          id="btnMinusOne"
          onClick={() => {
            number--;
            renderApp();
          }}
          className="btnBlue"
        >
          -1
        </button>
      </h1>
    </div>
  );
  ReactDOM.render(template3, root3);
}


function tick(){
  var element =(
    <div>
      <h2>
        Time is: {new Date().toLocaleTimeString()}
      </h2>
    </div>
  )

  ReactDOM.render(element,root4)
}


tick();
ReactDOM.render(template, root);
ReactDOM.render(template2, root2);
renderApp();
setInterval(tick,1000);