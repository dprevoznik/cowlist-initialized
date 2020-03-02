import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { getCows, postCow } from "./request";
import { InputForm } from "./form";
import { CurrentCow } from "./current";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      current: {
        name: 'benny',
        description: 'rodriguez'
      }
    };
    this.updateList = this.updateList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCurrentCow = this.updateCurrentCow.bind(this);
  }

  updateList(data) {
    let newList = [...data];
    this.setState({ list: newList });
  }

  updateCurrentCow(event) {
    // // based on cow clicked
    let name = event.currentTarget.innerHTML;
    let description = event.currentTarget.dataset.description;
    // // set state on current      
    this.setState({
      current : {
        name: name,
        description: description
      }
    });
  }

  handleSubmit(event) {
    // take in new cow object
    event.preventDefault();

    let cowObj = { name: $("#inputName").val(), description: $("#inputDescription").val() };

    let callback = this.updateList;
    postCow(cowObj, function() {
      getCows(callback);
    });
  }

  componentDidMount() {
    getCows(this.updateList);
  }

  render() {
    return (
      <div>
        Welcome To The Farm!
        <br />
        <CurrentCow cow={this.state.current}/>
        <br />
        <InputForm onSubmit={this.handleSubmit} />
        <br />
        Meet Our Cows:
        {this.state.list.map(cow => {
          return <div data-description={cow.description} onClick={this.updateCurrentCow}>{cow.name}</div>;
        })}
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
