import axios from 'axios'
const keysArr = {
    newsKeys: ''
}

export const getWeatherAPI = (lat, lon) => (axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`))
export const getRatesAPI = () => (axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`))
export const getNewsSearchAPI = (request) => (axios.get(`https://newsapi.org/v2/everything?q=${request}&language=ru&apiKey=7a824e553994401584147a79cbf9129f`))
export const getTopNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=general&country=ru&apiKey=67584eaf949b420d841aaf893ca8c8e0`))
export const getTopBusinessNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=business&country=ru&apiKey=67584eaf949b420d841aaf893ca8c8e0`))
export const getTopTechnologyNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=technology&country=ru&apiKey=67584eaf949b420d841aaf893ca8c8e0`))
export const getTopEntertainmentNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=entertainment&country=ru&apiKey=67584eaf949b420d841aaf893ca8c8e0`))
export const getTopScienceNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=science&country=ru&apiKey=67584eaf949b420d841aaf893ca8c8e0`))
export const getTopHealthNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=health&country=ru&apiKey=67584eaf949b420d841aaf893ca8c8e0`))
export const getTopSportsNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=sports&country=ru&apiKey=67584eaf949b420d841aaf893ca8c8e0`))

