import react from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = (props) => {
  return (
    <div className='about-container'>
      <Meta/>
      <Navbar/>
      <div>
        About Me:
      </div>
      <Footer/>
    </div>
  );
}

export default About;