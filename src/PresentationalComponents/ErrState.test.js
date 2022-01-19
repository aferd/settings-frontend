import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ErrState } from './ErrState';

it('plain text hack - render', () => {
  const wrapper = shallow(
    <ErrState />,
    <ErrState errorTitle="Testing" errorDescription="This is a test" />,
    <ErrState
      errorTitle="Testing"
      errorDescription="This is a test"
      hrefUrl="http://test.test.com"
      hrefText="testing"
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
