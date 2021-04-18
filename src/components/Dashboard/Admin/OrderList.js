import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    fetch('https://obscure-tundra-49850.herokuapp.com/allOrder')
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);

  return (
    <div className='order-list'>
      <div className='row m-0'>
        <div className='col-md-3 p-0'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Service</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrder.map((order, ind) => (
                <tr>
                  <td>{ind + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.serviceName}</td>
                  <td>
                    <select>
                      <option value='Pending'>Pending</option>
                      <option value='On going'>On going</option>
                      <option value='Done'>Done</option>
                    </select>
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

export default OrderList;
