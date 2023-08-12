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

export default function DataBackedDID() {
  // const [pageState, setPageState] = useState(PageState.a)

  const onStart = () => {
    console.log("NOT IMPLEMENTED")
  }

  const renderContent = (pageState: PageState) => {
    let content = null

    switch (pageState) {
      case PageState.a:
        content = (
          <p>
            Imagine you have a special digital name, created by mixing little
            bits from your online activities.
          </p>
        )
        break

      case PageState.b:
        content = (
          <p>
            This name is unique just like your fingerprint. That's your DDID,
            and it's your online identity without revealing personal secrets.
          </p>
        )
        break

      case PageState.c:
        content = (
          <div>
            <p>
              Imagine a sybil resistant DID without the need to scan your
              eyeball!
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
        <h1>Data-backed DID</h1>

        <Swiper>
          <SwiperSlide>{renderContent(PageState.a)}</SwiperSlide>
          <SwiperSlide>{renderContent(PageState.b)}</SwiperSlide>
          <SwiperSlide>{renderContent(PageState.c)}</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  )
}
