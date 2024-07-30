import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Aboutus from './Aboutus'
import AllCategoriesHome from './AllCategoriesHome'
import data from '../../Data/data.json'


export default function Main() {
  const aboutusRef = React.useRef<HTMLDivElement>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const categoryNames = Object.keys(data.data[0]);
    setCategories(categoryNames);
  }, []);

  return (
    <>
      <Hero aboutusRef={aboutusRef} />
      <Aboutus aboutusRef={aboutusRef} />
      {
        categories.map((category) => (
          <AllCategoriesHome key={category} category={category} />
        ))
      }
    </>
  )
}
