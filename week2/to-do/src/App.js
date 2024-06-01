import './App.css'
import {BrowserRouter, Routes, Route, Navigate, useParams,} from 'react-router-dom'
import ToDoList from './components/Todo_list';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<ToDoList/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
