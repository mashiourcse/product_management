import React, { useState } from 'react'

export const AccordionSection = ({ name,data, index }) => {

    const accordionId = `accordion-${index}`; 
  const [arrow, setArrow] = useState(true);
  let arrelement = (arrow)? <i className="fa fa-arrow-down" aria-hidden="true" ></i> : <i className="fa fa-arrow-up" aria-hidden="true"></i>;
  let changeArrow = () => {
    setArrow(!arrow);
    
  }

  return (
    <div id={accordionId} className="accordion">
<div className="card">
 {/* card header */}
<div
          className="card-header d-flex justify-content-between"
          id={`heading${index}`}
        >
<h5>{name}</h5>
          <h5 className="mb-0 ">
            <button
              onClick={changeArrow}
              className="btn btn-link"
              data-toggle="collapse"
              data-target={`#collapse${index}`}
              aria-expanded="true"
              aria-controls={`collapse${index}`}
            >
              {
                arrelement
              }
              



            </button>
          </h5>
</div>
 {/* card header  */}

 {/* card body */}
<div
          id={`collapse${index}`}
          className="collapse"
          aria-labelledby={`heading${index}`}
          data-parent={`#${accordionId}`}
        >
<div className="card-body">
<span className="card-text">{data}</span>
</div>
</div>


</div>

</div>
  )
}
