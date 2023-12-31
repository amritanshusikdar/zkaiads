import './IconButton.css';
import { IonButton, IonIcon } from '@ionic/react';

interface CustomButtonProps {
    icon: string | undefined
    text: string
    onClickHandler: any
}

export const IconButton: React.FC<CustomButtonProps> = (props) => {
    return <IonButton onClick={props.onClickHandler}>
        {props.icon !== undefined && <IonIcon icon={props.icon} />}
        {props.text}
    </IonButton>;
};
