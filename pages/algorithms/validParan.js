import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class ValidParan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presets: [
        '(x + y) - (4)',
        '(((10 ) ()) ((?)(:)))',
        '[{()}]',
        '(50)(',
        '[{]}',
        '{',
        '[[[{{{((()))}}}]]]',
        ')))()(((',
        '([](){})',
      ],
      nextPresetIndex: 0,
      input: '',
      isValid: true,
    }
  }

  componentDidUpdate() {
    this.validateBrackets(this.state.input)
  }

  handleInputChange(e) {
    e.preventDefault();
    let str = e.target.value;
    this.setState({
      input: str,
    })
  }

  cyclePresets(e) {
    let direction = e.target.name;
    let currentPresetIndex = this.state.nextPresetIndex;

    if (direction === 'prev') {
      if (currentPresetIndex === 0) {
        currentPresetIndex = 8;
      } else {
        currentPresetIndex--;
      }
      let curPreset = this.state.presets[currentPresetIndex];
      console.log('currentPresetIndex :', currentPresetIndex);
      this.setState({
        input: curPreset,
        nextPresetIndex: currentPresetIndex,
      })
    } else if (direction === 'next') {
      if (currentPresetIndex === 8) {
        currentPresetIndex = 0;
      } else {
        currentPresetIndex++;
      }
      let curPreset = this.state.presets[currentPresetIndex];
      console.log('currentPresetIndex :', currentPresetIndex);
      this.setState({
        input: curPreset,
        nextPresetIndex: currentPresetIndex,
      })
    }
  }

  validateBrackets(s, o, v, rx1, rx2) {
    s = this.state.input || '';
    rx1 = /[^\(\)\{\}\[\]]/g;
    rx2 = /\[\]|\{\}|\(\)/g;
    v = ['()', '{}', '[]', ''];
    o = s.replace(rx1, '');
    for (let i = 0; i < o.length; i += 0.5) { 
      o = o.replace(rx2, '');
    }
    let isValid = v.includes(o);
    if (isValid !== this.state.isValid) {
      this.setState({
        isValid: isValid
      })
    }
  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <div className="content">
          <Navbar/>
          <div className='bracket-validator'>
            Bracket Validator:
            <span className='note'>(checks if brackets are balanced i.e. "()" -> true & "][" -> false)</span>
            <div className='input-container'>
              <button className='prev-preset' name='prev' onClick={(e) => this.cyclePresets(e)}>◀</button>
              <input
                className='input'
                type='text'
                value={this.state.input}
                onChange={(e) => this.handleInputChange(e)}
              />
              <button className='prev-preset' name='next' onClick={(e) => this.cyclePresets(e)}>▶</button>
            </div>
            <div className='isValid'>
              {'' + this.state.isValid}
            </div>
          </div>
        </div>
        <Footer/>
        <style jsx>{`
          .bracket-validator {
            margin-top: 20px;
            width: 100vw;
            display: flex;
            font-size: 2em;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          .input-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          button {
            height: 40px;
            width: 40px;
            border: none;
            display: block;
            border: 1px solid black;
            margin: 8px;
            font-size: .6em;
          }

          input {
            margin: 20px;
            height: 80px;
            width: 700px;
            text-align: center;
            font-size: 1.5em;
            border: 1px black solid;
            font-family: 'Fira Mono', monospace;
          }

          .note {
            margin: 5px;
            font-size: 0.5em;
          }
        `}</style>
      </div>
    )
  }
}

