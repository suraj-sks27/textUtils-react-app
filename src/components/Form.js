import React from 'react';
import './Form.css';
//! using ReactHooks to use a STATE
import { useState } from 'react';

export default function Form(props) {
  //?declare useState
  const [text, setText] = useState('');

  //todo----onclick event listener of the button------//
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    //?changing the state(using setText)
    setText(newText);
  };

  const handelLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handelClearClick = () => {
    let newText = '';
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
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <div className="form-buttons">
        <button onClick={handelUpClick}>Convert to uppercase</button>
        <button onClick={handelLowClick}>Convert to lowercase</button>
        <button onClick={handelClearClick}>Clear text</button>
      </div>

      <div>
        <h2>Your text Summary</h2>
        {/* if text is empty setting word count to 0 && if a character has " " then not counting it as another word */}
        <p>
          Words
          {text === '' || text === ' ' ? '0' : text.split(' ').length - 1} and
          characters {text.length}
        </p>
      </div>

      <div>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : 'Enter something in the textbox above to preview it here'}
        </p>
      </div>
    </div>
  );
}
