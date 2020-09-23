import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header.js'
import { Route } from 'react-router-dom'
import { getWeatherAPI, getRatesAPI, getTopNewsAPI, getTopBusinessNewsAPI, getNewsSearchAPI, getTopTechnologyNewsAPI } from './sys/sysAPI.js'
import Main from './Main/Main.js'
let searchValue = ''
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: {},
      isLoading: false,
      isCurrentLocation: false,
      lat: 53.893009,
      lon: 27.567444,
      currencyRates: [],
      ticker: '',
      topNews: [],
      topBusinessNews: [],
      newsCategory: 'general',
      topTechnologyNews: [],
    }
  }

  async componentDidMount() {
    try {
      const { lat, lon } = this.state

      const [getWeather, getCurrencyRates, getTopNews, getTopBusinessNews, getTopTechnologyNews] = await Promise.all([
        getWeatherAPI(lat, lon),
        getRatesAPI(),
        getTopNewsAPI(),
        getTopBusinessNewsAPI(),
        getTopTechnologyNewsAPI()
      ])
      if ("geolocation" in navigator && !this.state.isCurrentLocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          getWeatherAPI(lat, lon)
            .then(res => {
              const weather = res.data
              this.setState({ weather, isCurrentLocation: true })
            })
        })
      }
      const ticker = getTopNews.data.articles.map((el) => `${(el.title)} ${'||'} `)
      const weather = getWeather.data
      const currencyRates = getCurrencyRates.data
      const topNews = getTopNews.data.articles
      const topBusinessNews = getTopBusinessNews.data.articles
      const topTechnologyNews = getTopTechnologyNews.data.articles
      this.setState({ weather, currencyRates, ticker: ticker, topNews, topBusinessNews, topTechnologyNews, isLoading: true })
    } catch (e) {
      console.error(e)
    }
  }
  getSearcValue = (event) => {
    searchValue = event.target.value
  }
  handlerOnclickSearch = () => {
    const request = searchValue.split(' ').join('+')
    getNewsSearchAPI(request)
      .then(res => {
        const news = res.data.articles
        this.setState({ news })
      })
  }
  getNewsCategorysArray = () => {
    const arr = []
    const { topNews, topBusinessNews, topTechnologyNews } = this.state
    arr.push(topNews, topBusinessNews, topTechnologyNews)
    return arr
  }
  render() {
    // console.log();
    return this.state.isLoading && (
      <>
        <Route path='/'>
          <Header
            place={this.state.weather.name}
            icon={this.state.weather.weather[0].icon}
            iconDescription={this.state.weather.weather[0].description}
            temperature={this.state.weather.main.temp}
            tempFeelsLike={this.state.weather.main.feels_like}
            usdRate={this.state.currencyRates[4].Cur_OfficialRate}
            eurRate={this.state.currencyRates[5].Cur_OfficialRate}
            rubRate={this.state.currencyRates[16].Cur_OfficialRate}
            ticker={this.state.ticker}
            onclickTag={this.handlerOnclickTag}
            getSearcValue={this.getSearcValue}
            onclickSearch={this.handlerOnclickSearch}
          />
          <Route exact path='/'>
            <Main
              mainPageContent={this.getNewsCategorysArray()}
              topNews={this.state.topNews}
              businessNews={this.state.businessNews}
            />
          </Route>
        </Route>
        <Route path='/weather'><span>Погода</span></Route>
        <Route path='/rates'><span>Курсы валют</span></Route>
      </>
    )
  }
}
export default App
