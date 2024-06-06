import { useState } from 'react';
import logo from './logo.svg';

import { ChartComponent } from './components/ChartComponent';
import InputForm from './components/InputForm';
import InputForm2 from './components/inputForm2';
import NutritionForm from './components/NutritionForm';
import DoughnutChart from './components/DoughnutChart';
import { FoodCard } from './components/foodCard';
import { SingleFood } from './components/SingleFood';

const App = () => {

let FoodData = [
  {
    "header": "Nutrient2",
    "description": "Fruit Bubble gum",
    "calories": "3432",
    "brandOwner": "America's original",
    "brandedFoodCategory": "Chewing Gum & Mints",
    "servingSize": 8,
    "servingSizeUnit": "g",
    "labels": ["Proteins", "Carbs", "Fats", "Vitamins", "Minerals", "Water"],
    "data": [30, 40, 20, 5, 3, 2]
  },
  {
    "header": "Nutrient3",
    "description": "Choco Delight gum",
    "calories": "2500",
    "brandOwner": "Taste Treats Inc.",
    "brandedFoodCategory": "Chewing Gum & Mints",
    "servingSize": 8,
    "servingSizeUnit": "g",
    "labels": ["Proteins", "Carbs", "Fats", "Vitamins", "Minerals", "Water"],
    "data": [25, 35, 15, 4, 2, 1]
  },
  {
    "header": "Nutrient4",
    "description": "Minty Fresh gum",
    "calories": "1800",
    "brandOwner": "Fresh & Cool Corp.",
    "brandedFoodCategory": "Chewing Gum & Mints",
    "servingSize": 8,
    "servingSizeUnit": "g",
    "labels": ["Proteins", "Carbs", "Fats", "Vitamins", "Minerals", "Water"],
    "data": [20, 30, 10, 3, 1, 0]
  }
]
;
  return (
    <div>
      <div className='Recommendation_System'>
        <NutritionForm className=''/>
        <div className='scrollable-content' >
          <div className='recommend-food'>
           {
            FoodData.map( (singlefoodData, index)=>{
              return <div className='row single-item'>
              <SingleFood SingleFoodData={singlefoodData} key={index} />
              </div>
            })
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
