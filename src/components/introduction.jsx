import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/laugh.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1><span style={{color:'white'}}>Hi!,</span> <br /><span style={{color:'white'}}>I'm </span> Kevinn</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1NbLKoPQYV_nc7bqwCwFGjnD7Jf2Nmehq/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/taichi.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love building<br /> THINGS !!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/devnum0" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/mountains.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love to learn <br/>here are some the resources I use ... </h1>
                          <br/>
                          <h2><span style={{color:'white'}}>Java and Java based Technologies</span></h2>
                          <p><a className="btn btn-primary btn-learn" href="https://www.javatpoint.com/" target="_blank" rel="noopener noreferrer">Javatpoint <i className="icon-book" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="http://www.javapractices.com" target="_blank" rel="noopener noreferrer">Javapractices <i className="icon-book" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="https://howtodoinjava.com" target="_blank" rel="noopener noreferrer">howtodoinjava<i className="icon-book" /></a></p>
                          <h2><span style={{color:'white'}}>Crash courses</span></h2>
                          <p><a className="btn btn-primary btn-learn" href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" rel="noopener noreferrer">Traversy Media <i className="icon-book" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp <i className="icon-book" /></a></p>
                          <a className="btn btn-primary btn-learn" href="https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA" target="_blank" rel="noopener noreferrer">Programming with Mosh <i className="icon-book" /></a>
                          <h2><span style={{color:'white'}}>Deep Dive</span></h2> 
                          <p><a className="btn btn-primary btn-learn" href="https://cleancoders.com/videos?gclid=Cj0KCQjwjrvpBRC0ARIsAFrFuV-gvNj3MXb13N-TeoqAF20aEQo4nn7qocVT6h7TJJQaVNri4zofx8MaAiStEALw_wcB" target="_blank" rel="noopener noreferrer">Uncle Bob <i className="icon-book" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="https://www.udemy.com/courses/search/?q=andrei%20neagoie&src=sac&kw=andrei%20a" target="_blank" rel="noopener noreferrer">Andrei Neagoie <i className="icon-book" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="https://www.youtube.com/channel/UCbF-4yQQAWw-UnuCd2Azfzg" target="_blank" rel="noopener noreferrer">Christopher Okhravi <i className="icon-book" /></a></p>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
