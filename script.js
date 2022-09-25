class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.clearItems = this.clearItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      items: ["item1", "item2"],
    };
  }
  clearItems() {
    this.setState({
      items: [],
    });
  }

  componentDidMount(){
    console.log('Component Oluştu');
  }

componentWillUnmount(){
  console.log('Component Silindi');

}

  componentDidUpdate(prevProps, prevState){
    console.log('Component Güncelleme');
  }




  deleteItem(item) {
    this.setState((prevState) => {
      const arr = prevState.items.filter((i) => {
        return item != i;
      });
      return {
        items:arr
      }
    });
  }

  addItem(item) {
    if (!item) {
      return "Eklemek İstediğiniz Elemanı Giriniz";
    } else if (this.state.items.indexOf(item) > -1) {
      return "Aynı Elemanı Ekleyemezsiniz";
    }
    this.setState((prevState) => {
      return { items: prevState.items.concat(item) };
    });
  }

  render() {
    const app = {
      title: "To Do Application",
      desc: "Lorem Ipsum Dolor.",
      items: ["item1", "item2"],
    };

    return (
      <div>
        <Header2 title="Hello Yasin Çoban" description="25.03.98" />
        <ToDo
          items={this.state.items}
          deleteItem={this.deleteItem}
          clearItems={this.clearItems}
        />
        <Action addItem={this.addItem} />
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
  render() {
    return (
      <div>
        <ul>
          {
            this.props.items.map((item,index)=>
            <TodoItem deleteItem={this.props.deleteItem} key={index} item={item} />
            )
          }
         
        </ul>
        <p>
          <button onClick={this.props.clearItems}>Clear Items</button>
        </p>
      </div>
    );
  }
}
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem() {
    this.props.deleteItem(this.props.item);
  }

  render() {
    return (
      <li>
        {this.props.item}
        <button onClick={this.deleteItem}>X</button>
      </li>
    );
  }
}
class Action extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: "",
    };
  }
  onFormSubmit(e) {
    e.preventDefault();
    const item = e.target.elements.txtItem.value.trim();
    const error = this.props.addItem(item);
    this.setState({
      error: error,
    });
    e.target.elements.txtItem.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="txtItem" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ToDoApp />, document.getElementById("root2"));
