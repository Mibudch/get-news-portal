import React, { Component } from 'react'
import { tagArray } from '../sys/TagArray.js'
import AllNewsSection from './allNewsSection.js'
import { Route, withRouter } from 'react-router-dom'
import CategoryNewsSection from './categoryNewsSection.js'
import { getTopNewsAPI, getTopBusinessNewsAPI, getTopTechnologyNewsAPI, getTopEntertainmentNewsAPI, getTopScienceNewsAPI, getTopHealthNewsAPI, getTopSportsNewsAPI } from '../sys/sysAPI'
class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            allNews: [],
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
            console.log(e);
        }
    }
    render() {
        return this.state.isLoading && (
            <>
                <Route exact path='/'>
                    {this.state.allNews.map((el, i) => {
                        return (
                            <AllNewsSection
                                key={i}
                                newsCategory={el[i].category}
                                mainNews={el[0]}
                                topSideNews={el.slice(1, 5)}
                                bottomSideNews={el.slice(5, 10)}
                            />
                        )
                    })}
                </Route>
                <Route path='/:name'><CategoryNewsSection categoryNewsContent={this.state.allNews} /></Route>
            </>
        )
    }
}
export default withRouter(MainContainer)