import React from 'react';

class Login extends React.Component{
  handleRenderItem(item, isHighlighted){
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: '#4faef7',
        padding: '2px 6px',
        cursor: 'default'
      }
    };
  }
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login
