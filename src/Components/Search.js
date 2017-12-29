import React, { Component } from 'react';
import axios from 'axios';
import openWeatherMap from '../utils/openweathermap';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      location: null,
      data: null,
      query: ""
    }
    this._updateText = this._updateText.bind(this);
    this._weatherSearch = this._weatherSearch.bind(this);
  }

  _weatherSearch(e){
    e.preventDefault();
    this.setState({location: null, data:null})
    axios.get(openWeatherMap[0] + this.state.query + openWeatherMap[1])
      .then((response) => {
        let weather = response.data.data.weather[0].hourly.map((e)=>{
          return [e.time, e.FeelsLikeF, e.windspeedMiles, e.chanceofrain, e.chanceofsnow, e.weatherDesc[0].value, e.FeelsLikeC];
        });
        this.setState({location: response.data.data.request[0].query, data: weather});
        this.props._updateData(weather, this.state.location)
      }).catch(error => {
          this.setState({location: null, data: null})
          console.log(error);
      })

  }

  _updateText(e){
    this.setState({query: e.target.value})
  }

  render(){
    return(
        <form className="weather-search" onSubmit={this._weatherSearch}>
          <input className="search" type="text" autoFocus={true} value={this.state.query} onChange={this._updateText} placeholder="Zip Code, City, etc. and Press Enter"></input>
          {this.state.location ? <p>{this.state.location}</p> : ""}
          <button className="submit" type="submit">What Should I Wear?</button>
        </form>
    )
  }
}

export default Search;
