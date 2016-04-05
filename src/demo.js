import { createClass } from 'react';
import Togglable from './index.js';
import demoStyle from './assets/demo.css';

const Untogglable = ({className}) => (<span className={className}>Just a normal p tag.</span>);
const PTag = () => (<span>Click me with your console open.</span>);
const TogglableP = Togglable(PTag);

const P2 = () => (<span>Initially toggled.</span>);
const TogglableP2 = Togglable(P2);

const DrawerTrigger = Togglable( (props) => (<h2 key={Math.random()}>{props.children}</h2>) );
const DrawerContent  = Togglable( ({toggled, children}) => (
  <p
      key={Math.random()}
      style={{
        overflow: 'hidden',
        maxHeight: toggled ? '100vh' : 0
      }}
  >
    {children}
  </p>)
);

const Drawer = createClass({
  getInitialState() {
    return { drawerState: false };
  },

  changeDrawerState({toggled}) {
    this.setState({
      drawerState: toggled
    });
  },

  render() {
    return (
      <div >
        <DrawerTrigger onToggle={this.changeDrawerState}>I'm a drawer. Expand me.</DrawerTrigger>
        <DrawerContent toggled={this.state.drawerState}>Here's the more you wanted to see.</DrawerContent>
      </div>
    );
  }
});

export default (
  <div>
    <h1>Utils Demo</h1>
    <div className="togglerDemo">
      <h2>Toggler</h2>
      <div>
        <Untogglable className={demoStyle.untogglable} />
        <hr />
        <TogglableP
            className={demoStyle.togglable}
            onToggle={(e) => { console.log(e) }}
        />
        <hr />
        <TogglableP2
            className={demoStyle.togglable}
            initialToggled
            onToggle={(e) => { console.log(e) }}
        />
      </div>
    </div>
    <hr />
    <div className="drawerDemo">
      <h1>Implementing a `Drawer` with `Togglable`</h1>
      <pre>
        <code>
          {
`import Togglable from 'toggler';

const DrawerTrigger = Togglable( (props) => (<h2 key={Math.random()}>{props.children}</h2>) );
const DrawerContent  = Togglable( ({toggled, children}) => (
  <p
      key={Math.random()}
      style={{
        overflow: 'hidden',
        maxHeight: toggled ? '100vh' : 0
      }}
  >
    {children}
  </p>)
);

const Drawer = createClass({
  getInitialState() {
    return { drawerState: false };
  },

  changeDrawerState({toggled}) {
    this.setState({
      drawerState: toggled
    });
  },

  render() {
    return (
      <div >
        <DrawerTrigger onToggle={this.changeDrawerState}>
          I'm a drawer. Expand me.
        </DrawerTrigger>
        <DrawerContent toggled={this.state.drawerState}>
          Here's the more you wanted to see.
        </DrawerContent>
      </div>
    );
  }
});`
          }
        </code>
      </pre>
      <Drawer />
    </div>
  </div>
);
