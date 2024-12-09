import React from 'react'
import './UserList.css'
import { useState, useEffect } from 'react';
import remove_icon from '../Assets/remove-icon.png'
import Anon from '../Assets/people_icon.png'
export default function UserList() {
        
    const API_URL = process.env.REACT_APP_API_URL;
    const [allUsers,setallUsers] = useState([]);
    
    const token = localStorage.getItem('auth-token')
    const fetchInfo = async ()=>{
      await fetch (`${API_URL}/all-users`,{
        method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'auth-token' : token
            }
      })
      .then((res)=>res.json())
      .then((data)=>{setallUsers(data)});
    }

    useEffect(()=>{
      fetchInfo();
    }, [])

    const removeUser = async(id)=>{
        const userConfirmed = window.confirm('Yakin ingin menghapus User?');
        if(userConfirmed){
          await fetch(`${API_URL}/remove-user`, {
            method:'DELETE',
            headers:{
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'auth-token' : token
            },
            body:JSON.stringify({email:id})
          })
          await fetchInfo();
        }
  
      }

      const usersArray = allUsers.user || [];
      
  return (
    <div className='list-user'>
    <h1>All Mebelify Users List</h1>
    <div className="listuser-format-main">
     <p>User's image</p>
     <p>User's name</p>
     <p>Email</p>
     <p>Address</p>
     <p>gender</p>
     <p>Remove</p>
    </div>
    <div className="listuser-alluser">
     <hr />
       {usersArray.map((user,index)=>{
         return <> 
         <div key={index} className="listuser-format-main listuser-format">
           <img src={user.image? user.image: Anon} alt="" className="listuser-user-icon" />
           <p>{user.name?user.name: <p className='status'>Empty</p>}</p>
           <p>{user.email}</p>
           <p>{user.address?user.address : <p className='status'>Empty</p>}</p>
           <p>{user.gender? user.gender : <p className='status'>Empty</p>}</p>
           <img onClick={()=>{removeUser(user.email)}} src={remove_icon} alt="" className="listuser-remove-icon" />
         </div>
        <hr />
         </>
       })}
    </div>
 </div>
  )
}
