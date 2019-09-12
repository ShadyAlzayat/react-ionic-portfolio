import React from 'react';
import { Redirect, Route, HashRouter } from 'react-router-dom';
import { IonApp, IonPage, IonSplitPane } from '@ionic/react';
import { AppPage } from './declarations';

/* components */
import Menu from './components/Menu';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';

/* icons */
import { home, list, calendar } from 'ionicons/icons';

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

/* annimation */
import './theme/animate.css';

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '#/home',
    icon: home
  },
  {
    title: 'Calendar',
    url: '#/calendar',
    icon: calendar
  },
  {
    title: 'Timeline',
    url: '#/timeline',
    icon: list
  }
  // {
  //   title: 'Projects',
  //   url: '#/projects',
  //   icon: desktop
  // },
];

const App: React.FunctionComponent = () => (
  <IonApp>
    <HashRouter>
      <IonSplitPane contentId='main'>
        <Menu appPages={appPages} />
        <IonPage id='main'>
          <Route path='/home' component={Home} exact={true} />
          <Route path='/timeline' component={Timeline} exact={true} />
          <Route path='/projects' component={Projects} exact={true} />
          <Route path='/calendar' component={Calendar} exact={true} />
          <Route exact path='/' render={() => <Redirect to='/home' />} />
        </IonPage>
      </IonSplitPane>
    </HashRouter>
  </IonApp>
);

export default App;
