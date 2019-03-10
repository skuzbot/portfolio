import { Component } from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default class index extends Component {
  constructor() {
    super()
    this.state = {
      activePage: '/',
    }
  }

  render() {
    return (
      <div>
        <Meta/>
        <div className="content">
        <Navbar/>
          Welcome to my portfolio! It is very much under construction right now so pardon the dust. Check out the Algorithms section!
        </div>
        <Footer/>
      </div>
    )
  }
}