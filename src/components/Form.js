import React from 'react';
import './Form.css';
//! using ReactHooks to set a STATE
import { useState } from 'react';

export default function Form(props) {
  //?declare useState
  const [text, setText] = useState('Enter you comment here...');

  //todo----onclick event listener of the button------//
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    //?changing the state(using setText)
    setText(newText);
  };

  //todo----onChange event listener of the textarea------//
  const handleOnChange = (event) => {
    //?changing the state(using setText)
    setText(event.target.value);
  };

  return (
    <div className="container form-container">
      <h1 className="form-heading">{props.heading}</h1>
      <div className="form-email">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" placeholder="name@example.com" />
      </div>

      <div className="form-textarea">
        <label htmlFor="text">Leave us a comment</label>
        {/* using useState */}
        <textarea
          id="text"
          cols="60"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <div>
        <button onClick={handelUpClick}>Convert to uppercase</button>
      </div>
    </div>
  );
}
