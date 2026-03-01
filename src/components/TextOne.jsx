import React from "react";

/*
React.memo prevents re-render if:
- Props do not change
Since this component has NO props,
it will render only ONCE.
*/
const TextOne = React.memo(() => {
  console.log("Render TextOne");
  return <p>Independent Text 1</p>;
});

export default TextOne;