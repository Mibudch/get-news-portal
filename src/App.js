import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Header from './Header/Header.js'
import MainContainer from './Main/mainContainer.js'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { getWeatherAPI, getRatesAPI, getNewsSearchAPI, getTopNewsAPI } from './sys/sysAPI.js'
import Footer from './Footer/Footer.js'
let searchValue = ''
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: {},
      isLoading: false,
      isCurrentLocation: false,
      isScrollbackVisible: false,
      lat: 53.893009,
      lon: 27.567444,
      currencyRates: [],
      ticker: '',
      topNews: [],
    }
  }
  async componentDidMount() {
    try {
      const { lat, lon } = this.state
      const [getWeather, getCurrencyRates, getTopNews] = await Promise.all([
        getWeatherAPI(lat, lon),
        getRatesAPI(),
        getTopNewsAPI()
      ])
      window.addEventListener('scroll', () => {
        this.scrollToggle()
      })
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
      this.setState({ weather, currencyRates, ticker: ticker, isLoading: true })
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
  scrollToggle = () => {
    const { isScrollbackVisible } = this.state
    if (isScrollbackVisible && window.pageYOffset < 400) {
      this.setState({ isScrollbackVisible: false })
    }
    if (!isScrollbackVisible && window.pageYOffset > 400) {
      this.setState({ isScrollbackVisible: true })
    }
  }
  handlerScrollBack = () => (window.scrollTo({ top: 0, behavior: 'smooth' }))
  render() {
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
        </Route>
        <Route path='/'><MainContainer /></Route>
        <Route path='/weather'><span>Погода</span></Route>
        <Route path='/rates'><span>Курсы валют</span></Route>
        <Footer path='/' />

        {this.state.isScrollbackVisible && <IoIosArrowDropupCircle className='section__scrollBack' onClick={this.handlerScrollBack} />}
      </>
    )
  }
}
export default withRouter(App)
