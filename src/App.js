import logo from './logo.svg';
import './App.css';
// 
import Home from './pages/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Todo from './pages/Todo';
import Skills from './pages/Skills';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/skill" element={<Skills />} />
        </Route>
      </Routes>
    </HashRouter>   
  );
}

export default App;
