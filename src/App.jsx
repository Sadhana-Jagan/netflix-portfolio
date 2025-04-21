import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import BrowsingPage from "./components/BrowsingPage";
import Recruiter from "./components/Recruiter";
import Resume from "./components/Resume";
import Friend from "./components/Friend"
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/Projects";
import HireMe from "./components/HireMe";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Songs from "./components/Songs";
import Series from "./components/Series";
import Blogs from "./components/Blogs";
import FriendsVideo from "./components/FriendsVideo";
import Chess from "./components/Chess";
import Formula1 from "./components/Formula1";
function App() {
  return (
    <>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/browse" element={<BrowsingPage />} />
        <Route path="/browse/recruiter" element={<Recruiter />} />
        <Route path="/browse/friend" element={<Friend />} />

        <Route path="/resume" element={<Resume />} />
        <Route path="/browse/recruiter/skills" element={<Skills />} />
        <Route path="/browse/recruiter/projects" element={<Projects />} />
        <Route path="/browse/recruiter/hireme" element={<HireMe />} />
        <Route path='/browse/recruiter/certificates' element={<Certificates />} />
        <Route path="/browse/recruiter/education" element={<Education />} />
        <Route path="/browse/recruiter/music" element={<Songs />} />
        <Route path="/browse/recruiter/series" element={<Series />} />
        <Route path="/browse/recruiter/blogs" element={<Blogs />} />


        <Route path="/browse/friends" element={<Friend />} />
        <Route path="/browse/friends/friends-page" element={<FriendsVideo />} />
        <Route path="/browse/friends/chess" element={<Chess />} />
        <Route path="/browse/friends/contactme" element={<HireMe />} />
        <Route path="/browse/friends/formula1" element={<Formula1 />} />
        <Route path="/browse/friends/education" element={<Education />} />
        <Route path="/browse/friends/music" element={<Songs />} />
        <Route path="/browse/friends/series" element={<Series />} />
        <Route path="/browse/friends/blogs" element={<Blogs />} />
        
      </Routes>
    </>
  );
}

export default App;
