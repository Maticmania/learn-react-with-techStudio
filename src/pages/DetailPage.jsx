import React from 'react'
import ProductCard from '../components/ProductCARDWORK'
import { useParams } from 'react-router-dom'
import { data } from '../db/ProductDB'
import DetailCard from '../components/DetailCard'



const DetailPage = () => {
    const { ProductId } = useParams()
    // console.log(`Product ${ProdutId} clicked`)

//Go into the database and find the product with the id === productid
    const product = data.find((product)=> product.id === parseInt(ProductId));
    console.log(product)
  return (
    <div>
      <h1>Detail Page</h1>
      <div className=''>
        {/* <h3>product {ProductId} clicked</h3> */}
        <p></p>
      </div>
      <DetailCard product={product}/>
    </div>
  )
}

export default DetailPage
