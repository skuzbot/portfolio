import react from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';

const Resume = (props) => {
  return (
    <div className='container'>
      <Meta/>
      <Navbar/>
      <div>
        Resume Here:
      </div>
    </div>
  );
}

export default Resume;