var root = document.getElementById("root");

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

var template2 = (
  <div>
    <h2 id="product-name">Samsung S9</h2>
    <p id="product-price">price: 3000Tl</p>
    <p id="product-description">İyi Bir Telefon</p>
  </div>
);

ReactDOM.render(template, root);
