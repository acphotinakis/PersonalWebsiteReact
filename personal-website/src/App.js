import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
