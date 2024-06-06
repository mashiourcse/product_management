import React from "react";

function MineralsCard() {
  return (
    <div
      className="card facts-card text-white"
      style={{ backgroundColor: "purple" }}
    >
      <div className="card-body">
        <h5 className="card-title text-center" style={{fontSize: "30px"}}>Minerals</h5>
        <p className="card-text">
          Minerals are inorganic substances that retain their chemical structure
          and are more stable. However, other factors, such as soil depletion,
          can reduce the mineral content in food.
        </p>
        <p className="card-text">
          Minerals help with a variety of body functions, such as bone formation
          and maintenance, muscular function, immunity, and energy production.
          Mineral deficiencies can cause a variety of health issues, including
          fragile bones, fatigue, and a weakened immune system.
        </p>
        <p className="card-text">Minerals are classified into two types:</p>
        <ul>
          <li>
            <strong>Major minerals:</strong> The body needs and stores a lot of
            calcium, magnesium, and other minerals.
          </li>
          <li>
            <strong>Trace minerals:</strong> These are present in small
            quantities and include chromium, selenium, and zinc.
          </li>
        </ul>
        <p className="card-text">
          For example, magnesium is involved in over 300 enzyme systems,
          including protein synthesis, muscle and neuron function, blood glucose
          management, and blood pressure regulation. Many people are at risk of
          magnesium deficiency due to chronic conditions, medications, and
          inadequate intake of certain foods.
        </p>
      </div>
    </div>
  );
}

export default MineralsCard;
