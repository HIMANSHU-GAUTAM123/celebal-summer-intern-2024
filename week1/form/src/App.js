import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {BrowserRouter, Routes, Route, Navigate, useParams,} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Form/>} ></Route>
      <Route path={'/display'} element={<Display/>} ></Route>

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
