import React from 'react';
import Box from './box.jsx';

class Hello extends React.Component {
  render() {
    const {fruit} = this.props;
    return <div>
      <h1>Hello, I like:</h1>
      {
        fruit.map((name, index) => <Box name={name} key={index}/>)
      }
    </div>
  }
}

export default Hello;
