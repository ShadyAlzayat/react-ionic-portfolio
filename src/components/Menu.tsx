import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonToolbar,
  IonAvatar,
  IonButton,
  IonText,
  IonTitle,
  IonCol,
  IonRow,
  IonGrid
} from '@ionic/react';
import { logoLinkedin, logoGithub, mail, download } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';
import ReactGA from 'react-ga';

import './Menu.css';

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu contentId='main'>
    <IonHeader className='ion-text-center'>
      <IonToolbar>
        <IonAvatar className='profile-photo-avatar'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/profilePhoto.jpg`}
            alt=''
          />
        </IonAvatar>
        <IonTitle className='animated fadeInLeft ion-hide-md-down'>
          Shady Alzayat
        </IonTitle>

        <h3 className='ion-hide-md-up' style={{ margin: 0 }}>
          Shady Alzayat
        </h3>
        <IonText color='medium'>
          <p
            className='animated zoomIn'
            style={{ fontSize: '.7em', margin: 0, paddingBottom: '.5em' }}
          >
            Software Engineer
          </p>
        </IonText>
      </IonToolbar>
    </IonHeader>
    <IonContent className='ion-text-center'>
      <IonList>
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle
              className='ion-text-center'
              key={index}
              autoHide={false}
            >
              <IonItem href={appPage.url}>
                <IonIcon slot='start' icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
        <IonMenuToggle autoHide={false}>
          <IonItem
            onClick={() =>
              ReactGA.event({
                category: 'User',
                action: 'Resume download'
              })
            }
            href='/assets/shady_alzayat.pdf'
            download='shady_alzayat.pdf'
          >
            <IonIcon slot='start' icon={download} />
            <IonLabel>Resume</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
      <IonGrid className='menu-grid'>
        <IonRow className='ion-align-items-center'>
          <IonCol>
            <IonButton
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/shadyalzayat/',
                  '_system'
                )
              }
              fill='clear'
              color='medium'
            >
              <IonIcon slot='icon-only' icon={logoLinkedin} />
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton
              onClick={() =>
                window.open('https://github.com/shadyalzayat', '_system')
              }
              fill='clear'
              color='medium'
            >
              <IonIcon slot='icon-only' icon={logoGithub} />
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton
              onClick={() =>
                window.open('mailto:emailshady@gmail.com', '_self')
              }
              fill='clear'
              color='medium'
            >
              <IonIcon slot='icon-only' icon={mail} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonMenu>
);

export default withRouter(Menu);
