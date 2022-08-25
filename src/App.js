import React from 'react';
import "./styles.css";

const Child = () => (
<div className='modal'>
      Hello, World!
  </div>
)

export default class Modal extends React.Component {
    constructor(){
        super()
        this.state = {
            isHidden: false,
        }
    }
    
    toggleVisibility() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    
    render() {
        return (
            <div>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button  onClick={() => this.toggleVisibility()}>Modal</button>
            {!this.state.isHidden && <Child />}

            {/* Modal content -- From w3schools.com -- with some modifications by me    
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <p>Enter TODO below:</p>
                        <input type="text" id="prompt" size="80"></input>
                    </div>
                </div> 
                             */}

            </div>
        );
    }   
}
