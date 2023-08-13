import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {SwipeableImageStack, SwipeableImageStackProps} from '../../components/SwipeableImageStack/SwipeableImageStack';
import './UDITab.css';
import UniversalDataIncome from "../../components/UniversalDataIncome";
import {useEffect, useState} from "react";

const UDITab: React.FC = () => {
    const [firstRun, setFirstRun] = useState<boolean>(true);

    useEffect(() => {

    }, [firstRun]);

    const adsList = {
        images: [
            {
                path: "assets/sale1.png",
                alt: "sale1",
            },
            {
                path: "assets/sale2.png",
                alt: "sale2",
            },
            {
                path: "assets/sale3.png",
                alt: "sale3",
            },
            {
                path: "assets/sale4.png",
                alt: "sale4",
            },
            {
                path: "assets/sale5.png",
                alt: "sale5",
            },
        ],
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Zkai Ads</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Zkai Ads</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/*<SwipeableImageStack images={adsList.images}/>*/}
                {firstRun &&
                    <div style={{height: "100%"}}>
                        <UniversalDataIncome onClickHandler={() => setFirstRun(false)}/>
                    </div>
                }
                <div style={{display: firstRun ? "none" : ""}}>
                    <SwipeableImageStack images={adsList.images}/>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default UDITab;
