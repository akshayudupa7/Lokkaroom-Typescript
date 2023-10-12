import React from 'react'
import Nav from '@/component/Nav'
import Gofooter from '@/component/GoFooter'
import ScrollAbout from "@/component/About/ScrollAboutCarousel"
import AboutInfo from "@/component/About/About_Info"
export default function page() {
  return (
    <div style={{backgroundColor:"#121212"}}>
     <Nav/>
     <AboutInfo/>
     <ScrollAbout/>
     <Gofooter/>
    </div>
  )
}

