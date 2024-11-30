import './CSS/Admin.css'
import React from 'react'
import DashBar from '../Components/DashBar/DashBar'
import ReviewList from '../Components/ReviewList/ReviewList'
import Profile from '../Components/Profile/Profile'
import History from '../Components/History/History'
import logout_icon from '../Components/Assets/logout.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Dashboard = ()=> {
    const [sidebar, setSidebar] = useState('Reviews');

    const renderComponent = () => {
        switch(sidebar){
            case 'Profile':
                return <Profile/>;
            case 'History' :
                return <History/>;
            case 'Reviews':
                return <ReviewList/>;
            default:
                return <Profile/>;
    }
};

    return (
        <div className='dash-board'>
            <DashBar sidebar={sidebar} setSidebar={setSidebar} />
            {renderComponent()}
            <Link  onClick={() => { localStorage.removeItem('auth-token');localStorage.removeItem('user-id');localStorage.removeItem('user-name'); window.location.replace("/"); localStorage.removeItem('isAdmin') }}>
                <img src={logout_icon} alt="logout" id="logout-icon" />
            </Link>
        </div>
    );
}

export default Dashboard;