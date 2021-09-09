import React from "react";

const Food = () => {
  const foods = ["김밥", "떡볶이", "마라탕"];

  return (
    <div>
      <h1>hello food</h1>
      {foods.map((f) => {
        return <div>{f}</div>;
      })}
    </div>
  );
};

export default Food;
