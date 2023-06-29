import Countries from "./components/Countries/Countries";
import Landing from "./components/Landing/Landing";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CardDetail from "./components/cardDetail/cardDetail";
import Activities from "./components/Activities/Activities";
import Form from "./components/Form/Form";
import { useSelector } from "react-redux";

function App() {
  const selectedCountry = useSelector((state) => state.selectedCountry);

  return (
    <>
      <Routes>
        <Route path="/*" element={<Landing />}>
          <Route path="countries" element={<Countries />} />
        </Route>
        <Route
          path="/detail"
          element={<CardDetail country={selectedCountry} />}
        />
        <Route path="/activities" element={<Activities />} />
        <Route path="/new/activity" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
