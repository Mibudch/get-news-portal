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
        super(props)
        this.state = {
            place: '',
            isLoading: false,
            lat: 53.893009,
            lon: 27.567444,
            temperature: '',
            icon: '',
            iconDescription: '',
            usdRate: '',
            eurRate: '',
            rubRate: '',
            ticker: '',
            news: [],
            newsImage: '',
            newsTitle: '',
        }
        console.log('constructor');
    }
    componentDidMount() {
        console.log('didMount');
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            this.setState({ lat: lat, lon: lon })
        })
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`)
            .then(res => {
                const temperature = res.data.main.temp
                const icon = res.data.weather[0].icon
                const iconDescription = res.data.weather[0].description
                const place = res.data.name
                this.setState({ place, temperature, icon, iconDescription, isLoading: true })
            })
        axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
            .then(res => {
                const usdRate = res.data[4].Cur_OfficialRate
                const rubRate = res.data[16].Cur_OfficialRate
                const eurRate = res.data[5].Cur_OfficialRate
                this.setState({ usdRate, eurRate, rubRate })
            })
        axios.get(`http://newsapi.org/v2/top-headlines?pageSize=100&category=general&country=ru&apiKey=7a824e553994401584147a79cbf9129f`)
            .then(res => {
                const ticker = res.data.articles.map((el) => `${(el.title)} ${'||'} `)
                const news = res.data.articles
                const newsImage = res.data.articles[0].urlToImage
                const newsTitle = res.data.articles[0].description
                this.setState({ ticker: ticker, news, newsImage, newsTitle })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        navigator.geolocation.getCurrentPosition(position => {
            const updLat = position.coords.latitude
            const updLon = position.coords.longitude
            if (prevState.lon !== updLon && prevState.lat !== updLat) {
                console.log('didUpdate')
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${updLat}&lon=${updLon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`)
                    .then(res => {
                        const temperature = res.data.main.temp
                        const icon = res.data.weather[0].icon
                        const iconDescription = res.data.weather[0].description
                        const place = res.data.name
                        this.setState({ place, temperature, icon, iconDescription })
                    })
            }
        })
    }
    getNewsTitle(param) {
        if (param) {
            const arr = param.split(' ')
            const newArr = []
            for (let i = 0; i < 11; i++) {
                newArr.push(arr[i])
            }
            return (newArr.join(' ') + '....')
        }
    }
    handlerOnClick(props) {
        return console.log(props);
    }
    render() {
        console.log('render');
        return !this.state.isLoading ? null : (
            <>
                <header>
                    <div className='header'>
                        <div className='header__container header_flex'>
                            <Logo />
                            <Finder />
                            <WeatherСurrency
                                place={this.state.place}
                                icon={this.state.icon}
                                iconDescription={this.state.iconDescription}
                                temperature={this.state.temperature}
                                usdRate={this.state.usdRate}
                                eurRate={this.state.eurRate}
                                rubRate={this.state.rubRate}
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