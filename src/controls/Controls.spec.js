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
    it('Opened Gate', () => {
        const { getByText } = render(<Controls/>);
            expect(getByText(/lock gate/i));
            expect(getByText(/close gate/i));
     })
    it('Closed Gate', () => {
        const { getByText } = render(<Controls/>);
         fireEvent.click(getByText(/Close Gate/i),);
            expect(getByText(/Lock Gate/i));
            expect(getByText(/Close Gate/i));
     })
    // it('Closed Gate', () => {
    //     const { getByText } = render(<Controls/>);
    //       getByText('Close Gate'),
    //         new MouseEvent('click', {
    //             locked: false,
    //             closed: true
    //         })
    //         )
    //      fireEvent.click(getByText(/Close Gate/i),);
    //         expect(getByText(/Lock Gate/i));
    //         expect(getByText(/Close Gate/i));
    //  })
    it('Lock gate', () => {
        const { getByText } = render(<Controls/>);
            fireEvent.click(getByText(/close gate/i));
             Controls.props.closed = true;
                expect(getByText(/unlock gate/i));
                expect(getByText(/open gate/i));
    });
    it('Unlock gate', () => {
        const { getByText } = render(<Controls/>);
        Controls.props.closed = true;
        Controls.props.locked = true;
            fireEvent.click(getByText(/unlock gate/i));
                expect(getByText(/lock gate/i));
                expect(getByText(/open gate/i));
    });
    it('Open gate', () => {
        const { getByText } = render(<Controls/>);
        Controls.props.locked = false;
        Controls.props.closed = true;
            fireEvent.click(getByText(/open gate/i));
                expect(getByText(/close gate/i));
                expect(getByText(/lock gate/i));
  });
});
