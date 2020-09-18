import React, { Component } from 'react'
import Header from './Header.js'
import axios from 'axios'
import './Header.css'
import Main from './Main/Main.js'
import './Main/Main.css'
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
  componentDidMount() {
    console.log('didMount');
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`)
      .then(res => {
        const weather = res.data
        this.setState({ weather: weather })
      })
    axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
      .then(res => {
        const currencyRates = res.data
        this.setState({ currencyRates })
      })
    axios.get(`http://newsapi.org/v2/top-headlines?pageSize=100&category=${this.state.newsCategory}&country=ru&apiKey=7a824e553994401584147a79cbf9129f`)
      .then(res => {
        const ticker = res.data.articles.map((el) => `${(el.title)} ${'||'} `)
        const news = res.data.articles
        this.setState({ ticker: ticker, news, isLoading: true })
      })
  }
  componentDidUpdate(){
    console.log('update');
  }
  handlerOnclickTag = event => {
    if (this.state.newsCategory !== event.target.value) {
      this.setState({ newsCategory: event.target.value })
    }
  }
  getNewsTitle = param => {
    if (param && param.split(' ').length > 1) {
      const arr = param.split(' ')
      const newArr = []
      for (let i = 0; i < 11; i++) {
        newArr.push(arr[i])
      }
      return (newArr.join(' ') + '....')
    }
    if (param && param.split(' ').length < 2) {
      return param
    }
  }
  render() {
    console.log(this.state.newsCategory);
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
            handlerOnclickTag={this.handlerOnclickTag}
          />
        </header>
        <main className='main'>
          {this.state.news.map((el, i) => {
            return (
              <Main
                key={i}
                newsImage={el.urlToImage}
                newsTitle={this.getNewsTitle(el.description)}
              />
            )
          })}
        </main>
      </>
    )
  }
}
export default App
