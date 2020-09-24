import axios from 'axios'

export const getWeatherAPI = (lat, lon) => (axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`))
export const getRatesAPI = () => (axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`))
export const getNewsSearchAPI = (request) => (axios.get(`https://newsapi.org/v2/everything?q=${request}&language=ru&apiKey=7a824e553994401584147a79cbf9129f`))
export const getTopNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?pageSize=10&category=general&country=ru&apiKey=7a824e553994401584147a79cbf9129f`))
export const getTopBusinessNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?pageSize=10&category=business&country=ru&apiKey=7a824e553994401584147a79cbf9129f`))
export const getTopTechnologyNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?pageSize=10&category=technology&country=ru&apiKey=7a824e553994401584147a79cbf9129f`))
export const getTopEntertainmentNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?pageSize=10&category=entertainment&country=ru&apiKey=7a824e553994401584147a79cbf9129f`))
export const getTopScienceNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?pageSize=10&category=science&country=ru&apiKey=7a824e553994401584147a79cbf9129f`))
export const getTopHealthNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?pageSize=10&category=health&country=ru&apiKey=7a824e553994401584147a79cbf9129f`))
export const getTopSportsNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?pageSize=10&category=sports&country=ru&apiKey=7a824e553994401584147a79cbf9129f`))

