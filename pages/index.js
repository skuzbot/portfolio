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
        <Navbar/>
        <div>
        Welcome to my portfolio! I'm Steven Duncan, a full stack engineer who loves to write applications in Javascript.
        </div>
        <Footer/>
      </div>
    )
  }
}