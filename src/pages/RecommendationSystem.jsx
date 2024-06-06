import React, { useState } from "react";
import NutritionForm from "../components/NutritionForm";
import { SingleFood } from "../components/SingleFood";
import { Card } from "../components/Card";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useNutritionContext } from "../../Context/NutritionContext";

const App = () => {
  const { inputData } = useNutritionContext();

  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(6);
  const [startInput, setStartInput] = useState("1");
  const [endInput, setEndInput] = useState("5");

  let FoodData = useQuery(api.brandedFoods.get, { inputData: inputData });

  const filterByIndexRange = () =>
    FoodData?.filter((_, index) => index >= startIndex - 1 && index < endIndex);

  const handleFilter = () => {
    if (startInput !== "" && endInput !== "") {
      setStartIndex(parseInt(startInput));
      setEndIndex(parseInt(endInput));
    }
  };

  return (
    <div className="row Recommendation_System">
      <div className="col-12 col-xl-3 col-lg-3 col-md-12" id="sticky-sidebar">
        <div className="nutrition-form sticky-top">
          <NutritionForm />
        </div>
      </div>
      <div className="col-12 col-xl-9 col-lg-9 col-md-12" id="main">
        <div className="card food-container">
          <h2 className="text-center btn btn-info">Recommended Food</h2>
          <div className="recommend-food">
            <div className="filter-inputs text-center">

              <span className="btn btn-info m-2">Total {FoodData?.length} items</span>
              <input type="number" className="btn btn-info" style={{width: "105px"}} value={startInput} onChange={(e) => setStartInput(e.target.value)}  />
              <input type="number" className="btn btn-info m-2" style={{width: "105px",}} value={endInput} onChange={(e) => setEndInput(e.target.value)}  />
              <button onClick={handleFilter}  className="btn btn-success">Filter</button>

            </div>
            {filterByIndexRange()?.map((singlefoodData, index) => {
              return (
                <div className="single-item" key={index}>
                  <Card
                    SingleFoodData={singlefoodData}
                    index={index + startIndex - 1}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
