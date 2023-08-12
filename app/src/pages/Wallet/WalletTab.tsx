import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import YourDigitalWallet from "../../components/YourDigitalWallet"
import Header from "../../components/Header"

const WalletTab: React.FC = () => {
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <YourDigitalWallet />
      </IonContent>
    </IonPage>
  )
}

export default WalletTab
