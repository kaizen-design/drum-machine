import React from 'react';
import Navbar from './templates/layout/Navbar';
import Footer from './templates/layout/Footer';

/*const audioBank = [
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
];*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {

    };
    //this.handleChange = this.handleChange.bind(this);
  }
  /*handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }*/
  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar brand={'Killer Drum Machine'} />
        <main role="main" className="App container my-auto py-3">
          <div id="drum-machine" className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="form-row">
                <div className="col-4 mb-2">
                  <button type="button" className="drum-pad btn btn-dark btn-block">Q</button>
                </div>
                <div className="col-4 mb-2">
                  <button type="button" className="drum-pad btn btn-dark btn-block">W</button>
                </div>
                <div className="col-4 mb-2">
                  <button type="button" className="drum-pad btn btn-dark btn-block">E</button>
                </div>
                <div className="col-4 mb-2">
                  <button type="button" className="drum-pad btn btn-dark btn-block">A</button>
                </div>
                <div className="col-4 mb-2">
                  <button type="button" className="drum-pad btn btn-dark btn-block">S</button>
                </div>
                <div className="col-4 mb-2">
                  <button type="button" className="drum-pad btn btn-dark btn-block">D</button>
                </div>
                <div className="col-4">
                  <button type="button" className="drum-pad btn btn-dark btn-block">Z</button>
                </div>
                <div className="col-4">
                  <button type="button" className="drum-pad btn btn-dark btn-block">X</button>
                </div>
                <div className="col-4">
                  <button type="button" className="drum-pad btn btn-dark btn-block">C</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="jumbotron p-4 border mb-0">
                <div className="form-group">
                  <label htmlFor="volumeControl">Volume</label>
                  <input type="range" className="custom-range" id="volumeControl" />
                </div>
                <div className="alert alert-dark text-center mb-0" role="alert">
                  <b>Current Pad Title</b>
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
