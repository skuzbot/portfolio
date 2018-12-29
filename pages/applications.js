import react from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Applications = (props) => {
  return (
    <div className='container'>
      <Meta/>
      <Navbar/>
      <div>
        Applications here:
      </div>
      <Footer/>
    </div>
  );
}

export default Applications;