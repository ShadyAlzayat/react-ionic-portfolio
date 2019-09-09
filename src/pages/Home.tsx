import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Home.css';

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      {/* <IonHeader> */}
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        {/* <IonTitle>Shady Alzayat</IonTitle> */}
      </IonToolbar>
      {/* </IonHeader> */}
      <IonContent>
        <IonCard className='welcome-card'>
          <img src={`${process.env.PUBLIC_URL}/assets/shapes.svg`} alt='' />
          <IonCardHeader>
            <IonCardSubtitle>Hi!</IonCardSubtitle>
            <IonCardTitle>I'm Shady Alzayat</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>My name is a noun, not an adjective :)</p>
          </IonCardContent>
        </IonCard>

        <IonList lines='none'>
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href='https://ionicframework.com/docs/' target='_blank'>
            <IonIcon slot='start' color='medium' icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem
            href='https://ionicframework.com/docs/building/scaffolding'
            target='_blank'
          >
            <IonIcon slot='start' color='medium' icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem
            href='https://ionicframework.com/docs/layout/structure'
            target='_blank'
          >
            <IonIcon slot='start' color='medium' icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem
            href='https://ionicframework.com/docs/theming/basics'
            target='_blank'
          >
            <IonIcon slot='start' color='medium' icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default HomePage;
