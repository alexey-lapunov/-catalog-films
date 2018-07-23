import React, { Component } from 'react';
import './App.css';
import Poster from './components/Poster/index.js'

class App extends Component {
  state = {
    filmsArray: null
  };

  getData = (url, done) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.response);
        done(json.Search);
      } else {
        console.error(xhr.statusText);
      }
    };

    xhr.onerror = (error) => {
      console.error(error)
    };

    xhr.send();
  };

  componentWillMount() {
    this.getData('http://www.omdbapi.com/?s=Batman&apikey=b20770cd', (movies) => {
      this.setState({filmsArray: movies})
    })
  };

  render() {
    return (
      <div className="App">
        <div className="grid">
          {
            this.state.filmsArray ? this.state.filmsArray.map((item, i) => {
              return(
                <div className="grid__col" key={i}>
                  <Poster img={item.Poster}/>
                </div>
              )
            }) : null
          }
        </div>
      </div>
    );
  }
}

export default App;
