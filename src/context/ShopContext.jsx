import React, { createContext } from 'react'
import { products } from '../assets/assets';



export const ShopContext = createContext(); //API from react library
  export const ShopContextProvider = (props) => {
  const currency = 'TND';
  const delivery_fee =10;
  const value = {
     products,currency,delivery_fee
  }
  return(

  <ShopContext.Provider value ={value}>
      {props.children}
  </ShopContext.Provider>
 )
}

export default ShopContextProvider;
