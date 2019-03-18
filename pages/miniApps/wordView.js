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
      word: '',
      etymologies: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidUpdate() {

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

    if (q !== '') {
      axios.get(`/api/oxford_search`, {
        params: {
          query: q,
        }
      })
      .then((res) => {
        console.log(`${q} was searched`)
        console.log('*****RESPONSE HERE*****', res);
        // TODO this can stay here for now but I'd like not send all data back to client if possible.
        /*
        res.data[0].word -> word
        res.data[0].lexicalEntries.entries.etymologies[0] -> etymologies

        */
      
      

      // TODO set state for word data


      })
      .catch((e) => {
        console.log('*=*=*=*=ERROR*=*=*=*');
        console.error(e);
      })
    } else {
      alert("please enter a word to search");
    }

  }
  
  render() {
    return (
      <div className='container'>
        <Meta />
        <div className='content'>
          <Navbar />
          <div className='wordView'>
            <h2 className='title'>Word View</h2>
            <h5 className='subtitle'>(Search Oxford for dictionary entries)</h5>
            <div className='search-input-container'>
              <input
                className='search-query-input'
                onChange={(e) => this.handleInputChange(e)}
              />
              <button
                className='search-submit-button'
                onClick={(e) => this.handleSearchSubmit(e)}
              >
                Search
              </button>
            </div>
            
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
            margin-bottom: 10px;
          }

          .subtitle {
            margin: 0px;
          }

          .search-input-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }

          .search-query-input {
            margin: 10px;
            height: 70px;
            width: 700px;
            text-align: center;
            font-size: 1.8em;
            border: 1px black solid;
            font-family: 'Fira Mono', monospace;
            
          }

          .search-submit-button {
            padding: 0px;
            margin-top: 10px;
            border: 1px solid black;
            height: 70px;
            width: 70px;
            font-family: 'Fira Mono', monospace;
          }
        `}</style>
      </div>
    )
  }
}