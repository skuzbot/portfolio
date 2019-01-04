import react from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const lyrebyrd = (props) => {
  return (
    <div className='lyrebyrd-container'>
      <Meta/>
      <Navbar/>
      <div>
        Lyre Byrd
      </div>
      <Footer/>
    </div>
  )
}