// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, TextArea, } from 'semantic-ui-react'; 

// == Import : local
import './textchat.scss';

// == Composant
const TextChat = ({ addMessage, textAreaValue, changeTextAreaValue }) => {
  const submitHandler = (event) => {
    event.preventDefault(); 

    addMessage();
  };

  const changeHandler = (event) => {
    changeTextAreaValue(event.target.value); 
  }; 

  return (
    <Form id="chat" onSubmit={submitHandler}>
      <TextArea onChange={changeHandler} value={textAreaValue} id="chat-zone" placeholder="Tappez votre message ici" style={{ minHeight: 100 }} />
      <button className="ui button" type="submit">Send</button>
    </Form>
  );
};

TextChat.propTypes = {
  addMessage: PropTypes.func.isRequired,
  textAreaValue: PropTypes.string.isRequired,
  changeTextAreaValue: PropTypes.func.isRequired,
};

// == Export
export default TextChat;
