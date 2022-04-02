import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'



export class Header extends Component {
  // static propTypes = {}

  render() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Anna Shtefania</h1>
          <h5 className="text-light">Fullstack Developer</h5>
           <CTA />
           <HeaderSocial/>

           <div className='me'>
              <img src={ME} alt="me" />
           </div>

           <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </header>
    )
  }
}

export default Header