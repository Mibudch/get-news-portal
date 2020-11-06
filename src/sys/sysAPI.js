import axios from 'axios'

// const valid = () => {
//     axios.get(`http://newsapi.org/v2/top-headlines?category=general&country=ru&apiKey=67584eaf949b420d841aaf893ca8c8e0`).
//     catch (e => {
//         console.log(e.response.status === 429)
//     })
// }
// console.log(valid())
export const getWeatherAPI = (lat, lon) => (axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`))
export const getRatesAPI = () => (axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`))
export const getNewsSearchAPI = (searchRequest) => (axios.get(`https://newsapi.org/v2/everything?q=${searchRequest}&language=ru&apiKey=ea8b1f117f634c248beb8838fd2a315a`))
export const getTopNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=general&country=ru&apiKey=ea8b1f117f634c248beb8838fd2a315a`))
export const getTopBusinessNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=business&country=ru&apiKey=ea8b1f117f634c248beb8838fd2a315a`))
export const getTopTechnologyNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=technology&country=ru&apiKey=ea8b1f117f634c248beb8838fd2a315a`))
export const getTopEntertainmentNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=entertainment&country=ru&apiKey=ea8b1f117f634c248beb8838fd2a315a`))
export const getTopScienceNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=science&country=ru&apiKey=ea8b1f117f634c248beb8838fd2a315a`))
export const getTopHealthNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=health&country=ru&apiKey=ea8b1f117f634c248beb8838fd2a315a`))
export const getTopSportsNewsAPI = () => (axios.get(`http://newsapi.org/v2/top-headlines?category=sports&country=ru&apiKey=ea8b1f117f634c248beb8838fd2a315a`))

// const APIKeys = [
//     '67584eaf949b420d841aaf893ca8c8e0',
//     '7a824e553994401584147a79cbf9129f',
//     'ba54c704ec4340d5a4f17fedf3417297',
//     '209312305fbb45d0a063ec7e98879f47',
//     '9c67fab8ec204ac4829eb88363bba95f',
//     '6aedf1b3ccf043e58d68e38a9c445af6',
//     'c4c6b80f331845edac5517013580d765',
//     'ea8b1f117f634c248beb8838fd2a315a',
//     '54b1f8b0c37643b78a5839f25ce1e944',
//     '70c3c47d66064bfda5544edbfb325c34',
//     'a886a99f04ae45c1955dbc220b7e93cc'

// ]