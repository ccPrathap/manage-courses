import { expect } from 'chai';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from '../../../src/components/course/CourseForm';

function setup(saving) {
  const props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).to.equal(1);
    expect(wrapper.find('h1').text()).to.equal('Manage Course');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).to.equal('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).to.equal('Saving...');
  });
});
