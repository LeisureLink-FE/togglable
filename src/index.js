import { createClass } from 'react';

export default (Untogglable) => createClass({
  getDefaultProps() {
    return {
      onToggle: ()=>{}
    }
  },

  getInitialState() {
    return { toggled: !!this.props.initialToggled }
  },

  handleToggle() {
    const newToggledState = !this.state.toggled;
    this.setState({toggled: newToggledState});
    this.props.onToggle({toggled: newToggledState});
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
});
