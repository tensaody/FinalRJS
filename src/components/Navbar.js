import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../reduce/actions/authActions'
import Profile from '../pages/Profile'
import { fetchProfile } from '../reduce/actions/profileActions'

// shortcut: rfc

export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLogin} = useSelector(state => state.authReducer)
    const {profile} = useSelector(state => state.profReducer)
    const {auth} = useSelector(state => state.authReducer)

    useEffect(() => {
        dispatch(fetchProfile(isLogin ? auth.access_token : ""))
      }, [])
  return (
    <div className='sticky-top container'>

            <nav className=" navbar navbar-expand navbar-white bg-white " aria-label="Second navbar example">
                <div className="container-fluid">
                <NavLink to="/" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder " : "nav-link px-2"} >Home</NavLink>
                {/* <link to class="navbar-brand"="/about-us">Home</link> */}
                <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder " : "nav-link px-2"}>About-Us</NavLink>
                <NavLink to="/Read/666" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder " : "nav-link px-2"}>Informations</NavLink>
                {/* <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder " : "nav-link px-2"}>History</NavLink> */}
                <NavLink to="/form" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder " : "nav-link px-2"}>Login Forms</NavLink>
                { <NavLink to="/sigup" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder " : "nav-link px-2"}>Sigup</NavLink>}

                <button 
                type="button" 
                onClick={() => isLogin ? dispatch(logout()) : navigate("/login")} 
                className="btn btn-primary"
                
                >
                    {
                        isLogin ? "Logout": "Login In"
                    }
               
                </button>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample02">
                    <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Link</a>
                    </li>
                    </ul>
                    <form role="search">
                    {/* <input class="form-control" type="search" placeholder="Search" aria-label="Search"> */}
                    </form>
                </div>
                     
{/* ************************************* */}
                <NavLink 
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    } 
                    to={"/profile"}>
                    <img 
                    src={isLogin ? profile.avatar : "https://eduport.webestica.com/assets/images/avatar/01.jpg"}
                    alt="" 
                    width={40} 
                    className="rounded-circle mx-3 my-2" />
                </NavLink>

                </div>
            </nav>
{/* ************************************* */}

    </div>
  )
}

