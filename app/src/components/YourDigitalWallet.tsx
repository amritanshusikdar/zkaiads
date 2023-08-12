import React, { useState } from "react"
import { ellipseOutline } from "ionicons/icons"
import { IonContent, IonPage, IonIcon } from "@ionic/react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "@ionic/react/css/ionic-swiper.css"

enum PageState {
  "a",
  "b",
  "c",
}

export default function YourDigitalWallet() {
  const [pageState, setPageState] = useState(PageState.a)

  const onStart = () => {
    console.log("NOT IMPLEMENTED")
  }

  const renderContent = () => {
    let content = null

    switch (pageState) {
      case PageState.a:
        content = (
          <p>
            Here, you can stash your earnings securely. Plus, send and receive
            various cryptocurrencies with ease.
          </p>
        )
        break

      case PageState.b:
        content = <p>Think of it as your personal online treasury.</p>
        break

      case PageState.c:
        content = (
          <div>
            <p>
              Imagine it like your bank account, but with a twist: No one has
              the power to block or control it but you.
            </p>

            <button onClick={onStart}>Start</button>
          </div>
        )
    }

    return content
  }

  return (
    <IonPage>
      <IonContent>
        <h1>Your Digital Wallet</h1>

        <Swiper>
          <SwiperSlide>{renderContent()}</SwiperSlide>
          <SwiperSlide>{renderContent()}</SwiperSlide>
          <SwiperSlide>{renderContent()}</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  )
}
