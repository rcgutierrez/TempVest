import React, { Component } from 'react';
import Search from './Search'
import images from '../images/images';

class Header extends Component {
  render(){
    return(
      <div className="header">
          <div className="title">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rcgutierrez/TempVest/tree/master/tempvest">{images.icon}</a>
              <h1 className="App-title">t
              <span style={{color:'#A09ABC'}}>e</span>
              <span style={{color:'#A3CEF1'}}>m</span>
              <span style={{color:'#6096BA'}}>p</span>
              <span style={{color:'#307C82'}}>v</span>
              <span style={{color:'#7CEA9C'}}>e</span>
              <span style={{color:'#F4E04D'}}>s</span>
              <span style={{color:'#EF626C'}}>t</span></h1>
          </div>
          <Search _updateData={this.props._updateData} />
      </div>
    )
  }
}

export default Header;
