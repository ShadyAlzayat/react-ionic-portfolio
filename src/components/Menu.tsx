import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonButton
} from '@ionic/react';
import { logoLinkedin, logoGithub, mail } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu contentId='main'>
    <IonHeader className='ion-text-center'>
      <IonToolbar>
        <IonAvatar className='profile-photo'>
          <img
            className='profile-photo'
            src={`${process.env.PUBLIC_URL}/assets/profilePhoto.jpg`}
            alt=''
          />
        </IonAvatar>
        <IonTitle color='medium' className='ion-padding-bottom'>
          Shady Alzayat
        </IonTitle>
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
      </IonList>
      <br />

      <IonButton
        onClick={() =>
          window.open('https://www.linkedin.com/in/shadyalzayat/', '_system')
        }
        fill='clear'
        size='small'
      >
        <IonIcon slot='icon-only' icon={logoLinkedin} />
      </IonButton>
      <br />
      <IonButton
        onClick={() =>
          window.open('https://github.com/shadyalzayat', '_system')
        }
        fill='clear'
        size='small'
      >
        <IonIcon slot='icon-only' icon={logoGithub} />
      </IonButton>
      <br />
      <IonButton
        onClick={() => window.open('mailto:emailshady@gmail.com', '_self')}
        fill='clear'
        size='small'
      >
        <IonIcon slot='icon-only' icon={mail} />
      </IonButton>
    </IonContent>
  </IonMenu>
);

export default withRouter(Menu);
