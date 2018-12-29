import react from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resume = (props) => {
  return (
    <div className='container'>
      <Meta/>
      <Navbar/>
      <div>
        Resume Here:
      </div>
      <Footer/>
    </div>
  );
}

export default Resume;