import React, { Component } from 'react'
import { tagArray } from '../sys/tagArray.js'
import AllNewsSection from './allNewsSection.js'
import CategoryNewsSection from './categoryNewsSection.js'
import SingleNewsSection from './singleNewsSection.js'
import SearchSection from './searchSection.js'
import WeatherSection from './weatherSection'
import { Route, withRouter } from 'react-router-dom'
import { getTopNewsAPI, getTopBusinessNewsAPI, getTopTechnologyNewsAPI, getTopEntertainmentNewsAPI, getTopScienceNewsAPI, getTopHealthNewsAPI, getTopSportsNewsAPI } from '../sys/sysAPI'
class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            allNews: []
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
            this.setState({
                allNews,
                isLoading: true
            })
        } catch (e) {
            console.log(e)
            // if (e.response.status === 429) {
            //     for (let i = 0; i < APIKeys.length; i++) {
            //         const key = APIKeys[i++]
            //         this.setState({ APIKey: key })
            //         console.log(this.state.APIKey)
            //     }
            // }
            // if e === 429{
            // this.setState((prevState) => (keyInd: prevState.keyInd + 1))
            // }
            // console.error(e)
        }
    }
    getHistoryFromCategoryNews = (arg) => {
        this.props.history.push(`${'category/'}${arg.toLowerCase()}`)
        window.scrollTo({ top: 0 })
    }
    getHistoryFromSingleNews = (arg) => {
        this.props.location.pathname = '/category/'
        this.props.history.push(`${arg.category.toLowerCase()}/${arg.title.toLowerCase()}`)
        window.scrollTo({ top: 0 })
    }
    getHistoryFromSearchSingleNews = (arg) => {
        this.props.history.push(`${arg.category.toLowerCase()}/${arg.title.toLowerCase()}`)
    }
    render() {
        return this.state.isLoading && (
            <>
                <Route exact path='/'>
                    <AllNewsSection
                        allNewsContent={this.state.allNews}
                        handlerCaregoryOnClick={this.getHistoryFromCategoryNews}
                        handlerSingleNewsOnclick={this.getHistoryFromSingleNews}
                    />
                </Route>
                <Route exact path='/category/:name'>
                    <CategoryNewsSection
                        categoryNewsContent={this.state.allNews}
                        handlerSingleNewsOnclick={this.getHistoryFromSingleNews}
                    />
                </Route>
                <Route exact path='/category/:name/:name' >
                    <SingleNewsSection allNewsContent={this.state.allNews.flat()} />
                </Route>
                <Route exact path='/search/:name' >
                    <SearchSection
                        isLoading={this.props.isLoading}
                        searchResult={this.props.searchResult}
                        handlerSingleNewsOnClickFromSearch={this.getHistoryFromSearchSingleNews}
                    />
                </Route>
                <Route exact path='/погода' >
                    <WeatherSection />
                </Route>
            </>
        )
    }
}
export default withRouter(MainContainer)