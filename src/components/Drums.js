import React, { useContext } from 'react';
import { MidiDataContext } from 'web-midi-hooks';
import "../styles/drums.css";
import { kickSvg, hiHatSvg } from "./drumShapes";
import * as Constants from '../constants';

let hiHatArray = [];
let kickArray = [];
const MAX_ARRAY_LENGTH = 25;

const handleLength = arr => {
  if (arr.length >= MAX_ARRAY_LENGTH) {
    arr.splice(-MAX_ARRAY_LENGTH);
  }
};

const makeHiHat = vel => {
  handleLength(hiHatArray)
  hiHatArray.push(hiHatSvg);
};

const makeKick = vel => {
  handleLength(kickArray);
  kickArray.push(kickSvg);
};

const handleHit = hit => {
  switch(hit.note) {
    case Constants.KICK:
      makeKick(hit.velocity);
      break;
    case Constants.HI_HAT_OPEN:
      makeHiHat(hit.velocity);
      break;
    default:
      break;
  }
};

const Drums = () => {
  const { keyData } = useContext(MidiDataContext);

  keyData.forEach(hit => {
    handleHit(hit);
  });

  return (
    <div className="visualizer">
      <div className="drums">
        {hiHatArray}
      </div>
      <div className="drums">
        {kickArray}
      </div>
    </div>
  );
};

export default Drums;
