import React, {useState} from 'react'
import axios from "axios";
import "../css/Login.css"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa6";
import ButtonLoading from '../components/Loading-with-button';





const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Api url
      const url = "https://blogg-api-v1.onrender.com/login";
  
      //Input Validation
      const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
      const passwordValidate = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/; 
  
      const isValidate = emailValidate.test(email.trim()) && passwordValidate.test(password.trim())
      
    //   if(isValidate){
    //       toast.success("Login Successful");
    //       // setformValid(false)
    //       setTimeout(()=>{
    //           navigate("/")
    //       },5000)
    //   }else{
          
    //       // toast.error("Enter the Field Bastard");
    //   }
  
      
      // if(!emailValidate.test(email.trim())){
      //     toast.error("Please enter valid email");
      // }
  
      // if(!passwordValidate.test(password.trim())){
      //     toast.error('Invalid password')
      // }
  
      if (!email || !password) {
        toast.error("Enter the Field Bastard");
      }
  
      try {
          //sending form data to server
          setloading(true)
         
        const { data } = await axios.post(url, {
          email,
          password,
        });
        
        //check for successful registration
       if(!data?.error){
        setloading(false)
       console.log(data)
         toast.success("Login Successful")
          // redirect user to the login Page
          setTimeout(()=>{
              navigate("/")
          },5000) 
      console.log(data);
      
        } 
      } catch (error) {
        const { err } = err?.response?.data
        toast.error(error)  
        setloading(false)
      }
    };
  //   console.log(name);
  //   console.log(email);
  //   console.log(password);
    return (
      <div>
        <ToastContainer /> 
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="form-control p-3 my-3 w-100"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-css">
            <input
              type={showPassword ? "text" : "password" }
              placeholder="Password"
              className="form-control p-3 input-css"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span onClick={()=>
                setShowPassword(!showPassword)
            }>
                {showPassword ? (<FaRegEye/>) : (<FaEyeSlash />)}
                
                
            </span>
          </div>
            <button className="btn btn-primary my-3 w-100" disabled={loading} onClick={handleSubmit}>
             {loading ? (<>
              <span
                class="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status">Loading...</span>
              </>) :( 'Login')} 
            </button>

        </form>
      </div>
    );
  };


export default Login
