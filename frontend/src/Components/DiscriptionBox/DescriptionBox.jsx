import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Discription</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that allows businesses and customers to buy and sell products or services over the internet. It provides features like product browsing, search and filtering, secure online payments, shopping carts, order tracking, and customer support, enabling users to shop conveniently anytime and from anywhere.
        </p>
        <p>
            An e-commerce website is a digital marketplace where sellers showcase products and customers can browse, compare, and purchase items online. It integrates product catalogs, user accounts, payment gateways, and delivery management to provide a smooth and efficient shopping experience.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
