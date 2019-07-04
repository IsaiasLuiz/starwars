import React, {Component} from 'react'
import './Pagination.css'

export default class extends Component{
  render(){
    return(
      <div className="pagination">
        <button>Previous</button>
        
        <button>Next</button>
      </div>
    )
  }
}