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
import Header from "../../components/Header"

const DDIDTab: React.FC = () => {
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <DataBackedDID />
      </IonContent>
    </IonPage>
  )
}

export default DDIDTab
