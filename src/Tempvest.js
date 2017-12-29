import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import './Tempvest.css';
import _filterArr from './Functions/_filterArr'


class Tempvest extends Component {
  constructor(props){
    super(props);

    let number = Math.round(Math.random());
    this.state = {
      data: null,
      sensitivity: 2,
      formal: false,
      gender: number,
      location: null
    }
    this._updateData = this._updateData.bind(this);
    this._updatePreferences = this._updatePreferences.bind(this);
  }



  _updateData(data, location){
    _filterArr(data);

    this.setState({
      data: data,
      location: location
    })
  }

  _updatePreferences(){
    let g = parseInt(this.state.gender,10) === 0 ? 1 : 0;
    this.setState({
      gender: g
    })
  }

  render() {
    return (
      <div className="TempVest">
        <Header _updateData={this._updateData} location={this.state.location} />
        <Body data={this.state} _updatePreferences={this._updatePreferences} />
        <Footer />
      </div>
    );
  }
}

export default Tempvest;
