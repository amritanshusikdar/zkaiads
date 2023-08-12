import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {SwipeableImageStack} from '../../components/SwipeableImageStack/SwipeableImageStack';
import './UDITab.css';

const UDITab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zkai Ads 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Zkai Ads 1</IonTitle>
          </IonToolbar>
        </IonHeader>
          <SwipeableImageStack />
      </IonContent>
    </IonPage>
  );
};

export default UDITab;
