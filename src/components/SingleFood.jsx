import React from "react";

import { ChartComponent } from "./ChartComponent";
import { Card } from "./Card";

let SingleFoodData = {
  header: "Nutrient",
  labels: ["Proteins", "Carbs", "Fats", "Vitamins", "Minerals", "Water"],
  data: [30, 40, 20, 5, 3, 2],
};
export const SingleFood = ({ SingleFoodData }) => {
  return (
    <>
      <div className="row">
        <Card
          SingleFoodData={SingleFoodData}
          className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
        />
        {/* <ChartComponent
          className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6"
          labels={SingleFoodData.labels}
          data={SingleFoodData.data}
          header={SingleFoodData.header}
        /> */}
      </div>
    </>
  );
};
