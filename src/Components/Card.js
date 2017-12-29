import React, { Component } from 'react';
import _formatTime from '../Functions/_formatTime';
import _getWeatherInfo from '../Functions/_getWeatherInfo';
import _generateImages from '../Functions/_generateImages';
import _getColor from '../Functions/_getColor';

class Card extends Component {
  constructor(props){
    super(props);

    let time = _formatTime(this.props.data[0]);

    this.state = {
      time: time,
      temp: this.props.data[1],
      wind: this.props.data[2],
      rainProb: this.props.data[3],
      snowProb: this.props.data[4],
      desc: this.props.data[5],
      celc: this.props.data[6]
    }
  }

  componentWillReceiveProps(newProps){
    let time = _formatTime(this.props.data[0]);
    this.setState({
      time: time,
      temp: newProps.data[1],
      wind: newProps.data[2],
      rainProb: newProps.data[3],
      snowProb: newProps.data[4],
      desc: newProps.data[5],
      celc: newProps.data[6]
    })
  }



  render(){
    let workingData = _getWeatherInfo(this.props.data),
     card = _generateImages(workingData, this.props),
     color = _getColor(workingData);
    return (
      <div className="card" style={{background:color}}>
        <div className="images">{card[0]}{card[1]}</div>
        <ul>
          <li>From {this.state.time}</li>
          <li>Description: {this.state.desc}</li>
          <li>Temp: {this.state.temp}°<sup> F</sup> / {this.state.celc}°<sup> C</sup></li>
          <li>Wind: {this.state.wind} mph</li>
          {this.state.rainProb > 0 && (workingData.rain || this.state.rainProb >= 25) ? <li>Rain Probability: {this.state.rainProb}%</li> : ""}
          {this.state.snowProb > 0 && (workingData.snow || this.state.snowProb >= 25) ? <li>Snow Probability: {this.state.snowProb}%</li> : ""}
        </ul>
      </div>
    )
  }
}

export default Card;
