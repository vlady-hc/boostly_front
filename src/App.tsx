import React from "react";
import AmazonZoom from "./components/ProductZoom";

const App = () => {
  return (
    <div style={{ padding: 40 }}>
      <AmazonZoom
        image="https://picsum.photos/1200/1200"  // una sola imagen
        zoom="https://picsum.photos/1200/1200"   // misma imagen usada para zoom
      />
    </div>
  );
};

export default App;
