import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
