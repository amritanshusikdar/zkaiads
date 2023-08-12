import { IonContent, IonHeader, IonPage } from "@ionic/react"
import React from "react"
import Header from "../components/Header"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function BlankConnect() {
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>

        <ConnectButton />
      </IonContent>
    </IonPage>
  )
}
