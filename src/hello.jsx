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
      <input type="checkbox" defaultChecked={checked} onChange={this._toggle.bind(this)}/>
      {
        checked ? "checked" : "not checked"
      }
    </div>
  }

  _toggle() {
    const {onToggle} = this.props;
    this.setState({checked: !this.state.checked});
    onToggle();
  }
}

export default Hello;
