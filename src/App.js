import React, { Component } from 'react';
import './App.css';
import  GenerateCitation  from  './GenerateCitation';
import  DisplayCitation  from  './DisplayCitation';

const sampleCitation = {
    "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
    "character": "Nelson Muntz",
    "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    "characterDirection" : "Left",
   
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citation: sampleCitation
    };
  }

  getCitation() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          citation:  data[0],
        });
    });
}
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <GenerateCitation selectCitation={() =>  this.getCitation()}  />
        <DisplayCitation  citation={this.state.citation}  />
        </header>
      </div>
    );
  }
}

export default App;
