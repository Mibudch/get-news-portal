import axios from 'axios'
export const getWeatherAPI = (lat, lon) => (axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`))
export const getRatesAPI = () => (axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`))
export const getNewsAPI = (newsCategory, tag) => (axios.get(`http://newsapi.org/v2/top-headlines?pageSize=100&category=${newsCategory}&country=ru&apiKey=7a824e553994401584147a79cbf9129f`))
export const getNewsSearchAPI = (request) => (axios.get(`https://newsapi.org/v2/everything?q=${request}&language=ru&apiKey=7a824e553994401584147a79cbf9129f`))