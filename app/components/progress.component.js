import React from 'react';

class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="progress" style={{height: "15px"}}>
        <progress
           className="progress-bar progress-bar-primary"
           value={this.props.position}
           max="1"></progress>
      </div>
    )
  }

}

export default Progress
