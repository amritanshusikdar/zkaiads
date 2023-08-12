import "./SwipeableImageStack.css"
import { IconButton } from "../IconButton/IconButton"
import { checkmark, close } from "ionicons/icons"
import {
  CreateAnimation,
  createGesture,
  Gesture,
  GestureDetail,
  IonCard,
  IonImg,
  useIonViewDidEnter,
} from "@ionic/react"
import { useRef } from "react"

export interface SwipeableImageStackProps {
  images: SwipeableImageProps[]
}

interface SwipeableImageProps {
  path: string
  alt: string
}

export const SwipeableImageStack: React.FC<SwipeableImageStackProps> = (
  props
) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          {props.images.map((image, index) => (
            <SwipeableImage key={index} path={image.path} alt={image.alt} />
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          // height: "100%",
          // marginTop: "auto",
          bottom: 200,
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <IconButton icon={close} text={"Nope"} />
        <IconButton icon={checkmark} text={"Yep"} />
      </div>
    </div>
  )
}

const SwipeableImage: React.FC<SwipeableImageProps> = (props) => {
  const windowWidth = window.innerWidth
  const cardRef = useRef<HTMLIonCardElement | null>(null)

  useIonViewDidEnter(() => {
    const cardRefStyle = cardRef.current?.style
    const gesture: Gesture = createGesture({
      el: cardRef.current!,
      gestureName: "card-swipe",
      onStart: (detail: GestureDetail) => {
        cardRefStyle!.transition = "none"
      },
      onMove: (detail: GestureDetail) => {
        cardRefStyle!.transform = `translateX(${detail.deltaX}px) rotate(${
          detail.deltaX / 20
        }deg)`
      },
      onEnd: (detail: GestureDetail) => {
        cardRefStyle!.transition = "0.3s ease-out"

        if (detail.deltaX > windowWidth / 2) {
          cardRefStyle!.transform = `translateX(${windowWidth * 1.5}px)`
        } else if (detail.deltaX < -windowWidth / 2) {
          cardRefStyle!.transform = `translateX(-${windowWidth * 1.5}px)`
        } else {
          cardRefStyle!.transform = ""
        }
      },
    })
    gesture.enable()
  })

  return (
    <IonCard
      style={{
        padding: 20,
        position: "absolute",
        // height: "200px",
        // width: "200px",
        top: 0,
        left: 0,
      }}
      ref={cardRef}
    >
      <IonImg src={props.path} alt={props.alt} />
    </IonCard>
  )
}
