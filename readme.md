# React Component Template

React stateless component scaffolding for authoring components independent of a project.

## Usage

The Toggler component is a low level purely stateful higher order component. It simply adds a `toggled` state to any component and calls an `onToggle` handler when the state of the toggle changes. This component is the foundation for many common UI patterns such as drawers, accordions, menus, etc.

```
import Togglable from 'toggler';
import SomeComponent from 'someComponent';

const TogglableComponent = Toggler(SomeComponent);

export default TogglableComponent;

```

A simplistic implementation of a drawer.

```
import Togglable from 'toggler';

const DrawerTrigger = Togglable( (props) => (<h1 key={Math.random()}>{props.children}</h1>) );
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

```


## Development

### Features

*   es6 & stage2 support
*   unit testing via tape and enzyme
*   linting via eslint
*   UI testing via webpack-dev-server


### Commands

*   `npm start` to run a dev server to view changes during development (port:8080)
*   `npm test` to run unit tests.
*   `npm run lint` to lint files.
*   `npm run ssr` to view a server-side rendered view of the component (port:8081)


### Authoring

Edit the contents of the [src](src) directory.


### Files

*   [./src/index.js](./src/index.js): main JSX export
*   [./src/style.css](./src/style.css): components main style
*   [./src/test.js](./src/test.js): unit test for the component
*   [./src/demo.js](./src/demo.js): a JSX demo of the component



## Required Loaders

For this component to be consumed and bundled in a project, the project consuming this module must enable the following webpack loaders (or equivalent).

*   babel-loader configured with stage2 & react, and react-require plugins
*   style-loader, css-loader, postcss-loader, postcss-import, postcss-cssnext
*   file-loader



## See Also

*   [Change Log](./docs/changelog.md)
*   [Contributing](./docs/contributing.md)
