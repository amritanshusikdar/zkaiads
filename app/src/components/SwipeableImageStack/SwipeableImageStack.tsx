import './SwipeableImageStack.css';
import {IconButton} from "../IconButton/IconButton";
import {checkmark, close} from "ionicons/icons";
import {IonImg} from "@ionic/react";

interface ContainerProps { }

export const SwipeableImageStack: React.FC<ContainerProps> = () => {
    return (
        <div id="container">
            <div style={{padding: 20}}>
                <IonImg src={"assets/ironman.jpg"} alt={"Iron Man"} />
            </div>
            <IconButton icon={close} text={"Nope"} />
            <IconButton icon={checkmark} text={"Yep"} />
        </div>
    );
};
