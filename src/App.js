import React, { Component } from 'react'
import Header from './Header.js'
import { getWeatherAPI, getRatesAPI, getNewsAPI, getNewsSearchAPI } from './sys/sysAPI.js'
import './Header.css'
import Main from './Main/Main.js'
import './Main/Main.css'
let searchValue = ''
class App extends Component {
  constructor(props) {
    console.log('constructor');
    super(props)
    this.state = {
      weather: {},
      isLoading: false,
      lat: 53.893009,
      lon: 27.567444,
      currencyRates: [],
      ticker: '',
      news: [],
      newsCategory: 'general'
    }
  }
  async componentDidMount() {
    try {
      const { lat, lon, newsCategory } = this.state
      const [weather, currencyRates, news] = await Promise.all([
        getWeatherAPI(lat, lon),
        getRatesAPI(),
        getNewsAPI(newsCategory)
      ])
      const ticker = news.data.articles.map((el) => `${(el.title)} ${'||'} `)
      this.setState({ weather: weather.data, currencyRates: currencyRates.data, ticker: ticker, news: news.data.articles, isLoading: true })
    } catch (e) {
      console.error(e)
    }
  }
  handlerOnclickTag = event => {
    const newsCategory = event.target.value
    if (this.state.newsCategory !== event.target.value) {
      getNewsAPI(newsCategory)
        .then(res => {
          const news = res.data.articles
          this.setState({ news, newsCategory })
        })
    }
  }
  getSearcValue = (event) => {
    searchValue = event.target.value
    console.log(searchValue);
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
    console.log('render', this.state.news);
    return this.state.isLoading && (
      <>
        <header>
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
        </header>
        <main className='main'>
          {this.state.news.map((el, i) => {
            return (
              <Main
                key={i}
                newsImage={el.urlToImage}
                newsTitle={el.title}
              />
            )
          })}
        </main>
      </>
    )
  }
}
export default App
