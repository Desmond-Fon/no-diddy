import './App.css'
import './assets/font/CalSans-SemiBold.otf'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';

function App() {

  return (
    <>
     <BrowserRouter>
        <div className="font-rethink">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
