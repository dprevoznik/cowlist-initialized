import React from "react";
import ReactDOM from "react-dom";
import { getCows, postCow, updateCow, deleteCow } from "./request";
import { InputForm } from "./form";
import { UpdateForm } from "./update-form";
import { DeleteForm } from "./delete-form";
import { CurrentCow } from "./current";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputName: '',
      inputDescription: '',
      originalName: '',
      updateName: '',
      updateDescription: '',
      deleteName: '',
      current: {
        name: 'benny',
        description: '"the jet" rodriguez'
      }
    };
    this.updateList = this.updateList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCurrentCow = this.updateCurrentCow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    event.preventDefault();

    let cowObj = { name: this.state.inputName, description: this.state.inputDescription };

    let callback = this.updateList;
    postCow(cowObj)
      .then(result => {
        //console.log('result from posting cow: ', result);
        return getCows();
      })
      .then(({data}) => {
        console.log(data);
        this.updateList(data);
      })
      .catch(err => {
        console.log('error in posting cow: ', err);
      });
  }

  handleUpdate(e) {
    e.preventDefault();
    //create a new request function for update
    let callback = this.updateList;
    updateCow(this.state.originalName, {name: this.state.updateName, description: this.state.updateDescription})
      .then(result => {
        console.log('result of handling update: ', result);
        return getCows();
      })
      .then(({data}) => {
        this.updateList(data);
      })
      .catch(err => {
        console.log('error handling update: ', err);
      });
  }

  handleChange(event) {
    event.preventDefault();
    if (event.target.name === 'inputName') {
      this.setState({ inputName: event.target.value });
    } else if (event.target.name === 'inputDescription') {
      this.setState({ inputDescription: event.target.value });
    } else if (event.target.name === 'originalName') {
      this.setState({ originalName: event.target.value });
    } else if (event.target.name === 'updateName') {
      this.setState({ updateName: event.target.value });
    } else if (event.target.name === 'updateDescription') {
      this.setState({ updateDescription: event.target.value });
    } else if (event.target.name === 'deleteName') {
      this.setState({ deleteName: event.target.value });
    }
  }

  handleDelete(event) {
    event.preventDefault();
    deleteCow(this.state.deleteName)
      .then(result => {
        console.log('result of deleting cow: ', result);
        return getCows();
      })
      .then(({data}) => {
        this.updateList(data);
      })
      .catch(err => {
        console.log('error deleting cow and updating render: ', err);
      });
  }

  componentDidMount() {
    getCows()
      .then(({data}) => {
        this.updateList(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        Welcome To The Farm!
        <br />
        <CurrentCow cow={this.state.current}/>
        <br />
        <InputForm name={this.state.inputName} description={this.state.inputDescription}
                  onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <br />
        <UpdateForm originalName={this.state.originalName} updateName={this.state.updateName} updateDescription={this.state.updateDescription}
                    onChange={this.handleChange} onUpdate={this.handleUpdate}/>
        <br />
        <DeleteForm deleteName={this.state.deleteName} onChange={this.handleChange} handleDelete={this.handleDelete}/>
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
