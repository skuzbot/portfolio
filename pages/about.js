import react from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = (props) => {
  return (
    <div className='about-container'>
      <Meta/>
      <div className="content">
      <Navbar/>
        I'm Steven Duncan, a full stack engineer who loves to write applications in Javascript.
      </div>
      <Footer/>
    </div>
  );
}

export default About;