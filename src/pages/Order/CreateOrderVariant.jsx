import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const CreateOrderVariant = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productIndex, setProductIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const initialSelectedProducts = location.state || [];
    setSelectedProducts(initialSelectedProducts.map(product => ({
      ...product,
      variants: product.variants.map(variant => ({ ...variant, checked: false }))
    })));
  }, [location.state]);

  const handleVariantSelection = (productIndex, id) => {
    console.log({productIndex,id})
    console.log(selectedProducts[productIndex].variants.find(variant => variant.id === id))
    setSelectedProducts(prevSelected => {
      const updatedProducts = [...prevSelected];
      const selectedProduct = updatedProducts[productIndex];
      const variantIndex = selectedProduct.variants.findIndex(variant => variant.id === id);
      if (variantIndex !== -1) {
        selectedProduct.variants[variantIndex].checked = !selectedProduct.variants[variantIndex].checked;
      }
      return updatedProducts;
    });
  };

  return (
    <div className='product'>
      <div className='header'>
        <h4 className=''>Order</h4>
      </div>
      <div className='table'>
        <div className='top-section'>
          <select
            className='btn btn-primary'
            onChange={(e) => setProductIndex(e.target.value)}
            name="product"
            value={productIndex}
          >
            {selectedProducts.map((product, index) => (
              <option key={index} value={index}>{product.name}</option>
            ))}
          </select>
          <input className='right-side mb-2' type="text" placeholder='search' />
        </div>
        <div className='main'>
          <table id="example" className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Color</th>
                <th>Specification</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts[productIndex]?.variants?.map((variant, index) => (
                <tr key={index}>
                  <td>{variant.id}</td>
                  <td>{variant.color}</td>
                  <td>{variant.specification}</td>
                  <td>{variant.size}</td>
                  <td><input type='number' defaultValue='0' /></td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={variant.checked}
                      onChange={() => handleVariantSelection(productIndex, variant.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
          <div className='submit-group'>
            <Link to="/" className='btn btn-primary mr-2' onClick={() => setSelectedProducts([])}>Cancel</Link>
            <Link to='/create-order-variant' state={selectedProducts} className='btn btn-primary mr-2'>Next</Link>
          </div>
        </div>
      </div>
      {/* Pagination section if needed */}
    </div>
  );
};

export default CreateOrderVariant;
