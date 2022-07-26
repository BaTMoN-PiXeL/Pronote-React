import React from 'react';
import './App.css';
class TextInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text : ""
    }
  }

render(){
  return <div className="container">
          <div className="input">
                    <h3 id="h1">Input</h3>
                    <textarea className="input-text" onChange={(e) => {
                                                                        this.setState({text : e.target.value})
                                                                      }}/>
                </div>
                <div className="output">
                    <h3 id="h2">ProNote</h3>
                    {/* <div className="output-text">{this.state.text}</div> */}<textarea className='output-text' disabled="true" value={this.state.text}/>
                </div>                      
          </div>
}

}
export default TextInput;