import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import DataBackedDID from "../../components/DataBackedDID"

const DDIDTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zkai Ads 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <DataBackedDID />
      </IonContent>
    </IonPage>
  )
}

export default DDIDTab
