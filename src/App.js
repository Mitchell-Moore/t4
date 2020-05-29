import React, { Component } from 'react'
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import 'bootstrap/dist/css/bootstrap.css';
import Movie from "./component/movie";
import { Route, Switch } from "react-router-dom";
import Axios from 'axios';



class App extends Component {
  state = {
    movies: [],
  };

  async componentDidMount(){
    Axios.get(`https://api-tutorial4.herokuapp.com/movies`)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
  }
  
  render() { 
    const {movies} = this.state;
    return ( 
      <React.Fragment>
        <div className="App">
          <div className="App-content">
            <div className= "App-Component">
                <Switch>
                  <Route exact path="/" render={(props) =>
                    <AutoCompleteText items={movies} onChange={this.handleChange}></AutoCompleteText> }>
                  </Route>
                  <Route path="/movie" component={Movie}></Route>
                </Switch>
            </div>
          </div>
        </div>  
    </React.Fragment>);
  }
}
 
export default App;