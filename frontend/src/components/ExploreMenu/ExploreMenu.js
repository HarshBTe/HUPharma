import React from 'react'
import './ExploreMenu.css'

const menu_list = [
    {
        menu_name: "Antibiotics",
        menu_image: "https://res.cloudinary.com/di3u22t0w/image/upload/v1727887643/Screenshot_3602_eb4sr2.png"
    
    },
    {
        menu_name: "Syrup",
        menu_image: "https://res.cloudinary.com/di3u22t0w/image/upload/v1727888055/Screenshot_3603_ybumra.png"
    },
    {
        menu_name: "Antipyretics",
        menu_image: "https://res.cloudinary.com/di3u22t0w/image/upload/v1727888100/Screenshot_3604_hr4zb6.png"
    },
    {
        menu_name: "Antiseptics",
        menu_image: "https://res.cloudinary.com/di3u22t0w/image/upload/v1727888142/Screenshot_3605_punh2x.png"
    },
    {
        menu_name: "Antacids",
        menu_image: "https://res.cloudinary.com/di3u22t0w/image/upload/v1727888174/Screenshot_3606_bsqwrw.png"
    },

    {
        menu_name: "Antihistamines",
        menu_image: "https://res.cloudinary.com/di3u22t0w/image/upload/v1727888174/Screenshot_3606_bsqwrw.png"
    },

    {
        menu_name: "Antihypertensives",
        menu_image: "https://res.cloudinary.com/di3u22t0w/image/upload/v1727888174/Screenshot_3606_bsqwrw.png"
    },
]

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
            return (
                <div onClick={() => setCategory(prev => prev===item.menu_name ? "All": item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name? "active": ""} src={item.menu_image} alt="" />
                    <p> {item.menu_name} </p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
