import "./SwipeableImageStack.css"
import {IconButton} from "../IconButton/IconButton"
import {checkmark, close} from "ionicons/icons"
import {
    createGesture,
    Gesture,
    GestureDetail,
    IonCard,
    IonImg,
    useIonViewDidEnter, useIonViewDidLeave, useIonViewWillLeave,
} from "@ionic/react"
import {useEffect, useRef, useState} from "react"

export interface SwipeableImageStackProps {
    images: SwipeableImageProps[]
}

interface SwipeableImageProps {
    path: string
    alt: string
    callback?: any
}

export const SwipeableImageStack: React.FC<SwipeableImageStackProps> = (
    props
) => {
    const [images, setImages] = useState<SwipeableImageStackProps>(props);

    useEffect(() => {
        console.log(images);
    }, [images]);

    return (
        <div>
            <div style={{height: "56vh"}}>
                <div style={{position: "relative"}}>
                    {images.images.map((image, index) => (
                        <SwipeableImage key={index} path={image.path} alt={image.alt} callback={() => {
                            setImages({images: images.images.slice(0, images.images.length - 1)})
                        }} />
                    ))}
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <IconButton icon={close} text={"Nope"} onClickHandler={
                    () => setImages({ images: images.images.slice(0, images.images.length - 1) })}
                />
                <IconButton icon={checkmark} text={"Yep"} onClickHandler={
                    () => setImages({ images: images.images.slice(0, images.images.length - 1) })}
                />
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
                props.callback();
            },
        })
        gesture.enable();
    });

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
