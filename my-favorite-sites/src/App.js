import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <BookmarkComponent link="vnexpress.net"></BookmarkComponent>
      <BookmarkComponent link="vnexpress.net"></BookmarkComponent>
      <BookmarkComponent link="vnexpress.net"></BookmarkComponent>
    </div>
  );
}

export default App;

class BookmarkComponent extends Component{
  render(){
    return (
      <React.Fragment>
        <a href={"//" + this.props.link}>{this.props.link}</a><br></br>
      </React.Fragment>
    )
  }
}