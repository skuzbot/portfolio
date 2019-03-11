import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class WordView extends Component {
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
          wordView
          <div className='wordView'>

          </div>
        </div>
        <Footer />
        <style jsx>{`
        
        `}</style>
      </div>
    )
  }
}