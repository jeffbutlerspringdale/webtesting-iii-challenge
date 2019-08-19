// Test away!

import React from 'react'

import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'
import Display from './Display';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});