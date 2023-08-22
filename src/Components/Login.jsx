import React,{useState} from 'react';
import { redirect } from "react-router-dom";
import  Image  from '../../src/assets/logo.png';


const Login = () => {

    const[isloading,Setisloading] = useState(false)
    const [user,setUser] = useState({username:"" , password:""})


    const onChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleLogin =async()=>{
        Login(user.username,user.password);
    }

    const Login = async (username,password)=>{
        Setisloading(true)
        const req = await fetch("https://gold-adventurous-perch.cyclic.cloud/api/auth/signin",{
            method:"POST",
         headers:{
            "Content-type":"application/json"
      },
        body:JSON.stringify({username,password})
        })
        if(req.status==200){
            const json = await req.json() 
            Setisloading(false) 
            localStorage.setItem("auth-token",json._id) 
            
            setUser({...user,username:"" })
            setUser({...user,password:"" })

            window.location.replace('/')
            
            
        }
        else{ 
            alert("Login Failed")
            const json =await req.json()
            console.log(json)
            Setisloading(false)
        }
        
    }

    return (
        <section className="mb-5">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src={Image}
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: '1rem 0 0 1rem',marginTop:'5rem' }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 text-center d-flex align-items-center">
                                    <div className="card-body p-2 p-lg-5 text-black">
                                        <form>
                                            <div className="d-flex text center align-items-center mb-3 pb-1">
                                                <span className="h1 fw-bold text-center mb-0">AZA-E-HUSSAIN</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                                                Sign in to Manage  <i>www.aza-e-hussain.com</i>
                                            </h5>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="form2Example17"
                                                    name='username'
                                                    className="form-control form-control-lg"
                                                    onChange={onChange}
                                                    value={user.username}
                                                />
                                                <label className="form-label" htmlFor="form2Example17">
                                                    Email address
                                                </label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    name='password'
                                                    id="form2Example27"
                                                    onChange={onChange}
                                                    className="form-control form-control-lg"
                                                    value={user.password}
                                                />
                                                <label className="form-label" htmlFor="form2Example27">
                                                    Password
                                                </label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" onClick={handleLogin} type="button">
                                                    {!isloading && (<>Login</>)}  {isloading && (<><i class="fa-solid fa-circle-notch fa-spin" style={{color: "#ff000d"}}></i></>)}
                                                </button>
                                            </div>

                                        
                                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                                                Don't have an account? <a style={{ color: '#393f81' }}>Sorry but this portal is only for authorized user no outsider allowed</a>
                                            </p>
                                            <a href="#!" className="small text-muted">
                                                Terms of use.
                                            </a>
                                            <a href="#!" className="small text-muted">
                                                Privacy policy
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
