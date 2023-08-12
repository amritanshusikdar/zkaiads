import {IonCard, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar} from '@ionic/react';

const DDIDTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Zkai Ads 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Zkai Ads 2</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard>DDID</IonCard>
            </IonContent>
        </IonPage>
    );
};

export default DDIDTab;
