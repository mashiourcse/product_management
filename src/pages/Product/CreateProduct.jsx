import React from 'react'

export const CreateProduct = () => {
  return (
    <div className='product'>
       <div className='header'>
       <h4 className=''>Product</h4>

       </div>
    <div className='details'>
      <h5>Create Product</h5>
    <div className='form'>
       

       <div class='row'>
  <div class='col-6 mb-3'>
    <input class='form-control' type='text' placeholder='Name'/>
  </div>
  <div class='col-6 mb-3'>
    <input class='form-control' type='text' placeholder='Brand'/>
  </div>
  <div class='col-6 mb-3'>
    <input class='form-control' type='text' placeholder='Type'/>
  </div>
  <div class='col-6 mb-3'>
    <input class='form-control' type='text' placeholder='Origin'/>
  </div>
</div>

       </div>
    </div>
    <div className='details'>
      <h5>Variants</h5>
    <div className='form'>
       
    <div>
      {Array.from({ length: 4 }, (_, index) => (
        <div className="row" key={index}>
          <div className="col-2 mb-3">
            <input className="form-control" type="text" placeholder="Color" />
          </div>
          <div className="col-5 mb-3">
            <input className="form-control" type="text" placeholder="Specification" />
          </div>
          <div className="col-2 mb-3">
            <input className="form-control" type="text" placeholder="Size" />
          </div>
          <div className="col-3 mb-3">
            <button className="btn btn-primary mr-2">+</button>
            <button className="btn btn-primary ml-2">-</button>
          </div>
        </div>
      ))}
    </div>

       </div>
    </div>

    <div className='submit-group'>
    <button className='btn btn-primary mr-2'>Cancel</button>
    <button className='btn btn-primary mr-2'>Submit</button>
    </div>
    </div>
  )
}
