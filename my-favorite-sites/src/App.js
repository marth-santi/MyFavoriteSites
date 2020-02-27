import React, { Component } from 'react';
import './App.css';
import BookmarkComponent, {getBookmark} from './BookmarkComponents';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {number: getBookmark(), bookmarkList: []};
  }


  render(){
    let bookmarkList = [];
    for (let i=1; i<= this.state.number;i++){
      bookmarkList.push(<BookmarkComponent link="vnexpress.vn"/>);
    }

    return (
      <div className="App">
        {bookmarkList}
        <span>{this.state.number}</span>
        <div class = "btn btn-info" onClick = {this.saveCurrent}>Save</div>
      </div>
    );
  }
  
}

export default App;

