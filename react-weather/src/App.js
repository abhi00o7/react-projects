// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'weather-icons/css/weather-icons.css'
import React from 'react'


const API_KEY = 'fa8631b7b84b9cda60d41c88fac3398a'
export class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      city:undefined, 
      country:undefined,
      icons:undefined,
      main:undefined,
      celsius:undefined,
      tempMax:undefined,
      tempMin:undefined,

    }
    this.getWeather()
  }
  getWeather = async () =>{
    const weatherAPICall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${API_KEY}`)

    const response = await weatherAPICall.json()
    
    console.log(response);
    this.setState({
      city:response.name,
      country: response.sys.country
    })
  }

  render() {
    return (
      <div className="App">
       <Weather city={this.state.city} country={this.state.country}/>
      </div>
    );
  }
}

export default App
