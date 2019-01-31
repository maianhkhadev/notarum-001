import React from 'react';
import renderer from 'react-test-renderer';
import Page from './Home';

it('renders correctly', () => {
  const tree = renderer.create(<Page />).toJSON();
  expect(tree).toMatchSnapshot();
});
