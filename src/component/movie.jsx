import React, { Component } from 'react'
import Axios from 'axios';

export default class movie extends Component {
    state = {
        movieDetails: {}
    }

    async componentDidMount(){
        const { movie } = this.props.location.state;
        const url = "https://api-tutorial4.herokuapp.com/movies?show_id=" + movie.show_id;
  
        Axios.get(url)
          .then(res => {
            const movieDetails = res.data[0];
            this.setState({ movieDetails });
          });
      }

    
    render() {
        const { movieDetails } = this.state;
        
        return (
            <div>
                <h1>{movieDetails.title}</h1>
                <h2>Director: {movieDetails.director}</h2>
                <h3>Date Released: {movieDetails.release_year}</h3>
                <h3>Rating: {movieDetails.rating}</h3>
                <h3>Duration: {movieDetails.duration}</h3>
                <p>Category: {movieDetails.listed_in}</p>
                <p>Cast: {movieDetails.cast}</p>
                <p>Description: {movieDetails.description}</p>
                <p>Country: {movieDetails.country}</p>

            </div>
        )
    }
}
