import React from 'react'
import '../Sidebar/Sidebar.css'
import logout_icon from '../Assets/logout.png'
import Anon from '../Assets/people_icon.png'

const handleClick = ()=>{

  const confirmLogout = window.confirm("Are you sure you want to log out?");
  if(confirmLogout){
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-id');localStorage.removeItem('user-name'); 
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('profile-image');
    window.location.replace("/"); 
    
  }
  
}

const DashBar = ({  setSidebar }) => {
    return (
      <div className='sidebar'>
        <div className='dashbar-item' onClick={() =>  setSidebar('Profile')}>
          <img src={Anon} alt="Profile" id="logout-icon" className='dashbar-item'/>
          <p>Profile</p>
        </div>
        {/* <div className='dashbar-item' onClick={() =>  setSidebar('History')}>
          <img src="https://icones.pro/wp-content/uploads/2022/03/historique-icone-de-l-historique-noir.png" alt="History" id="logout-icon" />
          <p>History</p>
        </div> */}
        <div className='dashbar-item' onClick={() =>  setSidebar('Reviews')}>
          <img src="https://e7.pngegg.com/pngimages/871/595/png-clipart-customer-review-information-others-hand-service.png" alt="History" id="logout-icon" />
          <p>Reviews</p>
        </div>
        <div className='dashbar-item' onClick={() =>handleClick()}>
        <img src={logout_icon} alt="logout" id="logout-icon" />
          <p>Logout</p>
        </div>
      </div>
    );
  };

export default DashBar