import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {SwipeableImageStack, SwipeableImageStackProps} from '../../components/SwipeableImageStack/SwipeableImageStack';
import './UDITab.css';
import UniversalDataIncome from "../../components/UniversalDataIncome";

const UDITab: React.FC = () => {
    const adsList: SwipeableImageStackProps = {images: [
            {
                path: "assets/sale1.png",
                alt: "sale1"
            },
            {
                path: "assets/sale2.png",
                alt: "sale2"
            },
            {
                path: "assets/sale3.png",
                alt: "sale3"
            },
            {
                path: "assets/sale4.png",
                alt: "sale4"
            },
            {
                path: "assets/sale5.png",
                alt: "sale5"
            },
        ]};

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Zkai Ads 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Zkai Ads 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/*<UniversalDataIncome />*/}
                <SwipeableImageStack images={adsList.images} />
            </IonContent>
        </IonPage>
    );
};

export default UDITab;
