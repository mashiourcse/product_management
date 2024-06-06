import React from "react";

let data = [
  `Protein is the most abundant component of the human body; every living
    cell in the body contains protein. Protein is made up of 20 amino
    acids, nine of which are not produced in the body and are therefore
    referred to as essential amino acids. These essential amino acids must
    be obtained from food.`,
];
function ProteinCard() {
  return (
    <div
      className="card facts-card text-white"
      style={{ backgroundColor: "chocolate" }}
    >
      <div className="card-body">
        <h5 className="card-title text-center" style={{fontSize: "30px"}}> Protein</h5>
        <article className="card-text animate">
          Protein is the most abundant component of the human body; every living
          cell in the body contains protein. Protein is made up of 20 amino
          acids, nine of which are not produced in the body and are therefore
          referred to as essential amino acids. These essential amino acids must
          be obtained from food.
        </article>
        <article className="card-text">
          Protein can be found in meat, dairy products, nuts, and some grains
          and legumes. Meat and other animal products include whole proteins;
          they provide all the amino acids that the body cannot produce. Plant
          proteins are insufficient. To receive all the amino acids your body
          requires, you must combine different plant proteins.
        </article>
        <article className="card-text">
          It is important to consume protein daily because your body does not
          store it like it does fats or carbs.
        </article>
      </div>
    </div>
  );
}

export default ProteinCard;
