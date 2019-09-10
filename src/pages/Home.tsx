import {
  IonButton,
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
  IonToolbar,
  IonSlides,
  IonSlide
} from '@ionic/react';
import { book, build, download, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Home.css';
import '../theme/animate.css';
import ReactGA from 'react-ga';

const initializeReactGA = () => {
  ReactGA.initialize('UA-147558293-1');
  ReactGA.pageview('/home');
};
initializeReactGA();

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 4000,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  direction: 'vertical'
};

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          {/* <IonTitle className='animated fadeInLeft ion-text-center'>
            Shady Alzayat
          </IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides
          pager={true}
          options={slideOpts}
          className='intro-slides'
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/me_sutro.jpg)`
          }}
        >
          <IonSlide>
            <div className='intro-slides-text-box'>
              <h1 className='intro-slides-text'>Hi!</h1>
              <h1 className='intro-slides-text'>I'm Shady Alzayat</h1>
            </div>
          </IonSlide>
          <IonSlide>
            <div className='intro-slides-text-box'>
              <h1 className='intro-slides-text'>I love shipping software.</h1>
            </div>
          </IonSlide>
          <IonSlide>
            <div className='intro-slides-text-box'>
              <h1 className='intro-slides-text'>Download my resume.</h1>
              <IonButton
                onClick={() =>
                  ReactGA.event({
                    category: 'User',
                    action: 'Resume download'
                  })
                }
                href='/assets/shady_alzayat.pdf'
                download='shady_alzayat.pdf'
                fill='outline'
                color='dark'
              >
                <IonIcon slot='start' icon={download} />
                Resume
              </IonButton>
            </div>
          </IonSlide>
        </IonSlides>
        {/* <IonCard className='welcome-card'>
          <img src={`${process.env.PUBLIC_URL}/assets/shapes.svg`} alt='' />
          <IonCardHeader>
            <IonCardSubtitle>Hi!</IonCardSubtitle>
            <IonCardTitle>I'm Shady Alzayat</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>My name is a noun, not an adjective :)</p>
          </IonCardContent>
        </IonCard> */}

        {/* <IonList lines='none'>
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
        </IonList> */}
      </IonContent>
    </>
  );
};

export default HomePage;
