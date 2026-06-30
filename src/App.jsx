import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MentionsLegales from './pages/MentionsLegales'
import Qualification from './pages/Qualification'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/qualification" element={<Qualification />} />
      </Routes>
    </BrowserRouter>
  )
}
