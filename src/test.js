import Togglable from './index.js';
import test from 'tape';
import { shallow } from 'enzyme';

test('<Togglable> shallow testing', t => {

  t.ok(typeof Togglable === 'function', 'it is a function');

  const PTag = () => (<p>{'Just a P tag.'}</p>);
  const TogglingP = Togglable(PTag);
  t.ok(TogglingP, 'it returns a component');


  const DefaultTogglingP = shallow(<TogglingP />);
  // t.ok( DefaultTogglingP.is('label'), 'it wraps the component in a <label>' );

  t.equal( DefaultTogglingP.find('PTag').length, 1, 'it contains the component as a child' );
  // t.equal( DefaultTogglingP.find('input').prop('type'), 'checkbox', 'it contains a checkbox' );

  const WithInitialToggled = (shallow(<TogglingP initialToggled />));
  t.equal( WithInitialToggled.state().toggled, true, 'it has it\'s `toggled` state set to `true` when `initialToggled` prop exists' );

  let onToggleArg;
  const WithOnToggle = (shallow(<TogglingP onToggle={(state)=>onToggleArg = state} />));
  WithOnToggle.find('input').simulate('change');
  t.equal(onToggleArg.constructor, Object, 'the onToggle handler is passed an object.');
  t.ok('toggled' in onToggleArg, 'argument to onToggle has a `toggled` property');
  t.equal(WithOnToggle.state().toggled, true, 'it toggles the `toggled` state when clicked');
  t.equal(onToggleArg.toggled, WithOnToggle.state().toggled, '`toggled` property on onToggle arg reflects current state');
  t.end();
});
