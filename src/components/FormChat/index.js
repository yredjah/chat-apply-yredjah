// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

// == Import : local
import './formchat.scss';

// == Composant
const FormChat = ({ addMessage, inputValue, changeInputValue }) => {

  const submitHandler = (event) => {
    event.preventDefault(); 

    addMessage();
  };

  const changeHandler = (event) => {
    changeInputValue(event.target.value); 
  }; 

  return (
    <Form id="chatroom">
      <h1 id="chat">Chatroom</h1>
      <Form.Field inline onSubmit={submitHandler}>
        <Input onChange={changeHandler} value={inputValue} id="inpt" name="newAuthor" placeholder='anonymous' />
      </Form.Field>
    </Form>
  );
};

FormChat.propTypes = {
  addMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};

export default FormChat;
