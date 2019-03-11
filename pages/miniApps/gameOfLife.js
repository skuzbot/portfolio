import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class GameOfLife extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return (
      <div className='container'>
        <Meta />
        <div className='content'>
          <Navbar />
          gameOfLife
          <div className='gameOfLife'>

          </div>
        </div>
        <Footer />
        <style jsx>{`
        
        `}</style>
      </div>
    )
  }
}