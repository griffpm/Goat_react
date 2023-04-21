import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Steeve from './page/Steeve';
import Mark from './page/Mark';
import Elon from './page/Elon';
import Jack from './page/Jack';
import Error from './page/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element=<Steeve />/>
        <Route path="/mark" element={<Mark />}/>
        <Route path="/elon" element={<Elon />}/>
        <Route path="/jack" element={<Jack/>} />
        <Route path="*" element={<Error/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
