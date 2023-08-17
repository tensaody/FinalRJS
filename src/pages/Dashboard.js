import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../services/productActions';
import { useNavigate } from 'react-router-dom';
// import { products } from '../data/products';



export default function Dashboard() {
    //declare state products
    const navigate = useNavigate()
    const [filterProducts, setProducts] = useState([])
    const [search, setSearch] = useState("")

    const columns = [
        {
            name: "Title",
            selector: row => row.title,
            sortable: true,
        },
        {
            name: "Price",
            selector: row => row.price,
            sortable: true,
        },
        {
            name: "Photo",
            selector: row => <img src={row.images[0]} alt="product" style={{width: '50px'}}/>,
        },
        {
            name: "Action",
            selector: row => <button type="button"
                onClick={() => navigate("/edit",{
                    state: row
                })}
            className="btn btn-outline-primary"
            >Edit</button>,
        },
    ];
    
    // const data = [
    //     {
    //         id: 1,
    //         title: "Beetlejuice",
    //         year: "1988",
    //     },
    //     {
    //         id: 2,
    //         title: "Ghostbusters",
    //         year: "1984",
    //     },
    // ];
    useEffect(() => {
        fetchProducts()
        .then(resp => setProducts(resp))
        
    }, [])
    useEffect(() =>{
        const result = filterProducts.filter(pro => {
            return pro.title && pro.title.toLowerCase().match(search.toLowerCase())
        })
        setProducts(result)
    }, [search])

  return (
    <main className='container'>
        <DataTable
        columns={columns}
        data={filterProducts}
        pagination
        subHeader
        subHeaderComponent={
            <input type="text"
            placeholder='search here'
            className='form-control'
            value={search}
            onChange={(e) => {setSearch(e.target.value)
                console.log(search)
            }}
            
            />
        }
    > 
    </DataTable>
    </main>
    
    
  )
}


