// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { FaRegEye, FaEyeSlash } from "react-icons/fa6";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false)

//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Api url
//     const url = "https://blogg-api-v1.onrender.com/register";

//     //Input Validation
//     const nameValidate = /^[a-zA-Z ]{3,30}$/
//     const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
//     const passwordValidate = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/; 

//     const isValidate = nameValidate.test(name.trim()) && emailValidate.test(email.trim()) && passwordValidate.test(password.trim())
    


//     if(!nameValidate.test(name.trim())){
//         toast.error("Name must be 3 to 30 character");

//     } 
    
//     if(!emailValidate.test(email.trim())){
//         toast.error("Please enter valid email");
//     }

//     if(!passwordValidate.test(password.trim())){
//         toast.error('Your password must have at least a uppercase, lowercase and a symbol')
//     }

//     // if (!name || !email || !password) {
//     //   toast.error("Enter the Field Bastard");
//     // }

//     try {
//         //sending form data to server
//       const { data } = await axios.post(url, {
//         username: name,
//         email,
//         password,
//       });
//       //check for successful registration
//       if(isValidate && !data?.error){
//         toast.success("Registration successful");
//         // setformValid(false)
//         setTimeout(()=>{
//             navigate("/login")
//         },5000)
//     }else{
        
//         // toast.error("Enter the Field Bastard");
//     }
//   }
//      catch (error) {
//       console.log("error");
//     }
//   };
// //   console.log(name);
// //   console.log(email);
// //   console.log(password);
//   return (
//     <div>
//       <ToastContainer /> 
//       <h1>Register Page</h1>
//       <form className="">
//         <div>
//           <input
//             type="text"
//             placeholder="Name"
//             className="form-control p-3 w-100"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             className="form-control p-3 my-3 w-100"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </div>
//         <div className="input-css">
//           <input
//             type={showPassword ? "text" : "password" }
//             placeholder="Password"
//             className="form-control p-3"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <span onClick={
//             setShowPassword(!showPassword)
//           }>
//             {showPassword ? (<FaRegEye/>) : (<FaEyeSlash/>)}
            
            
//           </span>
//         </div>
//         <button className="btn btn-primary my-3 w-100" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  // hooks
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api url
    const url = "https://blogg-api-v1.onrender.com/register";

    // validation
    if (!username || !email || !password) {
      console.log("Enter all fields");
      return toast.error("Enter all fields");
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
      return toast.error("invalid email address"); 
    }

    // Username validation
    const userNameTrim = username.trim();
    if(!username || userNameTrim.length < 3){
      return toast.error("username must be 3 characters and above");
    }

    // Username validation
    const pwdTrim = password.trim();
    if(!password || pwdTrim.length < 6){
      return toast.error("Enter a valid password");
    }

    try {
        // sending form data to server
      const { data } = await axios.post(url, {
        username,
        email,
        password,
      });

      // check for successful registration
      if(!data?.error){
        toast.success("Registration successful")
        // redirect user to login
        setTimeout(()=>{
            navigate("/login")
        }, 5000)
      }else{
        toast.error("Registration failed")
      }
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data
      toast.error(error)
    }
  };

  console.log(username);
  return (
    <div>
      <ToastContainer />
      <h1>Register Page</h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            className="form-control p-3"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="">
          <input
            className="form-control p-3 my-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-css">
          <input
            className="form-control p-3"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
           <span onClick={()=>setShowPassword(!showPassword)}>
            {showPassword?  (<FaEye className="icon"/>) :(
             <FaEyeSlash className="icon"/>
          )}
          </span>
        </div>

        <button
          className="btn  btn-primary my-3 p-3 w-100"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
