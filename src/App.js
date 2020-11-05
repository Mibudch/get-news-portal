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
    return searchRequest && getNewsSearchAPI(searchRequest.split(' ').join('+'))
      .then(res => {
        const searchResult = res.data.articles
        this.setState({ searchResult })
        this.props.location.pathname.slice(1, 7) === 'search' ? this.props.history.push(searchRequest) : this.props.history.push(`search/${searchRequest}`)
      })
  }
  render() {
    return (
      <>
        <Route path='/'><HeaderContainer searchValue={this.state.searchRequest} serchRequest={this.getOnChangeFinderValue} finderOnClick={this.handlerOnClickFinder} /></Route>
        <MainContainer searchResult={this.state.searchResult} />
        <Route path='/'><Footer /></Route>
        {this.state.isScrollbackVisible && <IoIosArrowDropupCircle className='section__scrollBack' onClick={this.handlerScrollBack} />}
      </>
    )
  }
}
export default withRouter(App)
