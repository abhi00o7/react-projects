import './App.css'
import Weather from './components/Weather'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import React from 'react'
import Form from './components/form'

const API_KEY = 'fa8631b7b84b9cda60d41c88fac3398a'
export class App extends React.Component {

  constructor() {
    super()
    this.state = {
      city: undefined,
      country: undefined,
      icons: undefined,
      main: undefined,
      celsius: undefined,
      tempMax: undefined,
      tempMin: undefined,
      description: "",
      error: false,

    }
    // this.getWeather()

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }

  }
  get_WeatherIcon(icons, rangeId) {
  switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({
          icon: icons.Thunderstorm
        });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({
          icon: icons.Drizzle
        });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({
          icon: icons.Rain
        });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({
          icon: icons.Snow
        });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({
          icon: icons.Atmosphere
        });
        break;
      case rangeId === 800:
        this.setState({
          icon: icons.Clear
        });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({
          icon: icons.Clouds
        });
        break;
      default:
        this.setState({
          icon: icons.Clouds
        });
    }
  }

  calculateCelsius(temp) {
    return Math.floor(temp - 273.15)
  }
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    // feature update getting weather info without country 
    // const country = e.target.elements.country.value;
    // if (city && country) {
    if (city) {

      const weatherAPICall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      
      
      const response = await weatherAPICall.json()
      
      console.log(response);
      this.setState({
        city:`${response.name},${response.sys.country}`,
        celsius: this.calculateCelsius(response.main.temp),
        tempMax: this.calculateCelsius(response.main.temp_max),
        tempMin: this.calculateCelsius(response.main.temp_min),
        description: response.weather[0].description,
        
      })
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    }
    else {
      this.setState({error:true})
    }
  }

  render() {
    return ( <div className = "App" >
      <Form 
      error = {
        this.state.error
      }  
      loadWeather = {
        this.getWeather
      }
        />
      <
      Weather city = {
        this.state.city
      }
      country = {
        this.state.country
      }
      tempCelsius = {
        this.state.celsius
      }
      tempMax = {
        this.state.tempMax
      }
      tempMin = {
        this.state.tempMin
      }
      description = {
        this.state.description
      }
      weatherIcon = {
        this.state.icon
      }

      /> 
      </div>
    );
  }
}

export default App