import './MainContainer.css';
import {CustomButton} from "./CustomButton/CustomButton";
import {checkmark, close} from "ionicons/icons";
import {IonImg} from "@ionic/react";

interface ContainerProps { }

const MainContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
        <div style={{padding: 20}}>
            <IonImg src={"assets/ironman.jpg"} alt={"Iron Man"} />
        </div>
        <CustomButton icon={close} text={"Nope"} />
        <CustomButton icon={checkmark} text={"Yep"} />
    </div>
  );
};

export default MainContainer;
