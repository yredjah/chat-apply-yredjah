// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Messages from 'src/components/Messages';
import { messageChat, changeInput, changeTextArea, addMessageAction } from 'src/store/reducer';

const mapStateToProps = state => ({
  messageChat: state.messageChat,
  inputValue: state.inputValue,
  textAreaValue: state.textAreaValue,
});

const mapDispatchToProps = dispatch => ({
  changeInputValue: (newInputValue) => {

    dispatch(changeInput(newInputValue));
  },
  changeTextAreaValue: (newTextAreaValue) => {

    dispatch(changeTextArea(newTextAreaValue));
  },
  addMessage: (newInputValue, newTextAreaValue) => {
    dispatch(addMessageAction(newInputValue, newTextAreaValue));
  },
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

// export
export default MessagesContainer;
