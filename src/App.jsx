import { Card } from "./components/Card"


import './styles.css'

export const App = () => {
  return (
    <>
  
      <div className="container-cards">
        <Card imagen="../src/assets/chips.png" />
        <Card imagen="../src/assets/diyuntor.png"/>
        <Card imagen="../src/assets/esp.png"/>
        <Card imagen="../src/assets/pulsadores.png"/>
      </div>
    </>
  )
}



