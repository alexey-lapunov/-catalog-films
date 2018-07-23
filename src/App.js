import React, { Component } from 'react';
import './App.css';
//import Poster from 'components/Poster'

class App extends Component {
  state = {
    posterArray: []
  };

  getData = (url, done) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.response);
        done(json.Search);
        //console.log(json);
      } else {
        console.error(xhr.statusText);
      }
    };

    xhr.onerror = (error) => {
      console.error(error)
    };

    xhr.send();
  };

  componentDidMount() {
    let posts = [];

    this.getData('http://www.omdbapi.com/?s=Batman&apikey=b20770cd', (movies) => {
      movies.map((item)=> {
        return(
          posts.push(item.Poster)
        )
      })
    })
  };

  render() {
    return (
      <div className="App">
        {
          this.state.posterArray.map((i, item) => {
            return(
              <img src={item} alt=""/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
