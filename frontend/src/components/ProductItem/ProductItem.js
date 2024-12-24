import React, { useContext } from 'react'
import './ProductItem.css'
import { StoreContext } from '../../context/StoreContext';



const ProductItem = ({id, name, price, description, image}) => {


  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={url + "/images/" + image} alt="" />
        {
            !cartItems[id]
                 ? <img className='add' onClick={() => addToCart(id)}  src="https://res.cloudinary.com/di3u22t0w/image/upload/v1729338819/add_icon_white_c8glbi.png" alt="" />
                 : <div className='food-item-counter'>
                     <img onClick= {() => removeFromCart(id)}  src="https://res.cloudinary.com/di3u22t0w/image/upload/v1729338846/remove_icon_red_qakfd6.png" alt="" />
                     <p>{cartItems[id]}</p>
                     <img onClick= {() => addToCart(id)} src="https://res.cloudinary.com/di3u22t0w/image/upload/v1729338832/add_icon_green_gch6v8.png" alt="" />
                    </div>
        }
      </div>
      <div className='food-item-info'>
           <div className='food-item-name-rating'>
              <p>{name}</p>
              <img src="https://res.cloudinary.com/di3u22t0w/image/upload/v1729328366/rating_starts_odmzno.png" alt="" />
           </div>
           <p className='food-item-desc'>
              {description}
           </p>
           <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default ProductItem
