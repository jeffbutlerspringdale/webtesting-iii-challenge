// Test away!

import React from 'react'

import renderer from 'react-test-renderer';
import render from 'react-test-library';
import Controls from './Controls';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('displays defaults as unlocked and closed', () => {
      const tree = render(<Controls />);
  })
});
