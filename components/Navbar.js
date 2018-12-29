import { Component } from 'react';
import Link from 'next/link';

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      selected: '/',
    }
  }

  render() {
    return (
      <div>
        <div className='navbar-container'>
          <div
            className='logo'>
            <Link href='/'>
              <a className='link'>
                Steven Duncan's Portfolio
              </a>
            </Link>
          </div>
          <div className='about navbar-item'>
            <Link href='/about'>
              <a className='link'>
                About
              </a>
            </Link>
          </div>
          <div className='applications navbar-item'>
            <Link href='/applications'>
              <a className='link'>
                Applications
              </a>
            </Link>
          </div>
          <div className='algorithms navbar-item'>
            <Link href='/algorithms'>
              <a className='link'>
                Algorithms
              </a>
            </Link>
          </div>
          <div className='resume navbar-item'>
            <Link href='/resume'>
              <a className='link'>
                Resume
              </a>
            </Link>
          </div>
          <style jsx>{`
            .navbar-container {
              width: auto;
              height: 60px;
              display: flex;
              padding: 10px;
              align-items: center;
              background-color: #9e9e9e;
              border-top: 20px #b1bfca solid;
              justify-content: space-between;
            }

            .logo {
              flex-grow: .8;
              font-size: 2em;
              display: block;
            }
            
            .navbar-item {
              padding: 4px 12px;
              text-decoration: none;
              border: 1px solid black;
            }

            .link {
              color: #000000;
              text-decoration: none;
            }
          `}</style>
        </div>
      </div>
    )
  }
}