import React from 'react'
import '../styles/Main.component.css'
import Head from 'next/head'
import LeftSideBar from '../dashboard-components/LeftSideBar.component'
import '../globals.css'
import PromotionBar from '../dashboard-components/PromotionBar.components'


function MainDashboard() {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
        </style>
      </Head>
      <main>
        <PromotionBar />
        <LeftSideBar />
      </main>
      
    </>
  )
}

export default MainDashboard