import React from 'react'
import Nav from "@/component/Nav"
import Contact from "@/component/Contact/Contact"
import ScrollAbout from "@/component/About/ScrollAboutCarousel"
import Gofooter from '@/component/GoFooter'
import { Container } from '@mui/material'
export default function page() {
  return (
    <div>
        <Nav/>
        <Contact/>
        <ScrollAbout/>
        <Gofooter/>
    </div>
  )
}
