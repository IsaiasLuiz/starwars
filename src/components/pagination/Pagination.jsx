import React, { Component } from 'react';
import './Pagination.css';

export default class extends Component {
  render() {
    const totalPages = this.props.totalPages;
    const currentPage = this.props.currentPage;
    const itensPage = [];
    for (let i = 1; i <= totalPages; i++) {
      itensPage.push(i);
    }
    return (
      <div className="pagination">
        <button className="previous" onClick={this.props.previous} />
        {itensPage.map(iten => (
          <label
            onClick={() => {
              this.props.specificPage(iten);
            }}
            className={currentPage === iten ? 'current-page' : ''}
          />
        ))}
        <button className="next" onClick={this.props.next} />
      </div>
    );
  }
}
