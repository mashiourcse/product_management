import React from "react";

function CarbohydratesCard() {
  return (
    <div className="card facts-card text-white" style={{ background: "navy" }}>
      <div className="card-body">
        <h5 className="card-title text-center" style={{fontSize: "30px"}}> Carbohydrates</h5>
        <p className="card-text">
          Carbohydrates are your body’s primary source of energy. They are
          usually found in food as sugars, fibers, and starches, which are
          processed by the digestive system into glucose which is used to fuel
          the body.
        </p>
        <p className="card-subtitle mb-2">Types of Carbohydrates:</p>
        <p className="card-text">
          <strong>Simple carbs:</strong>
          <br />
          - Includes naturally sweet foods, such as fruits, vegetables, and milk
          as well as foods that have sugar added to them throughout the
          manufacturing and refining process.
          <br />
          - More easily converted to glucose, which is utilized for energy.
          <br />- A portion of the wasted sugar (which is not required for
          energy) is stored in the liver and muscles, whereas the remainder is
          turned into fat.
        </p>
        <p className="card-text">
          <strong>Complex or starchy carbs:</strong>
          <br />
          - Complex or starchy carbohydrates take longer to digest, providing
          less energy and keeping you satisfied for a longer period of time.
          <br />
          - Whole grains, legumes, vegetables, and fruits are examples of
          healthy carbohydrates.
          <br />- The more processed and refined carbohydrate is, the faster it
          is broken down by the digestive system, providing a large amount of
          additional energy that fades quickly and leaves you with higher blood
          sugar levels and fat. Avoid readily digestible simple carbohydrates,
          such as refined bread, pasta, and sugary foods because they rapidly
          convert to energy and the unused energy to fat.
        </p>
      </div>
    </div>
  );
}

export default CarbohydratesCard;
