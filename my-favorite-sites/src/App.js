import React, { Component } from 'react';
import './App.css';
import BookmarkComponent, { getBookmarkNumber} from './BookmarkComponents';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {number: getBookmarkNumber(), bookmarkList: []};
    this.saveCurrent = this.saveCurrent.bind(this);
  }
// Load current bookmarks into state
  loadCurrent(){
    var curBookmarkList = JSON.parse(localStorage.getItem("BookmarkList"));
    return curBookmarkList;
  }
// Save state into local storage
  saveCurrent(){
    var curBookmarkList = JSON.stringify(this.state.bookmarkList);
    localStorage.setItem("BookmarkList",curBookmarkList);
  }

  render(){
    // create bookmark list from state
    let bookmarkList = [];
    for (let i=1; i<= this.state.number;i++){
      bookmarkList.push(<BookmarkComponent link="vnexpress.vn"/>);
    }

    return (
      <div className="App">
        {bookmarkList}
        <span>{this.state.number}</span>
        <div class = "btn btn-info p-2 m-2">Add</div>
        <div class = "btn btn-info p-2 m-2" onClick = {this.saveCurrent}>Save</div>
      </div>
    );
  }
  
}

export default App;

