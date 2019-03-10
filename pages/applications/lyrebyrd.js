import react from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const lyrebyrd = (props) => {
  return (
    <div className='lyrebyrd-container'>
      <Meta/>
      <div className="content">
        <Navbar/>
        <div className='lyrebyrd'>
          <div className='title'>
            Lyre Byrd
          </div>
          <div className='summary'>
            Lyre Byrd is a real-time sync YouTube and Spotify session sharing application.
            Think of the last time you shared an earbud with someone sitting next to you so you could enjoy a song together.
            Lyre Byrd is a digital way to do just that. Share the music you love.
          </div>
          <div className='screenshots'>
            <img className='image'src='../../static/LyreByrd-screenshot-01.png'/>
            <div className='stream-screenshots'>
              <img className='image-stream'src='../../static/LyreByrd-screenshot-02.png'/>
              <img className='image-stream'src='../../static/LyreByrd-screenshot-03.png'/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <style jsx>{`
        .lyrebyrd {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }

        .title {
          font-size: 3em;
        }

        .summary {
          font-size: 1.5em;
          margin-top: 20px;
          width: 60%;
        }

        .screenshots {
          margin-top: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .stream-screenshots {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .image {
          margin: 10px;
          width: 50%;
        }

        .image-stream {
          width: 80%;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}

export default lyrebyrd