import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoveYourSerger from "@/pages/LoveYourSerger";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoveYourSerger />} />
          <Route path="*" element={<LoveYourSerger />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
