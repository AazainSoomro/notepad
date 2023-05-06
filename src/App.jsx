import react, { useState } from "react";

import "./App.css";
import AccessBar from "./components/AccessBar";
import EditTools from "./components/EditTools";
import TextArea from "./components/TextArea";
import Title from "./components/Title.jsx";

function App() {
  return (
    <div className="bg-gray-800">
      <div className="bg-slate-100 h-screen w-[90%] mx-auto">
        <Title />
        {/* AccessBar */}
        <AccessBar />
        {/* EditTools */}
        <EditTools />
        {/* TextArea */}
        <TextArea />
      </div>
    </div>
  );
}

export default App;
