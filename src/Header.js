import React, { Component } from 'react'
import axios from 'axios'
import './Header.css'
import Logo from './Header/Logo.js'
import Finder from './Header/Finder.js'
import WeatherСurrency from './Header/WeatherСurrency.js'
import Ticker from './Header/Ticker.js'
import TagWrapper from './Header/TagWrapper.js'
import Main from './Main/Main.js'
import './Main/Main.css'
import { tagArray } from './Header/TagArray.js'
class Header extends Component {
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
            handlerCategory: ''
        }
    }
    componentDidMount() {
        console.log('didMount');
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`)
            .then(res => {
                const weather = res.data
                this.setState({ weather })
            })
        axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
            .then(res => {
                const currencyRates = res.data
                this.setState({ currencyRates })
            })
        axios.get(`http://newsapi.org/v2/top-headlines?pageSize=100&category=general&country=ru&apiKey=7a824e553994401584147a79cbf9129f`)
            .then(res => {
                const ticker = res.data.articles.map((el) => `${(el.title)} ${'||'} `)
                const news = res.data.articles
                this.setState({ ticker: ticker, news, isLoading: true })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('didUpdate')
        navigator.geolocation.getCurrentPosition(position => {
            const updLat = position.coords.latitude
            const updLon = position.coords.longitude
            if (prevState.lon !== updLon && prevState.lat !== updLat) {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${updLat}&lon=${updLon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`)
                    .then(res => {
                        const weather = res.data
                        this.setState({ weather, lat: updLat, lon: updLon })
                    })
            }
        })
        if (prevState.handlerCategory !== this.state.handlerCategory) {
            axios.get(`http://newsapi.org/v2/top-headlines?pageSize=100&category=${this.state.handlerCategory}&country=ru&apiKey=7a824e553994401584147a79cbf9129f`)
                .then(res => {
                    const news = res.data.articles
                    this.setState({ news })
                })
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
        if(param && param.split(' ').length < 2){
            return param
        }
    }
    handlerOnClick(props) {
        this.setState({ handlerCategory: props })
    }
    render() {
        console.log('render');
        return this.state.isLoading && (
            <>
                <header>
                    <div className='header'>
                        <div className='header__container header_flex'>
                            <Logo />
                            <Finder />
                            <WeatherСurrency
                                place={this.state.weather.name}
                                icon={this.state.weather.weather[0].icon}
                                iconDescription={this.state.weather.weather[0].description}
                                temperature={this.state.weather.main.temp}
                                usdRate={this.state.currencyRates[4].Cur_OfficialRate}
                                eurRate={this.state.currencyRates[5].Cur_OfficialRate}
                                rubRate={this.state.currencyRates[16].Cur_OfficialRate}
                            />
                        </div>
                        <Ticker
                            ticker={this.state.ticker}
                        />
                        <nav className='tagWrapper'>
                            {tagArray.map((el, i) => {
                                return (
                                    <TagWrapper
                                        key={i}
                                        tagName={el.tagName}
                                        onClick={this.handlerOnClick.bind(this, el.category)}
                                    />
                                )
                            })}
                        </nav>
                    </div>

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
export default Header

// циклы, правильное использование, очень много рендера