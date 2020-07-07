// MIDI object constants
export const EVENT_INDEX = 0;
export const LEAST_SIGNIFICANT_BYTE_INDEX = 1;
export const MOST_SIGNIFICANT_BYTE_INDEX = 2;
export const NOTE_ON_EVENT = 144;
export const NOTE_OFF_EVENT = 128;
export const PITCH_BEND_EVENT = 224;
export const MODULATION_EVENT = 176;
export const MIDI_INPUT = "input-0";

// MIDI states
export const DISCONNECTED = "disconnected";
export const CONNECTED = "connected";

// MIDI Errors
export const NO_DEVICE_ERROR = "Error: No device found.";
export const NO_DEVICE_ON_STARTUP_ERROR = "Error: No device found. Please connect a device and refresh your browser.";
export const CONNECTION_ERROR = "Error: Could not establish access to Web MIDI Api.";
export const UNSUPPORTED_BROWSER_ERROR = "Web MIDI Api is not supported in this browser.";

// DRUM MIDI CHANNELS
export const KICK = 36;
export const SNARE = 38
export const SNARE_RIM = 40;
export const TOM_1 = 48;
export const TOM_1_RIM = 50;
export const TOM_2 = 43;
export const TOM_2_RIM = 58;
export const TOM_3 = 41;
export const TOM_3_RIM = 39;
export const HI_HAT_OPEN = 46;
export const HI_HAT_CLOSED = 44;
export const CRASH_LEFT = 59;
export const CRASH_LEFT_EDGE = 55;
export const CRASH_RIGHT = 57;
export const CRASH_RIGHT_EDGE = 52;
export const RIDE_EDGE = 59;
export const RIDE = 51;
export const RIDE_BELL = 53;

export const MAX_ARRAY_LENGTH = 1;