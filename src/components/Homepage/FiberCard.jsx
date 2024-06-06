import React from "react";

function FiberCard() {
  return (
    <div
      className="card facts-card text-white"
      style={{ backgroundColor: "darkgreen" }}
    >
      <div className="card-body">
        <h5 className="card-title text-center" style={{fontSize: "30px"}}> Fiber</h5>
        <p className="card-text">
          Plants that contain fiber include fruits, vegetables, and grains.
          Fiber is divided into two types; both of which are required for good
          health:
        </p>
        <h6 className="card-subtitle mb-2 ">Types of Fiber:</h6>
        <p className="card-text">
          <strong>Soluble fiber:</strong>
          <br />
          - Enhances digestion, allowing the stomach to empty more slowly.
          <br />
          - Nutrients are absorbed gradually, allowing for a consistent flow of
          energy.
          <br />- Helps reduce dangerous low-density lipoprotein cholesterol.
        </p>
        <p className="card-text">
          <strong>Insoluble fiber:</strong>
          <br />
          - Does not dissolve in water and remains mainly intact through the
          digestive system.
          <br />
          - Helps the digestive system run smoothly.
          <br />- Prevents intestinal disorders.
        </p>
        <p className="card-text">
          You should consume about 18 grams of fiber a day. To include more
          fiber in your diet, choose whole grain foods over refined grains, eat
          at least 2 servings of fruit a day, and opt to incorporate peas,
          lentils, and beans into your meals.
        </p>
      </div>
    </div>
  );
}

export default FiberCard;
