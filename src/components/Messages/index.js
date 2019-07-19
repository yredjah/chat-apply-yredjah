// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Image as ImageComponent, Item } from 'semantic-ui-react';


// == Import : local
import './messages.scss';

// == Composant
const Messages = ({ messageChat }) => {
  return (
    <Item.Group link id="msg">
      <Item>
        <Item.Content>
          {messageChat.map(messageChat => (
            <React.Fragment key={messageChat.author}>
              <div className="t-chat">
                <Item.Header id="head">{messageChat.author}</Item.Header>
                <Item.Description id="msg-chat">{messageChat.message}</Item.Description>
              </div>
            </React.Fragment>
          ))}
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

Messages.propTypes = {
  messageChat: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// == Export
export default Messages;
