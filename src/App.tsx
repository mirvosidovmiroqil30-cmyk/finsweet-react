import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Company from './pages/Company';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Career from './pages/Career';
import JobDetails from './pages/JobDetails';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TeamProfile from './pages/TeamProfile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/job" element={<JobDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/team/:name" element={<TeamProfile />} />
      </Routes>
    </BrowserRouter>
  );
}


