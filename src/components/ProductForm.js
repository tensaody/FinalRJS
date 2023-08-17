import React, { useEffect, useState } from 'react'
import { fetchCategories, fileUploadToServer, insertProduct, updatedProduct } from '../services/productActions'
import { Form, useLocation } from 'react-router-dom'


export default function ProductForm({edit}) {
    const location = useLocation() 
    const [categories, setCategories] = useState([])
    const [source, setSource] = useState("")
    const [product, setProduct] = useState({
        id: 0,
        title: "",
        price: 0,
        description: "Wingbank, Bank for Cambodians Peoples",
        categoryId: 1,
        images: [
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        ]
    })
    const onChangeHandler = (e) => {
        // console.log(e.target.value)
        const {name, value} = e.target
        console.log(name)
        console.log(value)
        setProduct(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(product && product)
    }

    const onPreviewImage = (e) => {
            console.log(e.target.files)
            setSource(e.target.files[0])
    }

    const handleOnSubmit = () => {
        // console.log('on submit')
        // // ************create image obj as form data
        // const formData = new FormData()
        // formData.append("file", source)
        // // **************function to upload imaged data to server
        // fileUploadToServer(formData)
        // .then(res => {
        //     product.images = [res.data.location]
        //     console.log(product.images)
        //     insertProduct(product)
        //     .then(res => res.json())
        //     .then(resp => console.log(resp))
        // })
        
        if(edit){
            //source is equeal to "", it mean that user update with old images
            if(source == ""){
                console.log('product id', product.id)
                console.log(product.categoryId)
                updatedProduct(product, product.id)
                .then(res => res.json())
                .then(res => console.log(res))
            }
            else{
                //user choose new images
                const image = new FormData()
                image.append("file", source)
                fileUploadToServer(image)
                .then(resp => {
                    product.images = [resp.data.location]
                    //console.log(product.images)
                    updatedProduct(product, product.id)
                    .then(res => res.json())
                    .then(res => console.log(res))
                })
            }
            
        }else{
            //..this will excecute when user insert new product
            //..no need to check image old or new because user must be upload new images
            //..create image obj as form data
            const image = new FormData()
            image.append("file", source)
            //...functions to upload image data to server
            fileUploadToServer(image)
            .then(res => {
                product.images = [res.data.location]
                console.log(product.images)
                // insert product including images
                insertProduct(product)
                .then(res => res.json)
                .then(resp => console.log(resp))
            })

        }
    }
    useEffect(() => {
        console.log(edit)
        if(edit){
            console.log(location.state)
            const {id, title, price, description, category, images} = location.state
            product.id = id
            product.title = title
            product.description = description
            product.price = price
            product.categoryId = category.id
            product.images = images
            console.log(product.images)

        }
        fetchCategories()
        .then(res => setCategories(res))
    }, [])

  return (
    <main className='container'>
        <div className="mb-3 ">
            <label for="titles" class="form-label">Titles</label>
            <input
            type="text" 
            className="form-control" 
            name="title" 
            placeholder="Saody" 
            value={product.title}
            onChange={onChangeHandler}
            />
        </div>
        <div className="mb-3 ">
            <label for="price" class="form-label">Price</label>
            <input type="text" class="form-control" name="price" placeholder="input price" value={product.price} onChange={onChangeHandler}/>
        </div>


{/* 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
<div className='mb-3'>
        <label for="price" class="form-label">Categories</label>
        <select className="categories" aria-label="Default select example" value={product.categoryId} onChange={onChangeHandler} name='cagegotyId'>
            <option selected>Open this select menu</option>
            {
                categories && categories.map(cat => (
                    <option value={cat.id}>{cat.name}</option>
                ))
            }
        </select>
        </div>
{/* 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}   
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Descriptions</label>
            <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                name="description"
                value={product.description}
                onChange={onChangeHandler}
            ></textarea>
        </div>


        <div className='mb-3 preview '>
            <img 
            src={source ==""?product.images[0]:source && URL.createObjectURL(source)} 
            alt='Preview Image'
            style={{width: 200}}
            />
        </div>


        <div className="mb-3">
            <input type='file' onChange={onPreviewImage} />
        </div>

        <button type="button" className="btn btn-primary" onClick={() => handleOnSubmit()}>{edit?"Update Products":"Create Products"}</button>
    </main>
  )
}


