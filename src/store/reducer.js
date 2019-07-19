import initialMessage from 'src/data';

// state initial
const initialState = {
  messageChat: initialMessage,
  inputValue: '',
  textAreaValue: '',
};

const CHANGE_INPUT = 'CHANGE_INPUT';
const CHANGE_TEXTAREA = 'CHANGE_TEXTAREA';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.inputValue,
      };

    case CHANGE_TEXTAREA:
      return {
        ...state,
        textAreaValue: action.textAreaValue, 
      };

    case ADD_MESSAGE: {
      return {
        ...state,
        inputValue: '',
        textAreaValue: '',
      };
    }

    case RECEIVE_MESSAGE:
      return {
        ...state,
        messageChat: [
          ...state.messageChat,
          action.message,
        ],
      };

    default:
      return state;
  }
};

export const changeInput = (paramInputValue) => {
  return {
    type: CHANGE_INPUT,
    inputValue: paramInputValue,
  };
};

export const changeTextArea = (paramTextAreaValue) => {
  return {
    type: CHANGE_TEXTAREA,
    textAreaValue: paramTextAreaValue,
  };
};

export const addMessageAction = (paramInputValue, paramTextAreaValue) => ({
  type: ADD_MESSAGE,
  inputValue: paramInputValue,
  textAreaValue: paramTextAreaValue,
});

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message,
});

export default reducer;
