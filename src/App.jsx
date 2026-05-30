import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ContactChat from './components/ContactChat'
import Home from './pages/Home'
import Story from './pages/Story'
import WhyHoney from './pages/WhyHoney'
import Range from './pages/Range'
import Find from './pages/Find'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="grain"></div>
      <div className="topbar">
        <span>Honey based • No chemicals • Natural energy gel for athletes • India's first honey sports nutrition</span>
      </div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/why" element={<WhyHoney />} />
        <Route path="/range" element={<Range />} />
        <Route path="/find" element={<Find />} />
      </Routes>
      <Footer />
      <ContactChat />
    </BrowserRouter>
  )
}
