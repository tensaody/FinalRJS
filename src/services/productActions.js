import axios from "axios"
import { base_URL } from "../utils/constand"

export const fetchCategories = async  () =>{
    let resp = await fetch(`${base_URL}categories`, {
        method: "GET"
    })
    return resp.json()
}


export const fetchProducts = async() =>{
    let resp = await fetch(`${base_URL}products`)
    // limit=8&offset=0 កំណត់អោយ page =1pages
    // .then(res => res.json())
    // .then(resp => {
    //   setProducts(resp)
    //   setLoading(false)
    //   // when get data is fales.
    // })
    return resp.json()
}

// create functions to insert products
export const insertProduct = async (product) =>{
    let resp = await fetch(`${base_URL}products`, {
        method: "POST",
        // headers: {
        //     "Content-Type": 
        // },
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp
    // if(resp.status !==201){
    //     console.log("Failed")
    // }
    // return resp.json()
}

// functions to insert file, images, pdf and .....
export const fileUploadToServer = async (image) =>{
    let resp = await axios({
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        url: `${base_URL}files/upload`,
        data: image
    })
    return resp
}


//updated product by product id
export const updatedProduct = async (product, id) =>{
    let resp = await fetch(`${base_URL}products/${id}`, {
        method: "PUT",
        // headers: {
        //     "Content-Type": 
        // },
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp
    // if(resp.status !==201){
    //     console.log("Failed")
    // }
    // return resp.json()
}
