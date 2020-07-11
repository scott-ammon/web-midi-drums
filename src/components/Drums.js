import React, { useContext, useMemo } from 'react';
import MidiDataContext from '../context/MidiDataContext';
import { 
  Kick,
  Snare,
  HiHat,
  HiHatPedal,
  Tom1,
  Tom2,
  Tom3,
  CrashLeft,
  CrashRight,
  Ride
 } from "./drumClasses";
import * as Constants from '../constants';
import "../styles/drums.css";

const kick = new Kick();
const snare = new Snare();
const hiHat = new HiHat();
const hiHatPedal = new HiHatPedal();
const tom1 = new Tom1();
const tom2 = new Tom2();
const tom3 = new Tom3();
const crashLeft = new CrashLeft();
const crashRight = new CrashRight();
const ride = new Ride();

const handleHit = hit => {
  switch(hit.note) {
    case Constants.KICK:
      kick.handleHit();
      break;
    case Constants.SNARE:
      snare.handleHit();
      break;
    case Constants.TOM_1:
      tom1.handleHit();
      break;
    case Constants.TOM_2:
      tom2.handleHit();
      break;
    case Constants.TOM_3:
      tom3.handleHit();
      break;
    case Constants.HI_HAT:
      hiHat.handleHit();
      break;
    case Constants.HI_HAT_PEDAL:
      hiHatPedal.handleHit();
      break;
    case Constants.CRASH_LEFT:
      crashLeft.handleHit();
      break;
    case Constants.CRASH_RIGHT:
      crashRight.handleHit();
      break;
    case Constants.RIDE:
      ride.handleHit();
      break;
    default:
      break;
  }
};

const Drums = () => {
  const { keyData } = useContext(MidiDataContext);

  useMemo(() => {
    if(keyData !== []) {
      handleHit(keyData);
    }
  }, [keyData]);


  return (
    <div className="visualizer">
      <div>{kick.hitArray}</div>
      <div>{snare.hitArray}</div>
      <div>{tom1.hitArray}</div>
      <div>{tom1.hitArray}</div>
      <div>{tom2.hitArray}</div>
      <div>{tom3.hitArray}</div>
      <div>{hiHat.hitArray}</div>
      <div>{ride.hitArray}</div>
      <div>{crashLeft.hitArray}</div>
      <div>{crashRight.hitArray}</div>
    </div>
  );
};

export default Drums;
