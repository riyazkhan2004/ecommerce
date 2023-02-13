import React from 'react'
import { Header } from '../Header/header'
import {Routers} from '../../routers/Routers'
import { Footer } from '../Footer/footer'
export function Layout() {
  return (
    <>
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </>
  )
}
