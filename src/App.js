import { Routes, Route } from "react-router-dom"
import Home from './pages/dashboard/Home'
import Where from './pages/wheretogo/Where'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="where" element={ <Where/> } />
      </Routes>
    </div>
  );
}

export default App;
