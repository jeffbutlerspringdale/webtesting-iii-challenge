// Test away!

import React from 'react'

import renderer from 'react-test-renderer';
import { render, fireEvent, contariner } from '@testing-library/react'
import Display from './Display';

describe('<Display />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
    const { getByText, findByText } = render(<Display/>);
  });
    it('Is Opened', () => {
            expect(getByText(/Open/i));
    })
    it('Is Closed', () => {
            expect(getByText(/Closed/i));
    })
    // it('Is Locked', () => {
    //         expect(getByText(/unlock gate/i));
    //         expect(getByText(/open gate/i));
    // })
    // it('Is Unlocked', () => {
    //        expect(findByText(/unlocked/i));
    // })
    // it('Is Opened', () => {
    //     Display.defaultProps.locked ||  Display.defaultProps.closed = true,
    //     className = 'red-led'
    // })
    // it('Is Opened', () => {
    //     Display.defaultProps.locked ||  Display.defaultProps.closed = false
    //     className = 'green-led'
    // })
});