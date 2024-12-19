import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import AnimatePath from "./pages/AnimatePath";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="interaction1" element={<AnimatePath />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
