import "./SwipeableImageStack.css"
import {IconButton} from "../IconButton/IconButton"
import {checkmark, close} from "ionicons/icons"
import {
    CreateAnimation,
    createGesture,
    Gesture,
    GestureDetail,
    IonCard,
    IonImg,
    useIonViewDidEnter,
} from "@ionic/react"
import {useRef} from "react"

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
        <div>
            <div style={{height: "56vh"}}>
                <div style={{position: "relative"}}>
                    {props.images.map((image, index) => (
                        <SwipeableImage key={index} path={image.path} alt={image.alt}/>
                    ))}
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <IconButton icon={close} text={"Nope"}/>
                <IconButton icon={checkmark} text={"Yep"}/>
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
        <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "5%",
            right: "5%",
        }}>
            <IonCard ref={cardRef} style={{padding: 20}}>
                <IonImg src={props.path} alt={props.alt}/>
            </IonCard>
        </div>
    )
}
