import React, { Component } from 'react';
import './App.css';
import BookmarkComponent, { getBookmarkNumber} from './BookmarkComponents';

class App extends Component{
  currentBookmark = [];
  constructor(props){
    super(props);
    this.state = {number: getBookmarkNumber(), bookmarkList: this.getCurrent()};
    this.setCurrent = this.setCurrent.bind(this);
    this.changeCurrent = this.changeCurrent.bind(this);
    this.onListChanged = this.onListChanged.bind(this);
    this.addtoCurrent = this.addtoCurrent.bind(this);
    this.removefromCurrent = this.removefromCurrent.bind(this);
    
    
    this.currentBookmark = this.getCurrent();
  }

// On change bookmark list
  onListChanged(){
    this.setState({bookmarkList: this.currentBookmark}, this.setCurrent);
  }
// Load current bookmarks into state
  getCurrent(){
    var curBookmarkList = JSON.parse(localStorage.getItem("BookmarkList"));
    return curBookmarkList;
  }
// Save state into local storage
  setCurrent(){
    var curBookmarkList = JSON.stringify(this.currentBookmark);
    localStorage.setItem("BookmarkList",curBookmarkList);
  }
// Handle edit or delete bookmark
  changeCurrent(id,newlink){
    this.currentBookmark[id] = newlink;
    this.onListChanged();
  }
  // Remove bookmark
  removefromCurrent(id){
    this.currentBookmark.splice(id,1);
    this.onListChanged();
  }

// Add new item to current bookmark
  addtoCurrent(){
    var newlink = prompt("Enter new link");
    if ((newlink === null) || (newlink === "")) return newlink;
    this.currentBookmark[this.currentBookmark.length] = newlink;
    this.onListChanged();
  }

  render(){
    // create bookmark list from state
    let bookmarkList = [];
    for (let i=0; i<= (this.state.bookmarkList.length-1);i++){
      bookmarkList.push(<BookmarkComponent id={i} link={this.state.bookmarkList[i]} edit={this.changeCurrent} delete={this.removefromCurrent}/>);
    }

    return (
      <div className="App">
        {bookmarkList}
        <span>{this.state.number}</span>
        <div className = "btn btn-info p-2 m-2" onClick = {this.addtoCurrent}>Add</div>
        <div className = "btn btn-info p-2 m-2" onClick = {this.setCurrent}>Save</div>
      </div>
    );
  }
  
}

export default App;

