import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const CreateOrderFinal = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  console.log(location.state);
  useEffect(() => {
    const initialSelectedProducts = location.state || [];
    setSelectedProducts(
      initialSelectedProducts.map(product => ({
      ...product,
      // variants: product.variants.map(variant => ({ ...variant, checked: false, quantity: 0 }))
      
      variants: product.variants.filter( variant => variant.checked)
    })));
    var details = [];
    var total_quantity = 0;
    selectedProducts.map((product, index)=>{
        product.variants.map((variant,i)=>{
          console.log(variant);
          let variant_id = variant.id;
          let quantity = variant.quantity;
          details.push({variant_id, quantity});
          total_quantity += quantity;
        })
    })

    setFormData( { ...formData, details: details, total_quantity: total_quantity});

  }, [location.state]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
   total_quantity: '',
    details: []
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
const handleSubmit = async (e) => {
    e.preventDefault();
   
    const url = "https://reactjr.coderslab.online/api/orders";
    
    try {
      const res = await axios.post(url, formData);
      setResponse(res.data);
      console.log(response);
  } catch (err) {
      setError(err);
      console.log(error);
  }
  };
  console.log(selectedProducts)
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
        <button className='btn btn-primary mr-2' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
