import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Header from './Header/Header.js'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import {
  getWeatherAPI,
  getRatesAPI,
  getNewsSearchAPI,
  getTopNewsAPI,
  getTopBusinessNewsAPI,
  getTopTechnologyNewsAPI,
  getTopEntertainmentNewsAPI,
  getTopScienceNewsAPI,
  getTopHealthNewsAPI,
  getTopSportsNewsAPI
} from './sys/sysAPI.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'
import SectionCategory from './Main/SectionCategory.js'
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
      topBusinessNews: [],
      topTechnologyNews: [],
      topEntertainmentNews: [],
      topScienceNews: [],
      topHealthNews: [],
      topSportsNews: [],
      categoryContent: []
    }
  }

  async componentDidMount() {
    try {
      const { lat, lon } = this.state
      const scrollComponent = this
      const [getWeather, getCurrencyRates, getTopNews, getTopBusinessNews, getTopTechnologyNews, getTopEntertainmentNews, getTopScienceNews, getTopHealthNews, getTopSportsNews] = await Promise.all([
        getWeatherAPI(lat, lon),
        getRatesAPI(),
        getTopNewsAPI(),
        getTopBusinessNewsAPI(),
        getTopTechnologyNewsAPI(),
        getTopEntertainmentNewsAPI(),
        getTopScienceNewsAPI(),
        getTopHealthNewsAPI(),
        getTopSportsNewsAPI(),
      ])
      window.addEventListener("scroll", function(e) {
        scrollComponent.toggleVisibility()
      });
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
      const topNews = getTopNews.data.articles.map(el => {
        el['category'] = 'Главное'
        return el
      })
      const topBusinessNews = getTopBusinessNews.data.articles.map(el => {
        el['category'] = 'Бизнесс'
        return el
      })
      const topTechnologyNews = getTopTechnologyNews.data.articles.map(el => {
        el['category'] = 'Технологии'
        return el
      })
      const topEntertainmentNews = getTopEntertainmentNews.data.articles.map(el => {
        el['category'] = 'Медиа'
        return el
      })
      const topScienceNews = getTopScienceNews.data.articles.map(el => {
        el['category'] = 'Наука'
        return el
      })
      const topHealthNews = getTopHealthNews.data.articles.map(el => {
        el['category'] = 'Здоровье'
        return el
      })
      const topSportsNews = getTopSportsNews.data.articles.map(el => {
        el['category'] = 'Спорт'
        return el
      })
      this.setState({ weather, currencyRates, ticker: ticker, topNews, topBusinessNews, topTechnologyNews, topEntertainmentNews, topScienceNews, topHealthNews, topSportsNews, isLoading: true })
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
    const { topNews, topBusinessNews, topTechnologyNews, topEntertainmentNews, topScienceNews, topHealthNews, topSportsNews } = this.state
    arr.push(topNews.slice(0, 10), topBusinessNews.slice(0, 10), topTechnologyNews.slice(0, 10), topEntertainmentNews.slice(0, 10), topScienceNews.slice(0, 10), topHealthNews.slice(0, 10), topSportsNews.slice(0, 10))
    return arr
  }
  getRoutedCategory = () => {
    const pathArr = this.props.location.pathname.split('/')
    const category = pathArr[pathArr.length - 1]
    return category.charAt(0).toUpperCase() + category.slice(1)
  }
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({isScrollbackVisible: true})
    } else {
      this.setState({isScrollbackVisible: false})
    }
  }
  handlerScrollBack = () => (window.scrollTo({ top: 0, behavior: 'smooth' }))
  render() {
    console.log('render');
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
            />
          </Route>
          <Route path='/weather'><span>Погода</span></Route>
          <Route path='/rates'><span>Курсы валют</span></Route>
          <Route path='/category/:name'><SectionCategory categoryContent={this.getNewsCategorysArray()} /></Route>
          <Footer path='/' />

          {this.state.isScrollbackVisible ? <IoIosArrowDropupCircle className='section__scrollBack' onClick={this.handlerScrollBack} /> : null}

        </Route>
      </>
    )
  }
}
export default withRouter(App)
