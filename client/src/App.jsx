import Countries from "./components/Countries/Countries";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CardDetail from "./components/cardDetail/cardDetail";
import Activities from './components/Activities/Activities'
import { useSelector } from "react-redux";

function App() {
  const selectedCountry = useSelector((state) => state.selectedCountry);

  return (
    <>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route
          path="/detail"
          element={<CardDetail country={selectedCountry} />}
        />
        <Route path="/new/activitie" element={<Activities/>}/>
      </Routes>
    </>
  );
}

export default App;
