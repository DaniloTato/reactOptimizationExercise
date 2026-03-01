import React from "react";

/*
Since this component has no props,
it will render only once.
*/
const TextOne = React.memo(() => {
  console.log("Render TextOne");
  return <p>Independent Text 1</p>;
});

export default TextOne;