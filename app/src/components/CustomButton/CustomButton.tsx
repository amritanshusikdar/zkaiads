import './CustomButton.css';
import { IonButton, IonIcon } from '@ionic/react';


interface CustomButtonProps {
    icon: string | undefined
    text: string
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
    return <IonButton>
        {props.icon !== undefined && <IonIcon icon={props.icon} />}
        {props.text}
    </IonButton>;
};
