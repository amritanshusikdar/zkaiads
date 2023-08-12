import {IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';

const WalletTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Zkai Ads 3</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Zkai Ads 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard>Wallet here</IonCard>
            </IonContent>
        </IonPage>
    );
};

export default WalletTab;
