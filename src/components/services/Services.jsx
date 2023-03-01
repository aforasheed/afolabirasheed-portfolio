import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='service'>
      <h5>Whai I offer</h5>
      <h2>Serivces</h2>

      <div className="container services__container">
        {/* UI/UX DESIGN */}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

            <ul className="service__list">
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>collecting, researching, investigating and evaluating user requirements.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>plan and implement new designs.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Optimize existing user interface designs.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Test for intuitivity and experience.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Communicate with clients to understand their business goals and objectives.</p>
              </li>
            </ul>

        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

            <ul className="service__list">
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Developing new user-facing features using React.JS.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Translating designs and wireframes into high quality code.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Optimizing components for maximum performance across a vast array of web-capable devices and browsers</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Developing and maintaining the user interface.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Fixing bugs and testing for usability.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Following SEO best practices.</p>
              </li>
            </ul>

        </article>
        {/* CONTENT CREATION */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

            <ul className="service__list">
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>writing blog posts about industry-related topics.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>promoting content on social media.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Research industry-related topics.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Promote content on social networks and monitor engagement.</p>
              </li>
              <li>
                <BiCheck className='serservice__list-icon'/>
                <p>Update websites as needed.</p>
              </li>
            </ul>

        </article>
      </div>
    </section>
  )
}

export default Services
