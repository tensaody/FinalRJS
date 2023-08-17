import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useEffect } from 'react';
import { products } from './data/products';
import { categories } from './data/categories';
import { users } from './data/Users';
// import សម្រាប់ការ ហៅចូលប្រើ
import Home from './pages/home';
import { Outlet, Route, Routes } from 'react-router-dom';
import Read from './pages/Read';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Photo from './pages/photo';
import ProductForm from './components/ProductForm';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Sigup from './pages/Sigup';
import NotFound from './pages/404';



function App() {
  // // how to import products
                // console.log(products)
                // console.log(categories)
                // console.log(users)
  // let data = products
  // // MOC data, arrow functions get moc data
  //     const fetchProducts = () =>{
  //         fetch(data)
  //         .then(res => res.json())
  //         .then(res => console.log(res))
  //     }

  //     useEffect(() => {
  //         fetchProducts()
  //     }, [])

  return (
                      // <div className='container'>
                        
                      //   <Home />
                        
                      //   <div className='row g-4'>
            
              /* <Card
              // code for props data
                imageURL="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
                title="Java Developer"
                desc="Proposal indulged no do sociable he throwing settling."
              /> */
              /* render output to UI as List */
      //       {
      //         products.map((product) => (
      //           <div
      //           // កាត់បន្ថយ Warning
      //           key={product.id}

      //           className='col-12 col-sm-6 col-md-4 col-lg-3'>
      //             <Card 
      //               imageURL = {product.images[0]}
      //               // images copy from product moc data
      //               title = {product.title}
      //               desc = {product.description}
      //             />
      //           </div>
      //         ))
      //         //  =>(.....) is mean return to UI
      //       }     
      // </div>


      // <div className='row g-4'>
      //       {
      //         categories.map((category) => (
      //           <div
      //           // កាត់បន្ថយ Warning
      //           key={category.id}

      //           className='col-12 col-sm-6 col-md-4 col-lg-3'>
      //             <Card 
      //               imageURL = {category.image}
      //               // images copy from product moc data
      //               title = {category.name}
      //               // desc = {category.description}
      //             />
      //           </div>
      //         ))
      //         //  =>(.....) is mean return to UI
      //       }
              
      // </div>


    //   <div className='row g-4'>
    //         {
    //           users.map((user) => (
    //             <div
    //             // កាត់បន្ថយ Warning
    //             key={user.id}

    //             className='col-12 col-sm-6 col-md-4 col-lg-3'>
    //               <Card 
    //                 imageURL = {user.avatar[0]}
    //                 // images copy from product moc data
    //                 title = {user.role}
    //                 // desc = {category.description}
    //               />
    //             </div>
    //           ))
    //           //  =>(.....) is mean return to UI
    //         }
              
    //   </div>
     
    // </div>
    // 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    <>
    {/* <Navbar /> */}
      <Routes>
        <Route  path='/' element={<MainLayout />}>
          <Route  path='/' element={<Home />}></Route>
          <Route  path='/read/:id' element={<Read />}></Route>
          <Route path='/about-us' element={<About />}></Route>
          <Route path='/photo/:id' element={<Photo />}></Route>
          <Route path='/form' element={<ProductForm />}></Route>
          <Route path='/datatable' element={<Dashboard />}></Route>
          <Route path='/create' element={<ProductForm edit={false} />}></Route>
          <Route path='/edit' element={<ProductForm edit={true} />}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
        </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/sigup' element={<Sigup />}></Route>

      </Routes>
    {/* <Footer /> */}
    </>
    
  );
  
}

export default App;


function MainLayout(){
return(
<>
    <Navbar />
     <Outlet />
     <Footer />
</>
   )
 }
