import React, { Component } from 'react'
import { tagArray } from '../sys/TagArray.js'
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
            categoryContent: []
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
            const { categoryContent } = this.state
            categoryContent.push(getTopNews.data.articles, getTopBusinessNews.data.articles, getTopTechnologyNews.data.articles, getTopEntertainmentNews.data.articles, getTopScienceNews.data.articles, getTopHealthNews.data.articles, getTopSportsNews.data.articles)
            categoryContent.map((elem, ind) => {
                return elem.map(el => el.category = tagArray[ind].category)
            })
            this.setState({ categoryContent })
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        console.log(this.state.categoryContent);
        return (
            <div>MainContainer</div>
        )
    }
}
export default MainContainer