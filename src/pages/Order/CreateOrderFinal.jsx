import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const CreateOrderFinal = () => {

  const location = useLocation();
  console.log(location.state);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
   total_quantity: '',

  });
  const res = {
    name: '',
    email: '',
    address: '',
   total_quantity: '', 
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  console.log(formData)
  return (
    <div className='product'>
      <div className='header'>
        <h4 className=''>Information</h4>
      </div>
      <div className='details'>
        <h5>Create Product</h5>
        <div className='form'>
          <div className='row'>
            <div className='col-6 mb-3'>
              <input
                className='form-control'
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='col-6 mb-3'>
              <input
                className='form-control'
                type='text'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='col-6 mb-3'>
              <input
                className='form-control'
                type='text'
                name='address'
                placeholder='Address'
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className='col-6 mb-3'>
              <input
                className='form-control'
                type='text'
                name='total_quantity'
                placeholder='Total_quantity'
                value={formData.total_quantity}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>


      <div className='submit-group'>
        <button className='btn btn-primary mr-2' onClick={()=>{
          setFormData(res)
        }}>Back</button>
        <button className='btn btn-primary mr-2' >Submit</button>
      </div>
    </div>
  );
};
