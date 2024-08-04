import React from 'react'
import Hero from './Hero'
import Aboutus from './Aboutus'
import AllCategoriesHome from './AllCategoriesHome'
import { Helmet } from 'react-helmet'
import { useLanguage } from '../../Contexts/LanguageContext'


export default function Home( { categories }: { categories: string[] }) {
  const aboutusRef = React.useRef<HTMLDivElement>(null);
  const { language } = useLanguage()

  return (
    <>
      <Helmet>
        <title>
          {
            language === 'en' ? 'Luxury Rentals | Home' : 'تأجيرات فاخرة | الصفحة الرئيسية'
          }
        </title>
        <meta name="keywords" content="Luxury, Rentals, Items, Rent, Home, Categories, About Us" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Rentals" />
        <meta name="description" content="Luxury Rentals is a website that offers a wide range of luxury items for rent" />
      </Helmet>
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
