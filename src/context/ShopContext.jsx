import React, { createContext,useState } from 'react'
import { products } from '../assets/assets';



export const ShopContext = createContext(); //API from react library
  export const ShopContextProvider = (props) => {
  const currency = 'TND';
  const delivery_fee =10;
  const [search,setSearch] =useState('');
  
  
  //const [showSearch,setShowSearch] = useState(true);

  const value = {
     products,currency,delivery_fee,
     search,setSearch
    
  }
  return(

  <ShopContext.Provider value ={value}>
      {props.children}
  </ShopContext.Provider>
 )
}

export default ShopContextProvider;
