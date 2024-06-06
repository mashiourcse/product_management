import React from "react";

function FatsCard() {
  return (
    <div className="card facts-card " style={{ backgroundColor: "#fff147" }}>
      <div className="card-body">
        <h5 className="card-title text-center" style={{fontSize: "30px"}}> Fats</h5>
        <p className="card-text">
          Fats are necessary to sustain a healthy body. Also called lipids or
          fatty acids, fats exist in a three-molecule structure called
          triglyceride and can be classified as healthy or unhealthy based on
          their advantages or risks to the body.
        </p>
        <p className="card-text">
          Healthy fats help lower blood pressure, combat heart disease, and help
          the body absorb micronutrients, such as vitamins and minerals. Certain
          types of fat can be produced by the body, whereas others must be
          obtained through diet or supplements. External fats are referred to as
          essential fats, and they are further classified into three types:
        </p>
        <ul>
          <li>
            <strong>Unsaturated fatty acids:</strong> Plant foods such as nuts,
            seeds, and plant oils (olive and almond oil)
          </li>
          <li>
            <strong>Saturated fatty acids:</strong> Meat and dairy products
          </li>
          <li>
            <strong>Trans fatty acids:</strong> Processed foods and deep-fried
            foods
          </li>
        </ul>
        <p className="card-text">
          In terms of daily intake, the recommended limit for fat is 44 to 77
          grams per day for a 2000-calorie diet. To avoid health risks such as
          heart disease, saturated fat consumption should be limited to less
          than 10% of total daily calories.
        </p>
      </div>
    </div>
  );
}

export default FatsCard;
