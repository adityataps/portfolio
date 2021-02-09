import React, { Component } from 'react'
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/blogposts')
        .then((data) => {
          this.setState({posts: data});
          // console.log(this.state);
          // console.log(this.state.posts);
          // console.log(this.state.posts.data)
          console.log(this.state.posts.data[0].content)
        }).catch((err) => {console.log(err)})
  }

  render() {
    return (
        <div>
          {/*<b> {this.state} </b>*/}
        </div>
    )
  }


}

export default App;