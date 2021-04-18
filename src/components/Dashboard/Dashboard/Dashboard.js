import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='row m-0'>
        <div className='col-md-3 p-0'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <h2>Welcome to Dashboard.</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
