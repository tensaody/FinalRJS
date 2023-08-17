import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Photo() {
  // let param = useParams()
  let {id} = useParams()
  // create a state to store product objects

  // set default value for state for handle slow data load
  const [product, setProduct] = useState({
    title: "Default Title",
    images: [
      "https://picsum.photos/640/640?r=7432"
    ]
  })

  let fetchDetailProduct = (id) => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(resp => resp.json())
    .then(resp => setProduct(resp))
  }
  useEffect(() => {
      fetchDetailProduct(id)
  }, [])



  return (
    <main>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt="" />
    </main>
  )
}
