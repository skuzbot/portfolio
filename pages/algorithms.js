import react from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import AlgorithmCard from '../components/AlgorithmCard';

const Algorithms = (props) => {
  return (
    <div className='container'>
      <Meta/>
      <Navbar/>
      <div className='algorithms-container'>
        Algorithms here:
        <AlgorithmCard/>
        <AlgorithmCard/>
      </div>

    </div>
  );
}

export default Algorithms;