class ToDoApp extends React.Component{
    render(){
        return (
            <div>
            <Header2 />
            <ToDo />
            <Action />
          </div>

            
        );
    }
}






const Header = function () {
  return <h1>Hello React</h1>;
};
const template = <Header />;
ReactDOM.render(template, document.getElementById("root"));

class Header2 extends React.Component {
  render() {
    return (
      <div>
        <h1>To Do Application</h1>
        <div>Lorem, ipsum dolor.</div>
      </div>
    );
  }
}

class ToDo extends React.Component {
  render() {
    return (
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <p>
          <button>Clear Items</button>
        </p>
        <form>
          <input type="text" name="txtItem" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<ToDoApp/>, document.getElementById("root2"));
