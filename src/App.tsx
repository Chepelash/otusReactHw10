import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./profile/profile";
import { NavPage } from "./navPage/navPage";
import { Operations } from "./operations/operations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavPage />}>
          <Route index element={<Profile />} />
          <Route path="operations" element={<Operations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
