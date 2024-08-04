import React from 'react'
import Hero from './Hero'
import Aboutus from './Aboutus'
import AllCategoriesHome from './AllCategoriesHome'


export default function Home( { categories }: { categories: string[] }) {
  const aboutusRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero aboutusRef={aboutusRef} />
      <Aboutus aboutusRef={aboutusRef} />
      {
        categories.slice(1, 5).map((category) => (
          <AllCategoriesHome key={category} category={category} />
        ))
      }
    </>
  )
}
