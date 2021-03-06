import React, { Component } from 'react'
import MainContainer from './main/mainContainer.js'
import HeaderContainer from './header/headerContainer.js'
import Footer from './footer/footer.js'
import { getNewsSearchAPI } from './sys/sysAPI.js'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { Route, withRouter } from 'react-router-dom'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrollbackVisible: false,
      searchRequest: undefined,
      searchResult: ''
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.scrollToggle()
    })
  }
  scrollToggle = () => {
    const { isScrollbackVisible } = this.state
    if (isScrollbackVisible && window.pageYOffset < 400) {
      this.setState({ isScrollbackVisible: false })
    }
    if (!isScrollbackVisible && window.pageYOffset > 400) {
      this.setState({ isScrollbackVisible: true })
    }
  }
  handlerScrollBack = () => (window.scrollTo({ top: 0, behavior: 'smooth' }))
  getOnChangeFinderValue = (event) => {
    let { searchRequest } = this.state
    searchRequest = event.target.value
    this.setState({ searchRequest })
  }
  handlerOnClickFinder = () => {
    const { searchRequest } = this.state
    searchRequest && getNewsSearchAPI(searchRequest.split(' ').join('+'))
      .then(res => {
        const searchResult = res.data.articles
        searchResult.map(el => {
          el.category = 'searchResult'
          return el
        })
        this.setState({ searchResult })
        this.props.location.pathname = '/search/'
        this.props.history.push(searchRequest)
      })
  }
  handlerFinderOnKeyDown = (event) => (event.key === 'Enter' && this.handlerOnClickFinder())

  render() {
    return (
      <>
        <Route path='/'><HeaderContainer searchValue={this.state.searchRequest} serchRequest={this.getOnChangeFinderValue} finderOnClick={this.handlerOnClickFinder} finderOnKeyDown={this.handlerFinderOnKeyDown} /></Route>
        <MainContainer searchResult={this.state.searchResult} isLoading={this.state.isLoading} />
        <Route path='/'><Footer /></Route>
        {this.state.isScrollbackVisible && <IoIosArrowDropupCircle className='section__scrollBack' onClick={this.handlerScrollBack} />}
      </>
    )
  }
}
export default withRouter(App)
