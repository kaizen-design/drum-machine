import React from 'react';
import Navbar from './templates/layout/Navbar';
import Footer from './templates/layout/Footer';

const audioBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }
  render() {
    return (
      <button type="button"
              id={this.props.clipId}
              onClick={this.playSound}
              className="drum-pad btn btn-dark btn-block">
        <audio className='clip' id={this.props.keyTrigger} src={this.props.clip} />
        {this.props.keyTrigger}
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: String.fromCharCode(160),
      volume: 0.5
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
  }
  updateDisplay(name) {
    this.setState({
      display: name
    });
  }
  adjustVolume(e) {
    this.setState({
      volume: e.target.value,
      display: "Volume: " + Math.round(e.target.value * 100)
    });
    setTimeout(() => this.clearDisplay(), 1000);
  }
  clearDisplay(){
    this.setState({
      display: String.fromCharCode(160)
    });
  }
  render() {
    const padBank = audioBank.map((el) => {
      return (
        <div className="col-4 mb-2">
          <DrumPad
            clipId={el.id}
            clip={el.url}
            keyTrigger={el.keyTrigger}
            keyCode={el.keyCode}
            updateDisplay={this.updateDisplay} />
        </div>
      )
    });
    const clips = [].slice.call(document.getElementsByClassName('clip'));
    clips.forEach(sound => {
      sound.volume = this.state.volume
    });
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar brand={'Drum Machine'} />
        <main role="main" className="App container my-auto py-3">
          <div id="drum-machine" className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="pad-bank form-row">
                {padBank}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="jumbotron p-4 border mb-0">
                <div className="form-group">
                  <label htmlFor="volumeControl">Volume</label>
                  <input type="range"
                         className="custom-range"
                         id="volumeControl"
                         min="0"
                         max="1"
                         step="0.01"
                         value={this.state.volume}
                         onChange={this.adjustVolume} />
                </div>
                <div id="display" className="alert alert-dark text-center mb-0" role="alert">
                  <b>{this.state.display}</b>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
