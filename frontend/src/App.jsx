import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Slogan from './modules/Slogan.jsx';
import HomePage from './modules/HomePage.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import StaffPage from './modules/StaffPage.jsx';
import ContactPage from './modules/ContactPage.jsx';
import JobsPage from './modules/jobs/JobsPage.jsx';
import Navigation from './modules/Navigation.jsx';
import { FaDribbble } from "react-icons/fa";
import products from './data/products';
import JobAdd from './modules/jobs/JobAdd.jsx';
import JobEdit from './modules/jobs/JobEdit.jsx';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [ job, setJob] = useState([]);
 // const [count, setCount] = useState(0)

  return (
    <>
      <header>
          <h1><i><FaDribbble /></i>Sean Bleyl</h1>
          <Slogan />
      </header>
      <Router>
      <Navigation />
          <main>
              <section>
                  <Routes>
                      <Route path="/" element={<HomePage />}></Route>
                      <Route path="/topics" element={<TopicsPage />}></Route>
                      <Route path="/gallery" element={<GalleryPage />}></Route>
                      <Route path="/order"   element={<OrderPage products={products} />}></Route>
                      <Route path="/jobsPage" element={<JobsPage setJob={setJob} />}></Route>
                      <Route path="/create" element={<JobAdd />} />
                      <Route path="/update" element={<JobEdit jobToEdit={job} />} />
                      <Route path="/staff" element={<StaffPage />}></Route>
                      <Route path="/contact" element={<ContactPage />}></Route>
                  </Routes>
              </section>
          </main>
      </Router>
      <footer>
          <p>&copy; {new Date().getFullYear()} Sean Bleyl</p>
      </footer>
    </>
  )
}

export default App
