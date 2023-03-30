import React from 'react'
import HeaderNav from './components/headers/HeaderNav'
import Footer from './components/footers/Footer'

export default function Layout(props) {
  return (
    <div>
      <HeaderNav/>

      <main>
        {props.children}
      </main>

      <Footer/>
    </div>
  )
}
