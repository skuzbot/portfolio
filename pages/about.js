import react from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';

const About = (props) => {
  return (
    <div className='about-container'>
      <Meta/>
      <Navbar/>
      <div>
        About Me:
      </div>
    </div>
  );
}

export default About;