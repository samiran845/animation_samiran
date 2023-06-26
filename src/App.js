import Lottie from "lottie-react";
import animationData from "./Animetion-Json/97525-code-dark.json"

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Create a Love Animation with Samiran Maity</h2>
      <p>This is made by Samiran Maity</p>
      <div className="animetionHolder">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}

export default App;
