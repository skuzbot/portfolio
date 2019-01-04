import react from 'react';
import Link from 'next/link';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Applications = (props) => {
  return (
    <div className='container'>
      <Meta/>
      <Navbar/>
      <div className='apps-container'>
        <Link className='lyrebyrd'
          as='/applications/lyrebyrd'
          href='lyrebyrd'>
          Lyre Byrd
        </Link>
        <div className='recicalc'>
          ReciCalc
        </div>
        <div className='blob'>
          Blob Health Tracker
        </div>
        <div className='word-view'>
          Word View
        </div>
      </div>
      <Footer/>
      <style jsx>{`
        
      `}</style>
    </div>
  );
}

export default Applications;