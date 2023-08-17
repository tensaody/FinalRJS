// import React from 'react'

// export default function Login() {
//   return (
//     <main>
//         <h1>Login Form</h1>
//     </main>
//   )
// }
// create login component
// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import secureLocalStorage from "react-secure-storage"
import { loginUser } from "../reduce/actions/authActions"
//import { loginUser } from "../redux/actions/authActions"

function Login(props){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLogin} = useSelector(state => state.authReducer)
    const {auth} = useSelector(state => state.authReducer)

    const [user, setUser] = useState({
        email: "john@mail.com",
        password: "changeme"
    })
    //const dispatch = useDispatch()
	// const {isLogin} = useSelector(state => state.authR)
	// const {auth} = useSelector(state => state.authR) // authR: we defined in rootReducer

    const onInputChangeHanler = (e) => {
        const {name, value} = e.target
        console.log(user)
        setUser(prevState => 
            {
                return{
                    ...prevState,
                    [name]:value 
                }
            }
        )
    }
    useEffect(() => {
        console.log(isLogin)
        console.log('in storage', secureLocalStorage.getItem('auth'))
        // console.log('auth', auth.data.access_token)
        // console.log("is Login: ", isLogin)
        // console.log("auth", auth)
        //secureLocalStorage.getItem("kiki")
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("onsubmit")
        console.log(user)
        dispatch(loginUser(user))
        .then(resp => {
            navigate("/")
        })

        // dispatch(loginUser(user))
        // .then((res) => {
        //     console.log('eis', res)
        //     navigate("/")
        // })
         
    }
    return(
        <main className="vh-100 d-flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit} className="w-25">
                    {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 className="h3 mb-3 mt-5">Please sign in</h1>

                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            name="email"
                            value={user.email}
                            onChange={onInputChangeHanler}
                            className="form-control" 
                            placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input 
                            type="password"
                            name="password" 
                            value={user.password}
                            onChange={onInputChangeHanler}
                            className="form-control"  
                            placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary text-center">© 2015 - 2023</p>
                </form>
        </main>
    )
}

export default Login