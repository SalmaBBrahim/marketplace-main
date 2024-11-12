import React, { useContext, useEffect, useState } from 'react'
import Img1 from "../../assets/Populaire/pull_overH1.png";
import Img2 from "../../assets/Populaire/pull_overF1.png";
import Img3 from "../../assets/Populaire/pull_overH2.png";
import Img4 from "../../assets/Populaire/pull_overF2.png";
import './Populaire.css'; 
import { ShopContext } from '../../context/ShopContext';
import ProductItem from '../ProductItem';


/*const Productsitem = [
    {
      id: 1,
      img: Img1,
      title: "PULL OVER",
      prix:"69.90 TND"
    },
    {
      id: 2,
      img: Img2,
      title: "PULL OVER",
      prix:"59.90 TND"
    },
    {
      id: 3,
      img: Img3,
      title: "PULL OVER",
      prix:"69.90 TND"
    },
    {
      id: 4,
      img: Img4,
      title: "PULL OVER",
     prix:"59.90 TND"
    },
   
  ];*/
const Populaire = () => {
    const {products} = useContext(ShopContext);
    //console.log(products)
   
    const [populaire,setPopulaire] =useState([]);

    useEffect(()=>{
        setPopulaire(products.slice(0,4));
    },[])
  return (

    <div className='populaire'>
    <h1>MEILLEURE SÉLECTION POUR VOUS</h1> <hr />

    <div className='populaire-item'>
    {populaire.map((item,index) => (
     <ProductItem key = {index} id = {item.id} 
     img={item.img} title={item.title} price={item.price}
     />
    ))}

</div>
</div>

  )
}

export default Populaire
