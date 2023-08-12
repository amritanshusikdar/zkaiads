import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { SwipeableImageStack } from "../../components/SwipeableImageStack/SwipeableImageStack"
import "./UDITab.css"
import UniversalDataIncome from "../../components/UniversalDataIncome"

const UDITab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zkai Ads 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <SwipeableImageStack /> */}

        <UniversalDataIncome />
      </IonContent>
    </IonPage>
  )
}

export default UDITab
