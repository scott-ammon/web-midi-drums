## Web MIDI Drums

This React app uses the [web-midi-hooks](https://www.npmjs.com/package/web-midi-hooks) npm package to visualize data received from a connected MIDI drum kit. 

MIDI messages sent from the drums are ingested using the api, and passed to components using React's Context api. The visualizations are triggered on incoming MIDI messages and displayed using svgs.
