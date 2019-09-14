import React from 'react';

import "./SiteWrapper.css";

class SiteWrapper extends React.Component {
  
  render() {
    return (
      <div class="container">  
        {this.props.children} 
      </div>
    );
  }
}

export default SiteWrapper;