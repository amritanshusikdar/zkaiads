import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "./swiper.css"
import {IonButton, IonHeader, IonText, IonTitle} from "@ionic/react";

enum PageState {
  "a",
  "b",
  "c",
}

export default function UniversalDataIncome(props: any) {
  const renderContent = (pageState: PageState) => {
    let content = null

    switch (pageState) {
      case PageState.a:
        content = (
          <IonText>
            Think of all the data you create online as valuable coins you've
            been dropping without realizing.
          </IonText>
        )
        break

      case PageState.b:
        content = (
          <IonText>
            Universal Data Income means collecting those coins you've always
            deserved.
          </IonText>
        )
        break

      case PageState.c:
        content = (
          <div>
            <IonText>Now, we're giving you a bag to collect them.</IonText>
              <br />
            <IonButton onClick={props.onClickHandler}>Start</IonButton>
          </div>
        )
        break
    }

    return content
  }

  return (
    <div style={{ height: "50vh", padding: 16 }}>
      <h1>Universal Data Income</h1>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>{renderContent(PageState.a)}</SwiperSlide>
        <SwiperSlide>{renderContent(PageState.b)}</SwiperSlide>
        <SwiperSlide>{renderContent(PageState.c)}</SwiperSlide>
      </Swiper>
    </div>
  )
}
