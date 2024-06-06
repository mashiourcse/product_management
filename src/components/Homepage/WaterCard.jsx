import React from "react";

function WaterCard() {
  return (
    <div className="card facts-card " style={{ backgroundColor: "lightblue" }}>
      <div className="card-body">
        <h5 className="card-title text-center" style={{fontSize: "30px"}}> Water</h5>
        <p className="card-text">
          Water is crucial for survival, especially because it accounts for 60%
          of the human body. Since your body uses water constantly, you must
          keep replenishing your body with fluids. A few days without water can
          result in sickness.
        </p>
        <p className="card-text">
          Water does not contain any calories and will not provide you with
          energy but is essential for the process of energy production. Every
          cell in the body is reliant on water for various necessary bodily
          activities, such as:
        </p>
        <ul>
          <li>Waste disposal</li>
          <li>Temperature regulation</li>
          <li>Lubrication of joints, tissues, and organs</li>
          <li>Transportation of nutrients</li>
        </ul>
        <p className="card-text">
          Drink at least 8 cups of water daily and consume water-rich meals,
          particularly vegetables and fruits, to keep hydrated. Avoid soda and
          coffee because they are dehydrating.
        </p>
      </div>
    </div>
  );
}

export default WaterCard;
