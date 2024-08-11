import logo from './logo.svg';
import './App.css'
import AddTodo from './component/AddTodo';
import SearchTodo from './component/SearchTodo';
import ViewAll from './component/ViewAll';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<AddTodo/>}/>
        <Route path="/search" element={<SearchTodo/>}/>
        <Route path="/view" element={<ViewAll/>}/>
        </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
