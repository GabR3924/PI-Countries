import Countries from "./components/Countries/Countries";
import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CardDetail from './components/cardDetail/cardDetail'


function App() {

  return ( 
    <>
      <Routes>
        <Route path="/" element={<Countries/>}/>
        <Route path="/detail" element={<CardDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
