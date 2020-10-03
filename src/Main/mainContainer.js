import React, { Component } from 'react'
import { tagArray } from '../sys/TagArray.js'
import MainSection from './mainSection.js'
import { getTopNewsAPI, getTopBusinessNewsAPI, getTopTechnologyNewsAPI, getTopEntertainmentNewsAPI, getTopScienceNewsAPI, getTopHealthNewsAPI, getTopSportsNewsAPI } from '../sys/sysAPI'
class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            topNews: [],
            topBusinessNews: [],
            topTechnologyNews: [],
            topEntertainmentNews: [],
            topScienceNews: [],
            topHealthNews: [],
            topSportsNews: [],
            allNews: [],
            newsCategoryArray: []
        }
    }
    async componentDidMount() {
        try {
            const [getTopNews, getTopBusinessNews, getTopTechnologyNews, getTopEntertainmentNews, getTopScienceNews, getTopHealthNews, getTopSportsNews] = await Promise.all([
                getTopNewsAPI(),
                getTopBusinessNewsAPI(),
                getTopTechnologyNewsAPI(),
                getTopEntertainmentNewsAPI(),
                getTopScienceNewsAPI(),
                getTopHealthNewsAPI(),
                getTopSportsNewsAPI(),
            ])
            const { allNews } = this.state
            allNews.push(getTopNews.data.articles, getTopBusinessNews.data.articles, getTopTechnologyNews.data.articles, getTopEntertainmentNews.data.articles, getTopScienceNews.data.articles, getTopHealthNews.data.articles, getTopSportsNews.data.articles)
            allNews.map((elem, ind) => elem.map(el => el.category = tagArray[ind].category))
            const getNewsCategoryArray = () => (
                allNews.map((el, i) => el[i].category)
            )
            console.log(getNewsCategoryArray());
            this.setState({ allNews, newsCategory: getNewsCategoryArray(), isLoading: true })
        } catch (e) {
            console.log(e);
        }
    }
    getNewsCategoryArray = () => {
        const { allNews } = this.state
        return allNews.map((el, i) => {
            return el[i].category
        })
    }
    getMainNews = () => {
        const { allNews } = this.state
        return allNews.map(el => el[0])
    }
    getTopSideNewsArray = () => {
        const { allNews } = this.state
        return allNews.map(el => el.slice(1, 5))
    }
    render() {
        // console.log(this.state.newsCategoryArray);
        return this.state.isLoading && (
            <MainSection
                newsContent={this.state.allNews.map(el => el)}
                newsCategory={this.getNewsCategoryArray().map(el => el)}
                mainNews={this.getMainNews()}
                topSideNews={this.getTopSideNewsArray()}
            />
        )
    }
}
export default MainContainer