import React from "react";

const TextTwo = React.memo(() => {
  console.log("Render TextTwo");
  return <p>Independent Text 2</p>;
});

export default TextTwo;