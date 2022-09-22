class ToDoApp extends React.Component {
  render() {
    const app = {
      title: "To Do Application",
      desc: "Lorem Ipsum Dolor.",
      items: ["item1", "item2"],
    };

    return (
      <div>
        <Header2 title="Hello Yasin Çoban" description="25.03.98" />
        <ToDo items={app.items} />
        <Action />
      </div>
    );
  }
}

const Header = function (props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
};

const template = <Header title="Hello React" description="Lorem Ipsum" />;
ReactDOM.render(template, document.getElementById("root"));

class Header2 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

class ToDo extends React.Component {

  clearItems(){
    console.log(this);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          <button onClick={this.clearItems}>Clear Items</button>
        </p>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="txtItem" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ToDoApp />, document.getElementById("root2"));
