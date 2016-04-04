import Toggler from './index.js';
import styles from './style.css';
import test from 'tape';
import { shallow } from 'enzyme';
import {createElement} from 'React';

test('<Toggler> shallow testing', t => {

  t.ok(typeof Toggler === 'function', 'it is a function');

  const PTag = () => (<p>Just a P tag.</p>);
  const TogglingP = Toggler(PTag);
  t.ok(TogglingP, 'it returns a component');


  const DefaultTogglingP = shallow(<TogglingP />);
  t.ok( DefaultTogglingP.is('label'), 'it wraps the component in a <label>' );
  t.ok( DefaultTogglingP.contains(<PTag />), 'it contains the component as a child' );
  t.equal( DefaultTogglingP.find('input').prop('type'), 'checkbox', 'it contains a checkbox input by default' );


  const GroupedTogglingP = shallow(<TogglingP groupName="group" />);
  t.equal( GroupedTogglingP.find('input').prop('type'), 'radio', 'it contains a radio input if groupName is passed in' );

  const WithCheckedClass = (shallow(<TogglingP checkedClassName="checked" defaultChecked />));
  t.ok( WithCheckedClass.find('label').hasClass('checked'), 'it applies `checkedClassName` as className to Toggler component' );

  const WithUncheckedClass = (shallow(<TogglingP uncheckedClassName="unchecked" />));
  t.ok( WithUncheckedClass.find('label').hasClass('unchecked'), 'it applies `uncheckedClassName` as className to Toggler component' );

  const WithDefaultchecked = (shallow(<TogglingP defaultChecked />));
  t.ok( WithDefaultchecked.find('input').prop('defaultChecked'), 'it toggles the component `on` when `defaultChecked` prop exists' );

  const WithOnToggle = (shallow(<TogglingP onToggle={(e)=>e} />));
  console.log(WithOnToggle.state());
  WithOnToggle.find('input').simulate('change')
  // t.equal(WithOnToggle.state().checked, true, 'it accepts and executes an `onToggle` handler when the component is toggled' );

  // t.equal("Jared", defaultInst.find(`.${styles.name}`).text(), 'it has default name');
  //   t.equal("1000", defaultInst.find(`.${styles.points}`).text(), 'it has default points');
  //
  //   const customInst = shallow( <MyComponent name="sara" points={2000} /> );
  //   t.equal("sara", customInst.find(`.${styles.name}`).text(), 'it overrides name');
  //   t.equal("2000", customInst.find(`.${styles.points}`).text(), 'it overrides points');
  //
  //
  //   let myval = 0,
  //       incrementer = () => myval++;
  //
  //   const customInst2 = shallow( <MyComponent clickAction={incrementer} /> );
  //   customInst2.simulate('click');
  //   t.equal(myval, 1, 'it properly executes click event');

    t.end();
});
