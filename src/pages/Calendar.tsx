import {
  IonContent,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const initializeReactGA = () => {
  ReactGA.initialize(`${process.env.REACT_APP_TRACKING_ID}`);
  ReactGA.pageview('/calendar');
};
if (document.location.hostname !== 'localhost') {
  initializeReactGA();
}
console.log(process.env.CALENDLY);
const CalendarPage: React.FunctionComponent = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    if (head !== null) {
      head.appendChild(script);
    }
  }, []);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Calendar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h6 className='ion-text-center'>
          Schedule a meeting by making a selecting below.
        </h6>
        <div id='schedule_form'>
          <div
            onClick={() =>
              ReactGA.event({
                category: 'User',
                action: 'Browsed calendar',
              })
            }
            className='calendly-inline-widget'
            data-url={`https://calendly.com/${process.env.REACT_APP_CALENDLY}`}
            style={{ minWidth: '80vw', height: '90vh' }}
          />
        </div>
      </IonContent>
    </>
  );
};

export default CalendarPage;
