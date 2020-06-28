import React, { useContext } from 'react';
import { MidiDataContext } from 'web-midi-hooks';
import { Kick } from "./drumClasses";
import * as Constants from '../constants';
import "../styles/drums.css";

const kick = new Kick();

const handleHit = hit => {
  switch(hit.note) {
    case Constants.KICK:
      kick.handleHit();
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
        {kick.hitArray}
      </div>
    </div>
  );
};

export default Drums;
