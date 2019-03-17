import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';

export default class WordView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    let input = e.target.value;
    this.setState({
      searchQuery: input,
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    const q = this.state.searchQuery;
    axios.get(`/api/oxford_search`, {
      params: {
        query: q,
      }
    })
    .then((res) => {
      console.log(`${q} was searched`)
      console.log('*****RESPONSE HERE*****', res);
    })
    .catch((e) => {
      console.log('*=*=*=*=ERROR*=*=*=*');
      console.error(e);
    })

  }
  
  render() {
    return (
      <div className='container'>
        <Meta />
        <div className='content'>
          <Navbar />
          <div className='wordView'>
            <h2 className='title'>Word View</h2>
            <input
              className='search-query-input'
              onChange={(e) => this.handleInputChange(e)}
            />
            <button
              className='search-submit-button'
              onClick={(e) => this.handleSearchSubmit(e)}
            >Search</button>
          </div>
        </div>
        <Footer />
        <style jsx>{`

          .wordView {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .title {
            
          }

          .search-query-input {
            margin: 20px;
            height: 80px;
            width: 700px;
            text-align: center;
            font-size: 1.8em;
            border: 1px black solid;
            font-family: 'Fira Mono', monospace;
            
          }

          .search-submit-button {
            outline: none;
            border: 1px solid black;
            font-family: 'Fira Mono', monospace;
          }
        `}</style>
      </div>
    )
  }
}