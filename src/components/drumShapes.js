import React from 'react';

export const kickSvg = (
  <div>
    <svg className="kick outer" height="100%" width="100%">
      <circle r="150" cx="50%" cy="50%" fill="orange"/>
    </svg>
    <svg className="kick mid" height="100%" width="100%">
      <circle r="125" cx="50%" cy="50%" fill="blue"/>
    </svg>
    <svg className="kick inner" height="100%" width="100%">
      <circle r="100" cx="50%" cy="50%" fill="white" />
    </svg>
  </div>
);

export const hiHatSvg = (
  <svg height="400" width="800" key={Math.random()}>
    <circle 
      cx={Math.floor(Math.random() * Math.floor(700))} 
      cy={Math.floor(Math.random() * Math.floor(300))} 
      r="5"
      stroke="yellow" 
      strokeWidth="2" 
      fill="none" 
    />
  </svg>
);

export const starShape = (
  <svg className="kick2" height="100%" width="100%" >
      <circle r="100" cx="50%" cy="50%" stroke="tomato" stroke-width="200" stroke-dasharray="5 10" />
    </svg>
);