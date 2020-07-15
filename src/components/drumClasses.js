import React from 'react';

const backgroundColor = "#f3ecc2";

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
              <stop className="kickStop2" offset="100%" />
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
    this.randomAngle = 0;
  }
  makeShape = (velocity) => {
    const radius = velocity * 5;
    this.randomAngle += .1;
    const xPos = Math.cos(this.randomAngle) * radius + 400;
    const yPos = Math.sin(this.randomAngle) * radius + 400;

    return (
      <div className="hiHatFixed" key={Math.random()}>
        <svg className="hiHat" height="100%" width="100%">
          <line x1="50%" y1="50%" x2={xPos} y2={yPos} stroke="#e8505b" strokeWidth={4} strokeLinecap="round" />
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
  makeShape = (velocity) => {
    return (
      <div className="fixedSnare" key={Math.random()}>
        <svg className="snare" height="100%" width="100%" >
          <circle r={velocity * 2} cx="50%" cy="50%" stroke="#14b1ab" fill={backgroundColor} strokeWidth="40" strokeDasharray="10 10" />
        </svg>
      </div>
    );
  }
}

export class Tom1 extends Instrument {
  makeShape = () => {
    return (
      <div className="fixedTom" key={Math.random()}>
        <svg className="tom" height="100%" width="100%">
          <circle r="300" cx="50%" cy="50%" fill="#f9d56e" />
          <circle r="350" cx="68%" cy="50%" fill={backgroundColor} />
        </svg>
      </div>
    );
  }
}

export class Tom2 extends Instrument {
  makeShape = () => {
    return (
      <div className="fixedTom" key={Math.random()}>
        <svg className="tom" height="100%" width="100%">
          <circle r="300" cx="50%" cy="50%" fill="#14b1ab" />
          <circle r="350" cx="50%" cy="68%" fill={backgroundColor} />
        </svg>
      </div>
    );
  }
}

export class Tom3 extends Instrument {
  makeShape = () => {
    return (
      <div className="fixedTom" key={Math.random()}>
        <svg className="tom" height="100%" width="100%">
          <circle r="300" cx="50%" cy="50%" fill="#e8505b" />
          <circle r="350" cx="32%" cy="50%" fill={backgroundColor} />
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
        <rect width="100%" height="100%" fill="#14b1ab"/>
        </svg>
      </div>
    );
  }
}

export class Ride extends Instrument {
  constructor() {
    super();
    this.randomAngle = 0;
  }
  makeShape = (velocity) => {
    const radius = velocity * 8;
    this.randomAngle -= .3;
    const xPos = Math.cos(this.randomAngle) * radius + 400;
    const yPos = Math.sin(this.randomAngle) * radius + 400;

    return (
      <div className="hiHatFixed" key={Math.random()}>
        <svg className="hiHat" height="100%" width="100%">
          <line x1="50%" y1="50%" x2={xPos} y2={yPos} stroke="#14b1ab" strokeWidth={4} strokeLinecap="round" />
        </svg>
      </div>
    );
  }
}