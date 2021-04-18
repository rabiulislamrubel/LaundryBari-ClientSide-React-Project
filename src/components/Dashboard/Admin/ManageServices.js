import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
  const [manageData, setManageData] = useState([]);
  useEffect(() => {
    fetch('https://obscure-tundra-49850.herokuapp.com/manage')
      .then((res) => res.json())
      .then((data) => setManageData(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://obscure-tundra-49850.herokuapp.com/delete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className='manage-service'>
      <div className='row m-0'>
        <div className='col-md-3 p-0'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>Service Name</th>
                <th scope='col'>Price</th>
                <th scope='col'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {manageData.map((data, ind) => (
                <tr>
                  <td>{ind + 1}</td>
                  <td>{data.serviceName}</td>
                  <td>${data.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className='btn btn-danger'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
