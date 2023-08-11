import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MainContainer from '../components/MainContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zkai Ads</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Zkai Ads</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MainContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
