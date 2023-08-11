import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {SwipeableImageStack} from '../components/SwipeableImageStack/SwipeableImageStack';
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
          <SwipeableImageStack />
      </IonContent>
    </IonPage>
  );
};

export default Home;
