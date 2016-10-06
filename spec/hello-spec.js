"use strict";

import React from "react";
import Hello from "../src/hello.jsx";
import chai from "chai";
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme";
import jsdomGlobal from "jsdom-global";
import spies  from 'chai-spies';

function myAwesomeDebug(wrapper) {
  let html = wrapper.html();
  console.log(html);
  return html
}

jsdomGlobal();
chai.should();
chai.use(spies);
chai.use(chaiEnzyme(myAwesomeDebug));


describe('<Hello />', () => {

  it('renders to html', () => {
    const wrapper = mount(<Hello />);
    wrapper.html().should.equal('<div><input type="checkbox"><!-- react-text: 3 -->not checked<!-- /react-text --></div>');
  });

  it('checks the checkbox', () => {
    const onToggle = chai.spy();
    const wrapper = mount(<Hello onToggle={onToggle}/>);

    var checkbox = wrapper.find('input');
    checkbox.should.not.be.checked();
    checkbox.simulate('change', {target: {checked: true}});
    onToggle.should.have.been.called.once();

    // --------- debug information ---------

    // it prints `false`, I think this is a bug
    console.log(checkbox.get(0).checked);

    // follow is failed, I think it's also a bug
    // AssertionError: expected the node in <Hello /> to be checked <input type="checkbox" checked="checked">
    // checkbox.should.be.checked();
  });

});
