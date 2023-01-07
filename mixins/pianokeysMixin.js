import deviceDetectorMixin from "./deviceDetectorMixin"

const pianokeysMixin = {
  mixins: [deviceDetectorMixin],
  data() {
    return {
      keysData: [
        {
          note: 'C',
          key: 'z',
          keyCode: 90,
          octave: 3,
        },
        {
          note: 'C#',
          key: 's',
          keyCode: 83,
          octave: 3,
        },
        {
          note: 'D',
          key: 'x',
          keyCode: 88,
          octave: 3,
        },
        {
          note: 'D#',
          key: 'd',
          keyCode: 68,
          octave: 3,

        },
        {
          note: 'E',
          key: 'c',
          keyCode: 67,
          octave: 3,
        },
        {
          note: 'F',
          key: 'v',
          keyCode: 86,
          octave: 3,
        },
        {
          note: 'F#',
          key: 'g',
          keyCode: 71,
          octave: 3,
        },
        {
          note: 'G',
          key: 'b',
          keyCode: 66,
          octave: 3,
        },
        {
          note: 'G#',
          key: 'h',
          keyCode: 72,
          octave: 3,
        },
        {
          note: 'A',
          key: 'n',
          keyCode: 78,
          octave: 3,
        },
        {
          note: 'A#',
          key: 'j',
          keyCode: 74,
          octave: 3,
        },
        {
          note: 'B',
          key: 'm',
          keyCode: 77,
          octave: 3,
        },
        {
          note: 'C',
          key: 'q',
          keyCode: 90,
          octave: 4,
        },
        {
          note: 'C#',
          key: '2',
          keyCode: 83,
          octave: 4,
        },
        {
          note: 'D',
          key: 'w',
          keyCode: 88,
          octave: 4,
        },
        {
          note: 'D#',
          key: '3',
          keyCode: 68,
          octave: 4,

        },
        {
          note: 'E',
          key: 'e',
          keyCode: 67,
          octave: 4,
        },
        {
          note: 'F',
          key: 'r',
          keyCode: 86,
          octave: 4,
        },
        {
          note: 'F#',
          key: '5',
          keyCode: 71,
          octave: 4,
        },
        {
          note: 'G',
          key: 't',
          keyCode: 66,
          octave: 4,
        },
        {
          note: 'G#',
          key: '6',
          keyCode: 72,
          octave: 4,
        },
        {
          note: 'A',
          key: 'y',
          keyCode: 78,
          octave: 4,
        },
        {
          note: 'A#',
          key: '7',
          keyCode: 74,
          octave: 4,
        },
        {
          note: 'B',
          key: 'u',
          keyCode: 77,
          octave: 4,
        },
        {
          note: 'C',
          key: 'i',
          keyCode: 73,
          octave: 5,
        }
      ]
    }
  },
  computed: {
    reducedKeys() {
      let reducedKeysArray = []
      for (let i = 0; i < 13; i++) {
        reducedKeysArray.push(this.keysData[i]);
      }
      return reducedKeysArray
    },

    fullKeys() {
      return this.keysData
    },

    pianoKeys() {
      return this.isMobile() ? this.reducedKeys : this.fullKeys
    }
  }
}

export default pianokeysMixin