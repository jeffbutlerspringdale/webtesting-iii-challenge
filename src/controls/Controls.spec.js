// Test away!

import React from 'react'

import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'
import Controls from './Controls';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();

    expect(tree).toMatchSnapshot();
  });
    it('button should lock when clicked', () => {
    const { getByText } = render(<Controls locked={ true } closed={ false }/>);
    expect(getByText(/lock gate/i));
    expect(getByText(/close gate/i));
  });
});
