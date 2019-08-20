// Test away!

import React from 'react'

import renderer from 'react-test-renderer';
import { render, fireEvent, act } from '@testing-library/react'
import Controls from './Controls';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Controls/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
    it('Opened Gate', () => {
        const { getByText } = render(<Controls/>);
            expect(getByText(/lock gate/i));
            expect(getByText(/close gate/i));
     })
    it('Closed Gate', () => {
        const { getByText } = render(<Controls/>);
        act(() =>{
            fireEvent.click(getByText(/Close Gate/i));
        });
            expect(getByText(/Lock Gate/i));
            expect(getByText(/Close Gate/i));
     })
    it('Lock gate', () => {
        const { getByText } = render(<Controls/>);
        act(() =>{
            fireEvent.click(getByText(/Close Gate/i));
        });
            Controls.props.closed = true;
            Controls.props.locked = false;
                expect(getByText(/unlock gate/i));
                expect(getByText(/open gate/i));
    });
    it('Unlock gate', () => {
        const { getByText } = render(<Controls/>);
            Controls.props.closed = true;
            Controls.props.locked = true;
            act(() =>{
                fireEvent.click(getByText(/unlock Gate/i));
            });
                expect(getByText(/lock gate/i));
                expect(getByText(/open gate/i));
    });
    it('Open gate', () => {
        const { getByText } = render(<Controls/>);
            Controls.props.locked = false;
            Controls.props.closed = true;
            act(() =>{
                fireEvent.click(getByText(/open Gate/i));
            });
                expect(getByText(/close gate/i));
                expect(getByText(/lock gate/i));
  });
});
