import react from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import AlgorithmCard from '../components/AlgorithmCard';
import Footer from '../components/Footer';

const Algorithms = (props) => {
  return (
    <div className='container'>
      <Meta/>
      <Navbar/>
      Algorithms here:
      <div className='algorithms-container'>
        <AlgorithmCard/>
        <AlgorithmCard/>
        <AlgorithmCard/>
        <AlgorithmCard/>
        <AlgorithmCard/>
        <AlgorithmCard/>
        <AlgorithmCard/>
        <AlgorithmCard/>
        <AlgorithmCard/>
        <AlgorithmCard/>
      </div>
      <Footer/>
      <style jsx>{`
        .algorithms-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content; space-between;
        }
      `}</style>
      
    </div>
  );
}

export default Algorithms;