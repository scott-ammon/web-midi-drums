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
          <circle r="100" cx="50%" cy="50%" fill="white" />
        </svg>
      </div>
    );
  }
}

export class HiHat extends Instrument {
  makeShape = () => {
    const xPos = Math.floor(Math.random() * Math.floor(600)) + 400;

    return (
      <div key={Math.random()}>
        <svg className="hiHatFixed hiHat" height="100%" width="100%">
          <line x1={xPos} y1="0" x2={xPos} y2="200" stroke="red" strokeWidth={8} />
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
      <div key={Math.random()}>
        <svg className="snare fixed" height="100%" width="100%" >
          <circle r="100" cx="50%" cy="50%" stroke="tomato" strokeWidth="40" strokeDasharray="10 10" />
        </svg>
      </div>
    );
  }
}

export class Tom1 extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="fixed" height="100%" width="100%">
          <circle r="50" cx={Math.floor(Math.random() * Math.floor(1000)) + 200} cy={Math.floor(Math.random() * Math.floor(600)) + 200} fill="blue"/>
        </svg>
      </div>
    );
  }
}

export class Tom2 extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="fixed" height="100%" width="100%">
          <circle r="50" cx={Math.floor(Math.random() * Math.floor(1000)) + 200} cy={Math.floor(Math.random() * Math.floor(600)) + 200} fill="green"/>
        </svg>
      </div>
    );
  }
}

export class Tom3 extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="fixed" height="100%" width="100%">
          <circle r="50" cx={Math.floor(Math.random() * Math.floor(1000)) + 200} cy={Math.floor(Math.random() * Math.floor(600)) + 200} fill="yellow"/>
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