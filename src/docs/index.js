import React from "react";
import { render } from "react-dom";
import MAMFutbolContainer from "../../lib/containers/MAMFutbolContainer";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <MAMFutbolContainer isMobile={true} mamId={'111705'} />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
