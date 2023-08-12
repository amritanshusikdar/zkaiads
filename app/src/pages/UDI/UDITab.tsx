import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import UniversalDataIncome from "../../components/UniversalDataIncome"
import "./UDITab.css"

const UDITab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zkai Ads 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <UniversalDataIncome />
      </IonContent>
    </IonPage>
  )
}

export default UDITab
