import { checkPropTypes } from "prop-types";

const AlgorithCard = ({ algorithm }) => {
  return (
    <div className='card-container'>
      <div className='card'>
        {algorithm}
      </div>
      <style jsx>{`
        .card {
          border: 1px solid black;
          width: 250px;
          height: 300px;
          padding: 10px 40px;
          margin: 20px 40px;
        }
      `}</style>
    </div>
  );
}

export default AlgorithCard;
