import Link from 'next/link';

const AlgorithCard = ({ algorithm }) => {
  const algorithmData = {
    'Rotate Matrix': {
      fileName: 'rotateMatrix',
      graphic: '[[⟳]]',
      fontSize: '3.5em',
    },
    'Roman to Number': {
      fileName: 'romanNum',
      graphic: 'LX → 60',
      fontSize: '3em',
    },
    'All Anagrams': {
      fileName: 'allAnagrams',
      graphic: 'abc → \nabc, acb, bac,\nbca, cab, cba',
      fontSize: '1.8em',
    },
    'Sudoku Validator': {
      fileName: 'sudokuChecker',
      graphic: '┏ ┳ ┳ ┓\n┣ ╋ ╋ ┫\n┣ ╋ ╋ ┫\n┗ ┻ ┻ ┛',
      fontSize: '1.8em',
    },
    'Bracket Validator': {
      fileName: 'validParan',
      graphic: '{[()]}',
      fontSize: '3.5em',
    },
    'Water Blocks': {
      fileName: 'waterBlock',
      graphic: '      #\n# - - #\n# # - #\n# # # #',
      fontSize: '2em',
    },
    'Island Count': {
      fileName: 'islandCount',
      graphic: '0 - 0 - 0\n0 - - - 0\n0 0 0 0 0',
      fontSize: '2em',
    },
    'Nth Fibonacci Number': {
      fileName: 'iterativeFib',
      graphic: 'Φ',
      fontSize: '6em',
    }
  }

  const renderComingSoon = () => {
    if (algorithm === 'Island Count') {
      return (
        <div className='coming-soon'>Coming Soon!</div>
      )
    }
  }

  return (
    <div className='card-container'>
      <Link as={`/algorithms/${algorithmData[algorithm].fileName}`} href={`${algorithmData[algorithm].fileName}`}>
        <a className='link'>
          <div className='card'>
            <div className='title'>
              {algorithm}
            </div>
            <div className='graphic'>
              {`${algorithmData[algorithm].graphic}`}
            </div>
          </div>

        </a>
      </Link>

      <style jsx>{`
        .card-container {
          height: 300px;
          margin: 20px 30px;
        }

        .link {
          text-decoration: none;
          color: #000;
          cursor: default;
        }

        .card {
          border: 1px solid black;
          padding: 0 28px;
          margin: 0;
          width: 300px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .title {
          font-size: 1.2em;
          margin: 10px 0;
        }

        .graphic {
          white-space:pre-wrap;
          font-size: ${algorithmData[algorithm].fontSize};
          flex-grow: .5;
        }

        .coming-soon {
          color: red;
        }
        
      `}</style>
    </div>
  );
}

export default AlgorithCard;
