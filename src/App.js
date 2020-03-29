import React from 'react';
import {Motion, StaggeredMotion, spring} from 'react-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Example-2" style={{height: "50%"}}>
        <span> 
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
          <div style={{float: "left", width: "50%", height: "100%"}}>
            <h2>Staggered Motion 2</h2>
              <div style={{height: "308px", backgroundColor: "blue"}}>
              <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
                {interpolatingStyle => <div style={interpolatingStyle} />}
              </Motion>
                
              </div>
              
          </div>
        </span>
      </div>    
    </div>
  );
}

export default App;
