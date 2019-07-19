// imports NPM
import { connect } from 'react-redux';

// imports locaux
import FormChat from 'src/components/FormChat';
import { changeInput, addMessageAction } from 'src/store/reducer';

const mapStateToProps = state => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = dispatch => ({
  changeInputValue: (newInputValue) => {

    dispatch(changeInput(newInputValue));
  },
  addMessage: (newInputValue) => {
    dispatch(addMessageAction(newInputValue));
  },
});

const FormChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormChat);

// export
export default FormChatContainer;
