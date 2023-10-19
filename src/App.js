import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Page from './components/page1/Page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page1' element={<Page/>}/>
        <Route path='/page2' element={<Page/>}/>
        <Route path='/page3' element={<Page/>}/>
        <Route path='/page4' element={<Page/>}/>
        <Route path='/page5' element={<Page/>}/>
      </Routes>
    </div>
  );
}

export default App;
