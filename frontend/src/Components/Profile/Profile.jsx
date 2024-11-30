import React from 'react';
import './Profile.css'
import { useState, useEffect } from 'react';
import Anon from '../Assets/people_icon.png'

const Profile = ()=> {

    
const [image,setImage] = useState(false);
const [UserDetails,setUserDetails] = useState({
  name: "",
  image:"",
  email: "",
  gender:"Male",
  address:""
})

const token = localStorage.getItem('auth-token');

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:4000/profile', {
          method: 'GET',
          headers: {
            'auth-token': token,
          },
        });
        const data = await response.json();
        
        if (data.success) {
          setUserDetails({
            name: data.user.name || '',
            image: data.user.image || '',
            email: data.user.email || '',
            gender: data.user.gender || 'Male',
            address: data.user.address || '',
          });
          setImage(data.user.image);
          localStorage.setItem('profile-image', data.user.image) 
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, [token]);

const imageHandler = (e) => {
  setImage(e.target.files[0]);
}
const changeHandler = (e) =>{
  setUserDetails({...UserDetails,[e.target.name]:e.target.value})
}
const Add_User = async () =>{
  console.log(UserDetails);
  
  let responseData;
  let User = UserDetails;

  let formData = new FormData();
  if(image){
    formData.append('user', image);
  }
  
  if(image){
    
    await fetch('http://localhost:4000/profile/image', {
      method:'POST',
      headers:{
          Accept: 'application/json',
          'auth-token' :token
      },
      body:formData,
    }).then((resp)=>resp.json()).then((data)=>{responseData=data;
      if(responseData.success){
        User.image = responseData.image
      }
    })
  }
  

  if (!responseData) {
    return <div className='Load'>Loading...</div>; 
  }
  else
  {
    User.image = responseData.image_url;
    console.log(User);
    await fetch('http://localhost:4000/profile',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        'auth-token' :token
      },
      body:JSON.stringify(User),
    }).then((resp)=>resp.json()).then((data)=>{
      data.success?alert("User Updated"):alert("Failed")
    })
  }

}

    return (
        <div className='pro-file'>
            <div className='profile-thumnail-img'>
                <label htmlFor="file-input">
                    <img src={image? (typeof image === 'string' ? image : URL.createObjectURL(image)) :Anon} className='profile-thumnail-img' alt="" />
                </label>
                <input type="file" id='file-input' name='image' hidden onChange={imageHandler} />
            </div>
            <div className="profile-itemfield">
                <p>User Name</p>
                <input value={UserDetails.name} onChange={changeHandler} type="text" name='name' placeholder='type here' />
            </div>
            <div className="profile-address">
                <div className="profile-itemfield">
                    <p>Address</p>
                    <input value={UserDetails.address} onChange={changeHandler} type="text" name='address' placeholder='type here' />
                </div>
            </div>
            <div className="profile-itemfield">
                <p>Gender</p>
                <select value={UserDetails.gender} onChange={changeHandler} name="gender" className='pro-file-selector' id="">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="profile-itemfield">
                    <p>Email</p>
                    <input value={UserDetails.email} onChange={changeHandler} type="text" name='email' placeholder='type here' />
                </div>
            <button onClick={()=>{Add_User()}} className='profile-btn'>
            Save
            </button>
            {/* <button onClick={()=>{Add_User()}} className='profile-btn'>
            Edit
            </button> */}
     </div>
    );
}

export default Profile;