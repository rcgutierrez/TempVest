import React, { Component } from 'react';
import Card from './Card'

class Body extends Component {
  constructor(props){
    super(props);

    this._update = this._update.bind(this);
  }

  _update(){
    this.props._updatePreferences()
  }

  render(){
    let cardsArr =[];
    if(this.props.data.data){
      cardsArr = this.props.data.data.map((data, index) =>
        <Card key={index} data={data} sensitivity={this.props.data.sensitivity} formal={this.props.data.formal} gender={this.props.data.gender}/>);
    }
    let statement = <div className="statement"><h2>Enter Your Location to See</h2><h2> What to Wear Today</h2></div>;
    return(
      <div className="body">
        {!this.props.data.data ? "" : <button className="gender-change" onClick={this._update}>{parseInt(this.props.data.gender,10)===0 ? 'M' : 'F'}</button>}
        {!this.props.data.data ? statement : <div className="cards-container">{cardsArr}</div>}
      </div>
    )
  }
}

export default Body;
