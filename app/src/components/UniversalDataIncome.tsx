import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "./swiper.css"

enum PageState {
  "a",
  "b",
  "c",
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
        break
    }

    return content
  }

  return (
    <div style={{ height: "100px" }}>
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
