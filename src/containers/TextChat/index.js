// imports NPM
import { connect } from 'react-redux';

// imports locaux
import TextChat from 'src/components/TextChat';
import { changeTextArea, addMessageAction } from 'src/store/reducer';

const mapStateToProps = state => ({
  textAreaValue: state.textAreaValue,
});

const mapDispatchToProps = dispatch => ({
  changeTextAreaValue: (newTextAreaValue) => {

    dispatch(changeTextArea(newTextAreaValue));
  },
  addMessage: (newTextAreaValue) => {
    dispatch(addMessageAction(newTextAreaValue));
  },
});

const TextChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TextChat);

// export
export default TextChatContainer;
