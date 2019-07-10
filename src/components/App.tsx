import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from 'components/molecules/Header';
import TopList from 'components/pages/TopList';

// import postsStore from './stores/postsStore';

import logo from '@img/logo.svg';

const stores = {
  postsStore;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider {...stores}>
        <HashRouter>
          <Header />
          <Switch>
            <Route path="/list" component={TopList} />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
};

export default App;
