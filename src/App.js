import React from 'react';

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
        <nav className="navbar justify-content-center navbar-dark bg-gradient-dark shadow-sm">
          <span className="navbar-brand mb-0 h1">Killer Drum Machine</span>
        </nav>
        <main role="main" className="App container-fluid h-100 pt-3 pt-lg-4 px-lg-4">

        </main>
        <footer className="text-center py-3">
          <div className="container">
            <small>
              Designed & built by <a href="https://github.com/kaizen-design" target="_blank" rel="noopener noreferrer">Denis B.</a>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}

/*const Title = (props) => {
  return (
    <h6 className="w-100 py-2 px-3 mb-0 bg-gradient-secondary text-white rounded-top shadow-sm"
        dangerouslySetInnerHTML={{__html: props.title}} />
  )
};*/

export default App;
