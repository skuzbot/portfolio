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
          <Link href='/'>
            <div className='logo'>
              <a className='link'>
                Steven Duncan's Portfolio
              </a>
            </div>
          </Link>
          <Link href='/about'>
            <div className='about navbar-item'>
              <a className='link'>
                About
              </a>
            </div>
          </Link>
          <Link href='/applications'>
            <div className='applications navbar-item'>
              <a className='link'>
                Applications
              </a>
            </div>
          </Link>
          <Link href='/algorithms'>
            <div className='algorithms navbar-item'>
              <a className='link'>
                Algorithms
              </a>
            </div>
          </Link>
          <Link href='/resume'>
            <div className='resume navbar-item'>
              <a className='link'>
                Resume
              </a>
            </div>
          </Link>
          <style jsx>{`
            .navbar-container {
              width: auto;
              height: 60px;
              display: flex;
              padding: 10px;
              align-items: center;
              background-color: #9e9e9e;
              border-top: 20px #bbb5c3 solid;
              border-bottom: 15px #bbb5c3 solid;
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