import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import {getCows} from './request';
import {InputForm} from './form';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [{'name': 'fred'}]
    }
    this.updateList = this.updateList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateList(data) {
      let newList = [...this.state.list, ...data];
      this.setState({list : newList});
  }

  handleSubmit(event) {
    // take in new cow object
    event.preventDefault();

    let cowObj = {
      name: $('#inputName').val(),
      description: $('#inputDescription').val()
    };
    // run post request with this object and use a callback to..
      // call get cows with this.updateList callback

  }
  
  componentDidMount() {
    getCows(this.updateList);
  }

  render() {
    return (
    <div>
      Welcome To The Farm!
      <br />
      <InputForm onSubmit={this.handleSubmit}/>
      <br />
      Meet Our Cows:
      {this.state.list.map(cow => {
        return (<div>{cow.name}</div>)
      })}
    </div>
    )
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);