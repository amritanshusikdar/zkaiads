import './SwipeableImageStack.css';
import {IconButton} from "../IconButton/IconButton";
import {checkmark, close} from "ionicons/icons";
import {
    CreateAnimation,
    createGesture,
    Gesture,
    GestureDetail,
    IonCard,
    IonImg,
    useIonViewDidEnter
} from "@ionic/react";
import {useRef} from "react";

interface SwipeableImageStackProps {
}

export const SwipeableImageStack: React.FC<SwipeableImageStackProps> = () => {
    return <>
        <div style={{position: "relative"}}>
            <SwipeableImage />
            <SwipeableImage />
        </div>
        <div>
            <IconButton icon={close} text={"Nope"}/>
            <IconButton icon={checkmark} text={"Yep"}/>
        </div>
    </>
}

const SwipeableImage: React.FC<SwipeableImageStackProps> = () => {
    const windowWidth = window.innerWidth;
    const cardRef = useRef<HTMLIonCardElement | null>(null);

    useIonViewDidEnter(() => {
        const cardRefStyle = cardRef.current?.style;
        const gesture: Gesture = createGesture({
            el: cardRef.current!,
            gestureName: "card-swipe",
            onStart: (detail: GestureDetail) => {
                cardRefStyle!.transition = "none";
            },
            onMove: (detail: GestureDetail) => {
                cardRefStyle!.transform = `translateX(${detail.deltaX}px) rotate(${
                    detail.deltaX / 20
                }deg)`;
            },
            onEnd: (detail: GestureDetail) => {
                cardRefStyle!.transition = '0.3s ease-out';

                if (detail.deltaX > windowWidth / 2) {
                    cardRefStyle!.transform = `translateX(${windowWidth * 1.5}px)`;
                } else if (detail.deltaX < -windowWidth / 2) {
                    cardRefStyle!.transform = `translateX(-${windowWidth * 1.5}px)`;
                } else {
                    cardRefStyle!.transform = '';
                }
            },
        });
        gesture.enable();
    })

    return (
        <IonCard style={{
            padding: 20,
            position: "absolute",
            top: 0,
            left: 0,
        }} ref={cardRef}>
            <IonImg src={"assets/ironman.jpg"} alt={"Iron Man"}/>
        </IonCard>
    );
};
