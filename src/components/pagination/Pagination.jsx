import React, { Component } from 'react';
import './Pagination.css';

export default class extends Component {
  render() {
    return (
      <div className="pagination">
        <button className="previous" onClick={this.props.previous} />
        <button className="next" onClick={this.props.next} />
      </div>
    );
  }
}
