import React, { Component } from 'react';

class NotFound extends Component {
  componentDidMount() {
    document.title = 'Error 404';
  }
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          <h2>Page not found</h2>
          <strong>The requested page does not exist.</strong>
        </div>
      </div>
    );
  }
}

export default NotFound;
