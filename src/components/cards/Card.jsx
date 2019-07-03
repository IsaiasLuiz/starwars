import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './Card.css';

export default class Card extends Component{
  
  render(){
    return(
      <section className="card-body">
        <div className="card-name"><label>{this.props.cardName}</label></div>
        <div className="card-image">
          <img src={this.props.linkImg}/>
        </div>
        <button className="card-btn">
          <Link to={`character/${this.props.id}`}>
          {this.props.textBtn}
          </Link>
        </button>
      </section>
    )
  }
}