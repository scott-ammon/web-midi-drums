import React from 'react';
import * as Constants from "../constants";

class Instrument {
  constructor() {
    this.hitArray = [];
    this.makeShape = () => null;
  }

  handleHit() {
    // this.handleHitArrayLength();
    // this.hitArray.push(this.makeShape());
    this.hitArray = [this.makeShape()];
  }

  // handleHitArrayLength() {
  //   if (this.hitArray.length >= Constants.MAX_ARRAY_LENGTH) {
  //     this.hitArray.splice(-Constants.MAX_ARRAY_LENGTH);
  //   }
  // };
}

export class Kick extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
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
  }
}

export class HiHatClosed extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="fixed" height="100%" width="100%">
          <circle r="50" cx="50%" cy="50%" fill="gray"/>
        </svg>
      </div>
    );
  }
}

export class HiHatOpen extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="fixed" height="100%" width="100%">
          <circle r="50" cx="50%" cy="50%" fill="brown"/>
        </svg>
      </div>
    );
  }
}

export class Snare extends Instrument {
  makeShape = () => {
    return (
      <div key={Math.random()}>
        <svg className="fixed" height="100%" width="100%">
          <circle r="50" cx={Math.floor(Math.random() * Math.floor(1000)) + 200} cy={Math.floor(Math.random() * Math.floor(600)) + 200} fill="orange"/>
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