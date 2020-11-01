import React, { Component } from 'react'
import MainContainer from './main/mainContainer.js'
import HeaderContainer from './header/headerContainer.js'
import Footer from './footer/footer.js'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { Route, withRouter } from 'react-router-dom'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrollbackVisible: false,
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
  render() {
    return (
      <>
        <Route path='/'><HeaderContainer /></Route>
        <MainContainer />
        <Route path='/'><Footer /></Route>
        {this.state.isScrollbackVisible && <IoIosArrowDropupCircle className='section__scrollBack' onClick={this.handlerScrollBack} />}
      </>
    )
  }
}
export default withRouter(App)
