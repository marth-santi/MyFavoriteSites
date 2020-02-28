import React, {Component} from 'react';

class BookmarkComponent extends Component{
    constructor(props){
      super(props);
      this.edit = this.edit.bind(this);
      this.delete = this.delete.bind(this);
      this.state = {id: props.id, link: props.link};
    }
  
    edit(){
      var newlink = prompt("Enter new link", this.props.link);
      if ((newlink === null) || (newlink === "")) return newlink;
      this.setState({link: newlink}, () => {this.props.edit(this.state.id, newlink)});
    }

    delete(){
      this.props.delete(this.state.id);
    }
  
    render(){
      return (
        <React.Fragment>
          <span>{this.state.id}</span>
          <a className="btn btn-dark p-2 m-2" href={"//" + this.state.link}>{this.state.link}</a>
          <span className="btn btn-info m-2 p-2" onClick={this.edit}> Edit</span>
          <span className="btn btn-info m-2 p-2" onClick={this.delete}> Delete</span>
          <br></br>
        </React.Fragment>
      )
    }
  }
  
export function getBookmarkNumber(){
    return localStorage.length;
}

export default BookmarkComponent;