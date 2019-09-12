import {
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';

import React from 'react';
import localJson from './Timeline.json';
import ReactGA from 'react-ga';

const initializeReactGA = () => {
  ReactGA.initialize(`${process.env.REACT_APP_TRACKING_ID}`);
  ReactGA.pageview('/timeline');
};
if (document.location.hostname !== 'localhost') {
  initializeReactGA();
}

const TimelinePage: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Timeline</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListItems />
      </IonContent>
    </>
  );
};

const ListItems = () => {
  const items = localJson.experience.map(x => {
    return (
      <>
        <IonCard
          style={{ maxWidth: '900px', margin: 'auto', padding: '1em' }}
          key={x.company}
          className='welcome-card'
        >
          <img
            onClick={() => window.open(x.URL, '_new')}
            style={{
              maxHeight: '5em',
              maxWidth: '12em',
              padding: 15
            }}
            src={x.logo}
            alt=''
          />
          <IonCardHeader>
            <IonCardSubtitle>{x.company}</IonCardSubtitle>
            <IonCardTitle>{x.role}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {x.description.map(y => (
              <p style={{ fontSize: '1em' }}>{y}</p>
            ))}
          </IonCardContent>
        </IonCard>
        <br></br>
      </>
    );
  });

  return <IonList>{items}</IonList>;
};

export default TimelinePage;
