import React, { Component } from 'react';
import credit from '../utils/credit.js';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credit: false
    }
    this._showCredit = this._showCredit.bind(this);
  }

  _showCredit(){
    if(this.state.credit){
      this.setState({credit: false})
    }else{
      this.setState({credit: true})
    }
  }

  render() {
    return (
      <footer className="footer">
        {!this.state.credit ? <div><p className="legal" onClick={this._showCredit}>Legal</p></div> : <div onClick={this._showCredit}>{credit}</div>}
      </footer>
    )
  }
}

export default Footer;
