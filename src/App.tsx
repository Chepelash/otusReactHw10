import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { NavPage } from "./navPage/navPage";
import { Operations } from "./operations/operations";
import { Profile } from "./profile/profile";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavPage />}>
          <Route index element={<Profile />} />
          <Route path="operations" element={<Operations />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
