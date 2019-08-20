// Test away!
import React from 'react';
//import all the functions you will need from the testing library
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' //<-- extended library to use toBeInTheDocument and ToHaveClass
// import '@testing-library/react/cleanup-after-each' <--deprecated no longer works

import Controls from './Controls'


describe("<Controls />", () => {
  //display
  it('should render lock and close as default', () =>{
    const { getByText } = render(<Controls/>)

    //render the page and look for the text
    getByText(/lock/i) //<-- i allows for the case sensitivity to be disabled
    getByText(/close/i)
  })
  
  //close gate
  it('closes the gate', () => {
    //create a spy with jest
    const spy = jest.fn()
    //render the component
    const {getByText}= render(<Controls locked = {false} closed = {false} toggleClosed = {spy}/>) //this is also the default status so not necessary
    //grab the button 
    const button = getByText(/close/i)
    //fire the click event for the button
    fireEvent.click(button)
    //check if the spy was called when toggleClosed was pressed
    expect(spy).toBeCalled()
  })

  it('checks if the close btn is disabled', () => {
    //create a render with the door closed and locked 
    const {getByText} = render(<Controls locked = {true} closed = {true} />)
    //create a constant for the button
    const closed = getByText(/open/i)
    //and make sure the door cant open
    expect(closed.disabled).toBe(true)
  })

  //lock gate
  it('locks the gate', () => {
  //render the component
  const {getByText, findByText}= render(<Controls locked = {false} closed = {true}/>)
  //grab the button 
  const button = getByText(/lock/i)
  //fire the click event for the button using act to start the async process
  act( () => {
    fireEvent.click(button)
  })
  //waits for the page to load
  findByText(/unlock/i)
  })

  it('checks if the lock btn is disabled', () => {
    //create a render where the door is open and unlocked
    const {getByText} = render(<Controls locked = {false} closed = {false} />)
    //grab the button with the render
    const locked = getByText(/lock/i)
    //check to make sure the lock button is disabled
    expect(locked.disabled).toBe(true)
  })
})