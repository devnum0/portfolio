import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import React from 'react'

export default function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Timeline />
        </div>
      </div>
    </div>
  )
}
