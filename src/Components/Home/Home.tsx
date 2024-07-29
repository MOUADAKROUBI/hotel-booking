import React from 'react'
import Hero from './Hero'
import Aboutus from './Aboutus'
import AllCategories from './AllCategories'


export default function Main() {
  return (
    <>
      <Hero />
      <Aboutus />
      <AllCategories category= "villas" />
      <AllCategories category= "apartments" />
    </>
  )
}
