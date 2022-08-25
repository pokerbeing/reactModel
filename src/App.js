import React from 'react';
import "./styles.css";

const Child = props => (
    <div id="myModal" className="modal">
        <div className="modal-content">
            <span className="close">&times;</span>
            <p>Enter TODO below:</p>
            <input type="text" id="prompt" size="80"></input>
            <button onClick={props.hideToggle}>
              Close
            </button>
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
            {!this.state.isHidden && <Child hideToggle={() => this.toggleHidden()} />}
            </div>
        );
    }   
}
