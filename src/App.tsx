import React from 'react';
import { Redirect, Route, HashRouter } from 'react-router-dom';
import { IonApp, IonPage, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import List from './pages/List';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';
import { home, list, desktop, calendar } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '#/home',
    icon: home
  },
  {
    title: 'List',
    url: '#/list',
    icon: list
  },
  {
    title: 'Projects',
    url: '#/projects',
    icon: desktop
  },
  {
    title: 'Calendar',
    url: '#/calendar',
    icon: calendar
  }
];

const App: React.FunctionComponent = () => (
  <IonApp>
    {/* <IonReactRouter basename={`${process.env.PUBLIC_URL}`}> */}
    <HashRouter>
      <IonSplitPane contentId='main'>
        <Menu appPages={appPages} />
        <IonPage id='main'>
          <Route path='/home' component={Home} exact={true} />
          <Route path='/list' component={List} exact={true} />
          <Route path='/projects' component={Projects} exact={true} />
          <Route path='/calendar' component={Calendar} exact={true} />
          <Route exact path='/' render={() => <Redirect to='/home' />} />
        </IonPage>
      </IonSplitPane>
    </HashRouter>
  </IonApp>
);

export default App;
