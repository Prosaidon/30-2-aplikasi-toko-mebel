import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const Loginsignup = () => {
  
  const API_URL = process.env.REACT_APP_API_URL;

  if(localStorage.getItem('auth-token')){
    window.location.replace("/")
  }
  // Nyambungin ke backend
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const [isTosChecked, setIsTosChecked] = useState(false);

  const handleTosChange = (e) => {
    setIsTosChecked(e.target.checked);
  };

  const handleContinueClick = () => {
    if (!isTosChecked) {
      alert('Please agree to the terms of use and privacy.');
    } else {
      state === "Login" ? login() : signup();
    }
      
  };

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

  const login = async () =>{
    
    console.log("Login Success");
    let responseData;
    await fetch(`${API_URL}/login`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    console.log("Login: ",responseData);
    if(responseData.succes){
      console.log(formData);
      let UserData = formData.email
      localStorage.setItem('user-id', UserData)
      localStorage.setItem('user-name', responseData.user.name)
      localStorage.setItem('auth-token',responseData.token);
      localStorage.setItem('isAdmin', responseData.isAdmin);
      if(responseData.isAdmin){
        window.location.replace("/admin");
        return 0
      }
      else{
        window.location.replace("/");
      }
    }
    else{
      alert(responseData.error)
    }


  }

  const signup = async () =>{
    // console.log("Signup Sucses",formData);
    let responseData;
    await fetch(`${API_URL}/signup`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    // console.log("Signup: ",responseData);
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }

  }
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          {state==="Sign up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
        </div>
        <button onClick={handleContinueClick} >Continue</button>
        {state==="Sign up"?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p> : <p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign up")}}>Click Here</span></p>}
        <div className='loginsignup-agree'>
          <input type='checkbox' id='terms' required
          onChange={handleTosChange} />
          <label htmlFor='terms'>By Continue, I agree to the terms of use & privacy.</label>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
