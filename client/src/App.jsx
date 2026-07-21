import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/public/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Home />} />
        
        {/* Admin Portal Routes (We will add the AdminLayout later) */}
        {/* <Route path="/admin" element={<AdminLayout />}> */}
          {/* <Route index element={<Dashboard />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;