import React from 'react';
import './QnASection.css';

const QnASection = () => {
  return (
    <section className="container qa-container">
      <h2>Frequently asked question</h2>
      <div>
        <h3>Q: What is the purpose of this app?</h3>
        <p>
          <strong>A:</strong> The SKS Text Manipulator app helps users
          manipulate text in various ways, such as reversing the text or
          capitalizing it.
        </p>
      </div>
      <div>
        <h3>Q: How do I use this app?</h3>
        <p>
          <strong>A:</strong> Follow these steps:
          <ul>
            <li>1 : Enter your desired text in the provided textarea.</li>
            <li>
              2 : Click on one of the buttons: "Reverse Text", "Capitalize
              Text", or "Reset".
            </li>
            <li>
              3 : If you clicked "Reverse Text" or "Capitalize Text", the
              manipulated text will be displayed below the buttons.
            </li>
            <li>
              4 : If you want to start over, click "Reset" to clear the text
              area.
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h3>Q: Can I undo the text manipulation?</h3>
        <p>
          <strong>A:</strong> No, once the text is manipulated using the
          buttons, there is no direct undo feature. However, you can manually
          edit the text in the textarea or click the "Reset" button to clear the
          manipulated text and start over.
        </p>
      </div>
      <div>
        <h3>Q: Can I use this app for any language?</h3>
        <p>
          <strong>A:</strong> Yes, you can use this app to manipulate text in
          any language supported by JavaScript.
        </p>
      </div>
      <div>
        <h3>Q: Is this app case-sensitive when capitalizing text?</h3>
        <p>
          <strong>A:</strong> Yes, the "Capitalize Text" button will convert all
          letters to uppercase. If you want to maintain the original letter
          casing, manually edit the text in the textarea.
        </p>
      </div>
    </section>
  );
};

export default QnASection;
