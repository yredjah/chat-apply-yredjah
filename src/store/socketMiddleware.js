import { WEBSOCKET_CONNECT, ADD_MESSAGE, receiveMessage } from './reducer';

let socket;

const socketMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      console.log('do the connexion here');
      socket = window.io('http://localhost:3001');
      socket.on('send_message', (message) => {
        console.log('the back-end send a message', message);
        store.dispatch(receiveMessage(message));
      });
      break;
    case ADD_MESSAGE: {
      const { inputValue, textAreaValue } = store.getState();
      const message = {
        author: inputValue,
        message: textAreaValue,
      };
      console.log('I send the message', message);
      socket.emit('send_message', message);
      next(action);
      break; 
    }
    default:
      next(action);
  }
};

export default socketMiddleware;
