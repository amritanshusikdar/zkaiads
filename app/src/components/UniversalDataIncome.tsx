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
  "d",
}

export default function UniversalDataIncome() {
  //   const [pageState, setPageState] = useState(PageState.a)

  const onStart = () => {
    console.log("NOT IMPLEMENTED")
  }

  const renderContent = (pageState: PageState) => {
    let content = null

    switch (pageState) {
      case PageState.a:
        content = (
          <p>
            Think of all the data you create online as valuable coins you've
            been dropping without realizing.
          </p>
        )
        break

      case PageState.b:
        content = (
          <p>
            Universal Data Income means collecting those coins you've always
            deserved.
          </p>
        )
        break

      case PageState.c:
        content = (
          <div>
            <p>Now, we're giving you a bag to collect them.</p>

            <button onClick={onStart}>Start</button>
          </div>
        )
    }

    return content
  }

  return (
    <>
      <h1>Universal Data Income</h1>

      <Swiper>
        <SwiperSlide>{renderContent(PageState.a)}</SwiperSlide>
        <SwiperSlide>{renderContent(PageState.b)}</SwiperSlide>
        <SwiperSlide>{renderContent(PageState.c)}</SwiperSlide>
        <SwiperSlide>{renderContent(PageState.d)}</SwiperSlide>
      </Swiper>
    </>
  )
}

{
  /* <button onClick={() => setPageState(PageState.a)}>
        <IonIcon icon={ellipseOutline} size="large" color="primary"></IonIcon>
      </button>
      <button onClick={() => setPageState(PageState.b)}>
        <IonIcon icon={ellipseOutline} size="large" color="primary"></IonIcon>
      </button>
      <button onClick={() => setPageState(PageState.c)}>
        <IonIcon icon={ellipseOutline} size="large" color="primary"></IonIcon>
      </button> */
}
