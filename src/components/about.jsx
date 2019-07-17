import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Hi! My name is Kevinn and I am a full stack developer. 
                    I have done a number of projects utilizing both front end and back end web technologies. 
                    My goal is to always produce dynamic and feature rich web applications through an agile, domain-driven and test-driven process. 
                    I have skills in working with html5, css, sass, javascript, java, angular, react, sql, spring, and spring boot. 
                    I like to use the Scrum methodology in managing app development and test driven development for creating applications. 
                    In this way I can produce applications efficiently while also ensuring quality code.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my areas of experience</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    JavaScript<br/>
                    React<br/>
                    HTML, CSS, SASS <br/>
                    NodeJs <br/>
                    GraphQL <br/>
                    Angular <br/>
                    Firebase <br/>
                    Spring MVC
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p> I have good grasp over fundamental concepts of DSA, such as performance of Data structures and Algorithms</p>
                    Arrays/ArrayList<br/>
                    LinkedList/Doubly LinkedList<br/>
                    Graphs<br/>
                    Trees/Binary Trees<br/>
                    Divide and Conquer<br/>
                    Recursion<br/>
                    Dynamic programing <br/>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Back-End</h3>
                    Java<br/>
                    NodeJs<br/>
                    C#<br/>
                    Spring/Spring Boot <br/>
                    Oracle<br/>
                    MySql<br/>
                    PostgreSQL<br/>
                    Redis<br/>
                    MongoDB         
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
