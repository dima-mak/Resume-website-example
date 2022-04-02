import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export class Services extends Component {
  static propTypes = {}

  render() {
    return (
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className= "container. services__container">
          <article className="service"> 
          <div className="service__head">
          <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li>
            
          </ul>

          </article>
          


          <article className="service"> 
          <div className="service__head">
          <h3>Content Creationt</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li>
            
          </ul>

          </article>



          
          <article className="service"> 
          <div className="service__head">
          <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quod, eum placeat a quae error animi odio exercitationem laudantium sapiente quidem, corporis ut maxime consequatur voluptatibus ipsam dolorum beatae.</p>
            </li>
            
          </ul>

          </article>
         

         
        </div>
      </section>

    
    )
  }
}

export default Services