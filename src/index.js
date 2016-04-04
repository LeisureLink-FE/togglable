import { createClass } from 'react';

export default (Untogglable) => createClass({
  getInitialState() {
    return { toggled: this.props.initialToggled }
  },

  handleToggle(e) {
    this.props.onToggle({toggled: !this.state.toggled});
    this.setState({toggled: e.target.checked});
  },

  render() {
    return (
      <label className={this.props.className}>
        <input
            checked={this.state.toggled}
            onChange={this.handleToggle}
            style={{ display: "none" }}
            type="checkbox"
        />
        <Untogglable {...this.props} />
      </label>
    );
  }
})
