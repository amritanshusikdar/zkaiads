import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import {
  SwipeableImageStack,
  SwipeableImageStackProps,
} from "../../components/SwipeableImageStack/SwipeableImageStack"
import "./UDITab.css"
import UniversalDataIncome from "../../components/UniversalDataIncome"
import { useEffect, useState } from "react"
import Header from "../../components/Header"

const UDITab: React.FC = () => {
  const [adsList, setAdsList] = useState<SwipeableImageStackProps>({
    images: [],
  })

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => setAdsList(res))

    console.log({ adsList })
  }, [adsList.images])

  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        {/*<UniversalDataIncome />*/}

        <SwipeableImageStack images={adsList.images} />
      </IonContent>
    </IonPage>
  )
}

export default UDITab
