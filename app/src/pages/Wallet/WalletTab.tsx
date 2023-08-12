import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import YourDigitalWallet from "../../components/YourDigitalWallet"

const WalletTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zkai Ads 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <YourDigitalWallet />
      </IonContent>
    </IonPage>
  )
}

export default WalletTab
