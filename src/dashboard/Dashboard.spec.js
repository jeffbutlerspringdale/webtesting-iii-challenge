// Test away
import React from 'react'
import { render } from '@testing-library/react'
//import renderer for snapshot
import renderer from 'react-test-renderer'

import Dashboard from './Dashboard'

//test to check that the app will display when called.
describe('<Dashboard />', () => {
  it('should display', () => {
    let load = render(<Dashboard/>)
    
  })
  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})