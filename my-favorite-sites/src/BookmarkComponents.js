import React, {Component} from 'react';

class BookmarkComponent extends Component{
    constructor(props){
      super(props);
      this.edit = this.edit.bind(this);
      this.state = {link: props.link};
    }
  
    edit(){
      var newlink = prompt("Enter new link", this.props.link);
      if ((newlink == null) || (newlink == "")) return newlink;
      this.setState({link: newlink});
    }
  
    render(){
      return (
        <React.Fragment>
          <a class="btn btn-dark p2 m2" href={"//" + this.state.link}>{this.state.link}</a>
          <div class="btn btn-info" onClick={this.edit}> Edit</div>
          <br></br>
        </React.Fragment>
      )
    }
  }
  
  export function getBookmark(){
    return 5;
  }

  export default BookmarkComponent;