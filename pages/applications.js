import react from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';

const Applications = (props) => {
  return (
    <div className='container'>
      <Meta/>
      <Navbar/>
      <div>
        Applications here:
      </div>
    </div>
  );
}

export default Applications;