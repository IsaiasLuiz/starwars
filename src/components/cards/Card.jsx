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
          <Link to={`character/${this.props.id}`} className="card-btn">
          {this.props.textBtn}
          </Link>
      </section>
    )
  }
}