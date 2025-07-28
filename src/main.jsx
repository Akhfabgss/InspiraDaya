import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import "remixicon/fonts/remixicon.css";
import { Toaster } from 'react-hot-toast';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <div className="container mx-auto px-5 md:px-20">
      <Navbar />
      <App />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="-mx-5 md:-mx-20">
      <Footer />
      </div>
    </div>
  </StrictMode>
);
