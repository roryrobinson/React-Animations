import React from 'react';
import {Motion, StaggeredMotion, spring} from 'react-motion';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
  }

  handleMouseDown() {
    this.setState({open: !this.state.open});
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.handleMouseDown();
  }



  render() {
    return (
      <div className="App">
        <div className="Example-2" style={{height: "50%"}}>
          <span> 

          <div style={{float: "left", width: "50%", height: "100%"}}>
              <h2>Motion</h2>
                <div id="test1" style={{height: "308px"}}>

                  <button
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleTouchStart}>
                    Toggle
                  </button>
                  <div style={{height: "10px"} } />
                  <Motion style={{x: spring(this.state.open ? 500 : 0)}}>
                    {({x}) =>
                      // children is a callback which should accept the current value of
                      // `style`
                      <div className="demo0">
                        <div className="demo0-block" style={{
                          WebkitTransform: `translate3d(${x}px, 0, 0)`,
                          transform: `translate3d(${x}px, 0, 0)`,
                        }} />
                      </div>
                    }
                  </Motion>
                </div>       
            </div>
  
            <div style={{float: "left", width: "50%"}}>
              <h2>Staggered Motion</h2>
                <div style={{height: "100%", backgroundColor: "green"}}>
                  <StaggeredMotion
                    defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
                    styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                      return i === 0
                        ? {h: spring(100)}
                        : {h: spring(prevInterpolatedStyles[i - 1].h)}
                    })}>
                    {interpolatingStyles =>
                      <div>
                        {interpolatingStyles.map((style, i) =>
                          <div key={i} style={{border: '1px solid', height: style.h}} />)
                        }
                      </div>
                    }
                  </StaggeredMotion>
                </div>
                
            </div>

          </span>
        </div>    
      </div>
    );
  }
  
}

export default App;
