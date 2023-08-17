import React, { useEffect } from 'react'
import { fetchAllProducts } from '../reduce/actions/ProductsActions'
import { useDispatch, useSelector } from 'react-redux'

export default function About() {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.prodReducer)
  useEffect(() => {
    //subscribe to store
    dispatch(fetchAllProducts())

  }, [])
  return (
    <main>
        <h2>About Us</h2>
        {
          console.log(products)
        }
    </main>
  )
}
