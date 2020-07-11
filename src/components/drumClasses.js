import React from 'react';

class Instrument {
  constructor() {
    this.hitArray = [];
    this.makeShape = () => null;
  }

  handleHit() {
    this.hitArray = [this.makeShape()];
  }
}

export class Kick extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="kick fixed" height="100%" width="100%">
          <circle r="160" cx="50%" cy="50%" fill="white" />
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
  makeShape = () => {
    const radius = 400;
    this.randomAngle += .1;
    const xPos = Math.cos(this.randomAngle) * radius + 400;
    const yPos = Math.sin(this.randomAngle) * radius + 400;

    return (
      <div className="hiHatFixed" key={Math.random()}>
        <svg className="hiHat" height="100%" width="100%">
          <line x1="50%" y1="50%" x2={xPos} y2={yPos} stroke="red" strokeWidth={4} strokeLinecap="round" />
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
  makeShape = () => {
    return (
      <div className="fixedSnare" key={Math.random()}>
        <svg className="snare" height="100%" width="100%" >
          <circle r="200" cx="50%" cy="50%" stroke="tomato" strokeWidth="40" strokeDasharray="10 10" />
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
          <circle r="300" cx="50%" cy="50%" fill="white" />
          <circle r="350" cx="62%" cy="50%" fill="black" />
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
          <circle r="300" cx="50%" cy="50%" fill="yellow" />
          <circle r="350" cx="50%" cy="62%" fill="black" />
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
          <circle r="300" cx="50%" cy="50%" fill="green" />
          <circle r="350" cx="38%" cy="50%" fill="black" />
        </svg>
      </div>
    );
  }
}

export class CrashLeft extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="fixed" height="100%" width="100%">
          <circle r="50" cx="50%" cy="50%" fill="red"/>
        </svg>
      </div>
    );
  }
}

export class CrashRight extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="fixed" height="100%" width="100%">
          <circle r="50" cx="50%" cy="50%" fill="purple"/>
        </svg>
      </div>
    );
  }
}

export class Ride extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="fixed" height="100%" width="100%">
          <circle r="50" cx="50%" cy="50%" fill="white"/>
        </svg>
      </div>
    );
  }
}

export class StarShape extends Instrument {
  constructor() {
    super();
    this.shape = (
      <svg className="kick2" height="100%" width="100%" >
        <circle r="100" cx="50%" cy="50%" stroke="tomato" stroke-width="200" stroke-dasharray="5 10" />
      </svg>
    );
  };
}