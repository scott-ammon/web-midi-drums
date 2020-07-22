import React from 'react';

const backgroundColor = "#1b262c";

class Instrument {
  constructor() {
    this.hitArray = [];
    this.makeShape = () => null;
  }

  handleHit(velocity) {
    this.hitArray = [this.makeShape(velocity)];
  }
}

export class Kick extends Instrument {
  makeShape = (velocity) => {
    return (
      <div key={Math.random()}>
        <svg className="kick fixed" height="100%" width="100%" fill="url(#grad1)">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop className="kickStop1" offset="0%" />
              <stop className="kickStop2" offset="80%" />
            </radialGradient>
          </defs>
          <circle r={velocity * 2.5} cx="50%" cy="50%"/>
        </svg>
      </div>
    );
  }
}

export class HiHat extends Instrument {
  constructor() {
    super();
    this.rotationRadians = 0;
  }

  makeShape = (velocity) => {
    const radius = velocity * 5;
    this.rotationRadians += .1;

    const xPos = Math.cos(this.rotationRadians) * radius + 400;
    const yPos = Math.sin(this.rotationRadians) * radius + 400;

    return (
      <div className="hiHatFixed" key={Math.random()}>
        <svg className="hiHat" height="100%" width="100%">
          <line 
            x1="50%" 
            y1="50%" 
            x2={xPos} 
            y2={yPos} 
            stroke="#bbe1fa" 
            strokeWidth={8} 
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }
}

export class HiHatPedal extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="hiHatFixed hiHatOpen" height="100%" width="100%">
          <line x1="300" y1="100" x2="100" y2="200" stroke="blue" strokeWidth={10} />
        </svg>
      </div>
    );
  }
}

export class Snare extends Instrument {
  constructor() {
    super();
    this.rotationRadians = 0;
  }

  makeShape = (velocity) => {
    const radius = 350;
    this.rotationRadians += .2;

    const xPos = Math.cos(this.rotationRadians) * radius + 400;
    const yPos = Math.sin(this.rotationRadians) * radius + 400;

    return (
      <div className="fixedSnare" key={Math.random()}>
        <svg className="snare" height="100%" width="100%" fill="url(#gradSnare)" >
          <defs>
            <radialGradient id="gradSnare" cx={xPos} cy={yPos} r="25" fx="50%" fy="50%">
              <stop className="snareStop1" offset="0%" />
              <stop className="snareStop2" offset="80%" />
            </radialGradient>
          </defs>
          <circle r="50" cx={xPos} cy={yPos} fill="orange" />
        </svg>
      </div>
    );
  }
}

export class Tom1 extends Instrument {
  makeShape = (velocity) => {
    return (
      <div className="fixedTom" key={Math.random()}>
        <svg className="tom" height="100%" width="100%">
          <defs>
            <filter id="tom1" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
          </defs>
          <circle r={velocity * 1.5 + 200} cx="50%" cy="50%" fill="#3282b8" filter="url(#tom1)" />
          <circle r={velocity * 1.5 + 290} cx="68%" cy="50%" fill={backgroundColor} />
        </svg>
      </div>
    );
  }
}

export class Tom2 extends Instrument {
  makeShape = (velocity) => {
    return (
      <div className="fixedTom" key={Math.random()}>
        <svg className="tom" height="100%" width="100%">
          <defs>
            <filter id="tom2" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
          </defs>
          <circle r={velocity * 1.5 + 200} cx="50%" cy="50%" fill="#bbe1fa" filter="url(#tom2)" />
          <circle r={velocity * 1.5 + 290} cx="50%" cy="68%" fill={backgroundColor} />
        </svg>
      </div>
    );
  }
}

export class Tom3 extends Instrument {
  makeShape = (velocity) => {
    return (
      <div className="fixedTom" key={Math.random()}>
        <svg className="tom" height="100%" width="100%">
          <defs>
            <filter id="tom3" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
          </defs>
          <circle r={velocity * 1.5 + 200} cx="50%" cy="50%" fill="#e8505b" filter="url(#tom3)"/>
          <circle r={velocity * 1.5 + 290} cx="32%" cy="50%" fill={backgroundColor} />
        </svg>
      </div>
    );
  }
}

export class CrashLeft extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="crash fixed" height="100%" width="100%">
          <rect width="100%" height="100%" fill="#f9d56e"/>
        </svg>
      </div>
    );
  }
}

export class CrashRight extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="crash fixed" height="100%" width="100%">
        <rect width="100%" height="100%" fill="#3282b8"/>
        </svg>
      </div>
    );
  }
}

export class Ride extends Instrument {
  constructor() {
    super();
    this.rotationRadians = 0;
  }
  makeShape = (velocity) => {
    const radius = velocity * 8;
    this.rotationRadians -= .3;
    const xPos = Math.cos(this.rotationRadians) * radius + 400;
    const yPos = Math.sin(this.rotationRadians) * radius + 400;

    return (
      <div className="hiHatFixed" key={Math.random()}>
        <svg className="hiHat" height="100%" width="100%">
          <line x1="50%" y1="50%" x2={xPos} y2={yPos} stroke="#14b1ab" strokeWidth={4} strokeLinecap="round" />
        </svg>
      </div>
    );
  }
}