var root = document.getElementById("root");
var root2 = document.getElementById("root2");

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
  return p + " TL";
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
    <h2 id="product-name">name :{product.product_name}</h2>
    <p id="product-price">price: {formatPrice(product.price)}</p>
    {getDescription(product.desc)}
  </div>
);

ReactDOM.render(template, root);
ReactDOM.render(template2, root2);
