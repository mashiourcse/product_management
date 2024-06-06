import React, { useState, useEffect } from "react";

// let nutritionData = {
//   proteins: "15",
//   fats: "15",
//   carbs: "15",
//   vitamins: "15",
//   minerals: "20",
//   water: "20",
// }
function InputForm2({nutritionData, localData,label}) {
  const [formData, setFormData] = useState(nutritionData);

  useEffect(() => {
    // Restore local storage value to input
    //let localValue = JSON.parse(localStorage.getItem("nutritionData"));

    if (localData !== null) {
      console.log("Proceed");
      let nutritionData = localData.data.data;
      let updatedFormData = { ...formData };
      console.log(updatedFormData)
      nutritionData.forEach((item, index) => {
        updatedFormData[item.name.toLowerCase()] = item.value;
      });

      setFormData(updatedFormData);
    } else {
      console.log("local storage is empty");
    }
  }, []); // Run this effect only once on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePercentageChange = (e) => {
    // Percentage input calculation
    const getVal = parseInt(e.target.value);
    if (getVal <= 100) {
      const otherFields = Object.keys(formData).filter(
        (key) => key !== e.target.name
      );
      const change =
        100 -
        otherFields.reduce((prev, key) => prev + parseInt(formData[key]), 0) -
        getVal;
      const oldRest = 100 - (getVal + change);

      const updatedFormData = { ...formData };

      otherFields.forEach((key) => {
        const old = parseInt(formData[key]);
        updatedFormData[key] =
          Math.round((old + (old / oldRest) * change) * 100) / 100;
      });

      setFormData(updatedFormData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Taking form data and saving it to local storage input calculation
    const jsonData = JSON.stringify({
      data: {
        label: label,
        data: Object.keys(formData).map((key) => ({
          name: key.charAt(0).toUpperCase() + key.slice(1),
          value: formData[key],
        })),
      },
    });

    localStorage.setItem(label, jsonData);

    // window.location.reload();
  };

  return (
    <div className="input-data card">
      <div className="form-container">
        <form id="nutrition-form" onSubmit={handleSubmit}>
     
          {Object.keys(formData).map((key) => (
            <div key={key} className="input-group">
              <label htmlFor={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}(%):
              </label>
              <input
                className="nutrition"
                type="number"
                id={key}
                name={key}
                value={formData[key]}
                onChange={
                  key === "percentage"
                    ? handlePercentageChange
                    : handleInputChange
                }
                min="0"
                max="100"
                width="5"
              />
              <br />
            </div>
          ))}
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default InputForm2;
