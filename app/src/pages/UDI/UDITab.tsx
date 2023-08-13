import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {SwipeableImageStack, SwipeableImageStackProps} from '../../components/SwipeableImageStack/SwipeableImageStack';
import './UDITab.css';
import UniversalDataIncome from "../../components/UniversalDataIncome";
import {useEffect, useState} from "react";

const UDITab: React.FC = () => {
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


    // const [adsList, setAdsList] = useState<SwipeableImageStackProps>({images: []});
    // useEffect(() => {
    //     // fetch("http://localhost:3000/")
    //     //     .then(res => res.json())
    //     //     .then(res => setAdsList(res))
    //
    //     const adsList = {
    //         images: [
    //             {
    //                 path: "assets/sale1.png",
    //                 alt: "sale1",
    //             },
    //             {
    //                 path: "assets/sale2.png",
    //                 alt: "sale2",
    //             },
    //             {
    //                 path: "assets/sale3.png",
    //                 alt: "sale3",
    //             },
    //             {
    //                 path: "assets/sale4.png",
    //                 alt: "sale4",
    //             },
    //             {
    //                 path: "assets/sale5.png",
    //                 alt: "sale5",
    //             },
    //         ],
    //     };
    //
    //     setAdsList(adsList);
    // }, [adsList, adsList.images]);

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
                <SwipeableImageStack images={adsList.images}/>
            </IonContent>
        </IonPage>
    );
};

export default UDITab;
