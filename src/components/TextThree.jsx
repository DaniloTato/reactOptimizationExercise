import React from "react";

const TextThree = React.memo(() => {
  console.log("Render TextThree");
  return <p>Independent Text 3</p>;
});

export default TextThree;