import Countries from "./components/Countries/Countries";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CardDetail from "./components/cardDetail/cardDetail";
import Activities from './components/Activities/Activities'
import Form from './components/Form/Form'
import { useSelector } from "react-redux";

function App() {
  const selectedCountry = useSelector((state) => state.selectedCountry);

  return (
    <>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route
          path="/detail"
          element={<CardDetail country={selectedCountry}/>}
        />
        <Route path="/activities" element={<Activities/>}/>
        <Route path="/new/activity" element={<Form/>}/>
      </Routes>
    </>
  );
}

export default App;
