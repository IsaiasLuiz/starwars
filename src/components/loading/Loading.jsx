import React, {Component} from 'react';
import './Loading.css';

export default class Loading extends Component{
  render(){
    return(
      <div className={this.props.active ? "loading-active" : "loading-disabled"}></div>
    )
  }
};