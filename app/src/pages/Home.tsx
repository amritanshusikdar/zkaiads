import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {CustomButton} from "../components/CustomButton/CustomButton";
import {checkmark, close} from "ionicons/icons"

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
        <ExploreContainer />
          <CustomButton icon={close} text={"Nope"} />
          <CustomButton icon={checkmark} text={"Yep"} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
