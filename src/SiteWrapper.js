import * as React from 'react';

import "./SiteWrapper.css";

class SiteWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div class="container">  
        {this.props.children} 
      </div>
    );
  }
}

export default SiteWrapper;