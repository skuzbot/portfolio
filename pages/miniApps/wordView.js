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
      /*
      res.data[0].word -> word
      res.data[0].lexicalEntries.entries.etymologies[0] -> etymologies

      */
     // TODO this can stay here for now but I'd like not send all data back to client if possible.
     const word = res.data[0].word;
     const etymologies = res.data[0].lexicalEntries[0].entries[0].etymologies;
     const senses = res.data[0].lexicalEntries[0].entries[0].senses[0];
     console.log('word :', word);
     console.log('etymologies :', etymologies);
     console.log('senses :', senses);
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
            margin-top: 0px;
          }

          .search-query-input {
            margin: 10px;
            height: 60px;
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