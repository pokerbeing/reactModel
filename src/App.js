import React from 'react';
import "./styles.css";

const Child = props => (
    <div id="myModal" className="modal">
        <div className="modal-content">
            <span className="close" onClick={props.hideToggle}>&times;</span>
            <p>Enter TODO below:</p>
            {<InputForm />}
        </div>
    </div> 
)

export default class Modal extends React.Component {
    constructor(){
        super()
        this.state = {
            isHidden: true,
        }
    }
    
    toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
    
    render() {
        return (
            <div>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={() => this.toggleHidden()} >
              Click to show modal
            </button>
            {!this.state.isHidden && <Child hideToggle={() => this.toggleHidden()} /> }
            </div>
        );
    }   
}

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
         <input type="text" size="80" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}