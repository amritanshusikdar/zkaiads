import { IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import React from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Header({ title = "Zkai Ads 1" }) {
  return (
    <IonHeader>
      <IonToolbar>
        <div
          style={{
            display: "flex",
          }}
        >
          <IonTitle>{title}</IonTitle>
          <div style={{ marginRight: 20 }}>
            <ConnectButton />
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  )
}
