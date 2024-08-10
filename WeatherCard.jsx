import React from 'react'
import "./WeatherCard.css"
const WeatherCard = ({data}) => {
  return (
     <main className="main">
  <div className="left">
    <div className="date">
      Thursday, 8 December 2022
    </div>
    <div className="city">
      Agra
    </div>
    <div className="tempreture">
      <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="icon" className="left-img" />
      {data}°
    </div>
  </div>
  <div className="right">
    <div className="city-img">
      <img src="https://e1.pxfuel.com/desktop-wallpaper/124/761/desktop-wallpaper-taj-mahal-agra-india-taj-mahal-at-night-3d-thumbnail.jpg" alt="tajmahal" className="right-img" />
    </div>
  </div>
</main>
  )
}
export default WeatherCard
