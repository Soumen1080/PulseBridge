import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import DevicePairing from './components/DevicePairing';
import ContentSharing from './components/ContentSharing';
import PopupNotification from './components/PopupNotification';
import Messaging from './components/Messaging';

const App = () => {
  return (
    <Router>
      <div>
        <PopupNotification />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chat" component={Chat} />
          <Route path="/device-pairing" component={DevicePairing} />
          <Route path="/content-sharing" component={ContentSharing} />
          <Route path="/messaging" component={Messaging} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;