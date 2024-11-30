import './CSS/Dashboard.css'
import React from 'react'
import DashBar from '../Components/DashBar/DashBar'
import ReviewList from '../Components/ReviewList/ReviewList'
import Profile from '../Components/Profile/Profile'
import History from '../Components/History/History'
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
        
        </div>
    );
}

export default Dashboard;