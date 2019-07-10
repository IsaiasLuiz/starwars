import React, {Component} from 'react'
import './Pagination.css'

export default class extends Component{
  render(){
    return(
      <div className="pagination">
        <span className="previous"></span>
        <span className="next"></span>
      </div>
    )
  }
}