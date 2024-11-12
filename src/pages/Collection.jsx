import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';

import ProductItem from '../components/ProductItem';



const Collection = () => {

  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products || [])
  }, [products])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTRES</p>
        <div className='border border-gray-300 pl-5 py-3 mt-6'>
          <p className='mb-3 text-sm font-medium'> CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Femme'} />Femme
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Homme'} />Homme
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Enfant'} />Enfant
            </p>
          </div>

        </div>
        <div className=' border  border-gray-300 pl-5 py-3 my-5' >
          <p className='mb-3 text-sm font-medium'> TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'vetement'} />Pull
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'chaussures'} />Pantalon
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'accessoires'} />Veste
            </p>
          </div>

        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <div className=" inline-flex gap-2 items-center mb-3 font-medium">
            TOUS LES PRODUITS
          </div>

        </div>

    
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {filterProducts.map((item, index) => (
          <ProductItem key={index} id={item.id}
            img={item.img} title={item.title} price={item.price}
          />
        ))}
      </div>

    </div>
    </div>
  )
}

export default Collection
