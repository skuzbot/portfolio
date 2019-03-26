import Link from 'next/link';

const MiniAppCard = ({ miniApp }) => {
  const miniAppData = {
    'Word View': {
      fileName: 'wordView',
      graphic: '✎',
      fontSize: '5em',
      complete: false,
    },
    'Tic Tac Toe': {
      fileName: 'ticTacToe',
      graphic: '╋╋\n╋╋',
      fontSize: '3em',
      complete: false,
    },
    'Calculator': {
      fileName: 'calculator',
      graphic: '×+\n÷-',
      fontSize: '4.5em',
      complete: false,
    },
    'Connect Four': {
      fileName: 'connectFour',
      graphic: '   ○   \n   ●●  \n ●○○●○●\n ○●○○●○\n○●○●●●○',
      fontSize: '2em',
      complete: false,
    },
    'Shopping Cart': {
      fileName: 'shoppingCart',
      graphic: '$',
      fontSize: '4.5em',
      complete: false,
    },
    'Game of Life': {
      fileName: 'gameOfLife',
      graphic: ' █ \n  █\n███',
      fontSize: '1.8em',
      complete: false,
    },
    'Checkers': {
      fileName: 'checkers',
      graphic: '█ █ █ █ \n █ █ █ █\n█ █ █ █ \n █ █ █ █\n█ █ █ █ \n █ █ █ █\n█ █ █ █ \n █ █ █ █\n',
      fontSize: '1.5em',
      complete: false,
    },
    'Wiki Article': {
      fileName: 'wikiArticle',
      graphic: 'ⓦ',
      fontSize: '5em',
      complete: false,
    }
  }

  return (
    <div className='card-container'>
      <Link as={`/miniApps/${miniAppData[miniApp].fileName}`} href={`${miniAppData[miniApp].fileName}`}>
        <a className='link'>
          <div className='card'>
            <div className='title'>
              {miniApp}
            </div>
            <div className='graphic'>
              {`${miniAppData[miniApp].graphic}`}
            </div>
          </div>
          {!miniAppData[miniApp].complete ? <div className='coming-soon'>Coming Soon!</div> : null}
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
          font-size: ${miniAppData[miniApp].fontSize};
          flex-grow: .5;
          line-height: 0.69;
        }

        .coming-soon {
          color: red;
        }
      `}</style>
    </div>
  )

}

export default MiniAppCard;