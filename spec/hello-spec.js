"use strict";

import React from 'react';
import Hello from '../src/hello.jsx';
import chai from 'chai';
import spies from 'chai-spies';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(spies);
chai.use(chaiEnzyme());

describe('<Hello />', () => {

  it('renders to html including inner components', () => {
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']}/>);
    wrapper.html().should.equal("<div><h1>Hello, I like:</h1><div>Box: AAA</div><div>Box: BBB</div></div>");
  });

  it('shows fruit names', () => {
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']}/>);
    // can find text in the component itself
    wrapper.should.contain.text("Hello, I like:");
    // but can't find it in the inner components
    // Notice `should.not`
    wrapper.should.not.contain.text('Box: AAA');
  });

  it('calls onFruitDelete if deletes a fruit', () => {
    const spy = chai.spy();
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']} onDeleteFruit={spy}/>);
    wrapper.find('button[title="delete"]').first().simulate('click');
    // can't interact with inner components
    // Notice `not.have`
    spy.should.not.have.been.called.with('AAA');
  });

});
