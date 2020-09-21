import React, { Component } from 'react'
import Header from './Header.js'
import { Route } from 'react-router-dom'
import { getWeatherAPI, getRatesAPI, getTopNewsAPI, getBusinessNewsAPI, getNewsSearchAPI } from './sys/sysAPI.js'
import './Header.css'
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
      businessNews: [],
      newsCategory: 'general',
      sourceAPI: ''
    }
  }

  async componentDidMount() {
    try {
      const { lat, lon } = this.state
      const [weather, currencyRates, topNews, businessNews] = await Promise.all([
        getWeatherAPI(lat, lon),
        getRatesAPI(),
        getTopNewsAPI(),
        getBusinessNewsAPI(),
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
      const ticker = topNews.data.articles.map((el) => `${(el.title)} ${'||'} `)
      this.setState({ weather: weather.data, currencyRates: currencyRates.data, ticker: ticker, topNews: topNews.data.articles, businessNews: businessNews.data.articles, isLoading: true })
    } catch (e) {
      console.error(e)
    }
  }
  // componentDidUpdate() {
  //   if ("geolocation" in navigator && !this.state.isCurrentLocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       const lat = position.coords.latitude;
  //       const lon = position.coords.longitude;
  //       getWeatherAPI(lat, lon)
  //         .then(res => {
  //           const weather = res.data
  //           this.setState({ weather, isCurrentLocation: true })
  //         })
  //     })
  //   }
  // }

  // handlerOnclickTag = event => {
  //   const newsCategory = event.target.value
  //   if (this.state.newsCategory !== event.target.value) {
  //     getNewsAPI(newsCategory)
  //       .then(res => {
  //         const news = res.data.articles
  //         this.setState({ news, newsCategory, currentLocation: true })
  //       })
  //   }
  // }
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
  render() {
    return this.state.isLoading && (
      <>
        <Route path='/'>
          <Header
            place={this.state.weather.name}
            icon={this.state.weather.weather[0].icon}
            iconDescription={this.state.weather.weather[0].description}
            temperature={this.state.weather.main.temp}
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
