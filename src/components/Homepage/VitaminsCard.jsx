import React from "react";

function VitaminsCard() {
  return (
    <div
      className="card facts-card text-white"
      style={{ backgroundColor: "coral" }}
    >
      <div className="card-body">
        <h5 className="card-title text-center" style={{fontSize: "30px"}}> Vitamins</h5>
        <p className="card-text">
          Vitamins are complex chemical molecules that support nearly every
          function in the body, including the immune system, brain, and
          neurological system. Many of them help convert food into energy using
          glucose, fat, and protein in the body. They help regulate body growth
          and development, produce red blood cells, and protect you against
          dangerous free radicals.
        </p>
        <p className="card-text">
          Only trace amounts of vitamins and minerals are required for the body
          to function normally and avoid sickness. To acquire more vitamins in
          your diet, consume as many fresh and unprocessed foods as possible.
          Other tips include the following:
        </p>
        <ul>
          <li>Choose locally grown fruits and vegetables.</li>
          <li>Cook your vegetables as lightly as possible.</li>
          <li>Avoid slow cookers and time-consuming cooking methods.</li>
          <li>
            Microwaving, steaming, or pressure-cooking vegetables are the best
            ways to preserve their vitamin content.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VitaminsCard;
