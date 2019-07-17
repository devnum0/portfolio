import React,{Fragment} from 'react'
import ResourceLink from '../components/resource-link'

export default function introduction() {
  return (
    <Fragment>
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
                          <ResourceLink type={'cv'} h2={<h1><span style={{color:'white'}}>Hi!,</span> <br /><span style={{color:'white'}}>I'm </span> Kevinn</h1>}/>
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
                          <ResourceLink type={'git'} h2={ <h1>I love building<br /> THINGS !!</h1>} />
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
                          <ResourceLink type={'java'}/>
                          <ResourceLink type={'crash'}/>
                          <ResourceLink type={'resources'}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
    </Fragment>
  )
}
