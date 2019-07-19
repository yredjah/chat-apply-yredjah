// == Import : npm
import React from 'react';

// == Import : local
import FormChat from 'src/containers/FormChat';
import Messages from 'src/containers/Messages';
import TextChat from 'src/containers/TextChat';


import './app.scss';

// == Composant

const App = () => (
  <div id="app">
    <FormChat />
    <Messages />
    <TextChat />
  </div>
);
// == Export
export default App;
