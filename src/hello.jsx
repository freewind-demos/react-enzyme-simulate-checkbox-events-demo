import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  render() {
    const {checked} = this.state;
    return <div>
      <input type="checkbox" onChange={()=>this.setState({checked: !checked})}/>
      {
        checked ? "checked" : "not checked"
      }
    </div>
  }

}

export default Hello;
