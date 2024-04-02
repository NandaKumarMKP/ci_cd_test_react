import React from "react";

function Counter({ text, count }) {
  console.log("Rendering Counter - " + text);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Counter);
