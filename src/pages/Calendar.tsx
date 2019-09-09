import {
  IonContent,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import React, { useEffect } from 'react';

const CalendarPage: React.FunctionComponent = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    if (head != null) {
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
          Shedule a meeting by making a selecting below.
        </h6>
        <div id='schedule_form'>
          <div
            className='calendly-inline-widget'
            data-url='https://calendly.com/shadyalzayat'
            style={{ minWidth: '80vw', height: '90vh' }}
          />
        </div>
      </IonContent>
    </>
  );
};

export default CalendarPage;
