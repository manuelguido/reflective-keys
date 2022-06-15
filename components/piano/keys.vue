<template>
  <div class="keys">
    <PianoKey
      v-for="k in keys"
      :key="`${k.id}${1}`"
      :piano-key="k"
      :octave="octaves[2]"
      @playNote="playNote"
    />
    <PianoKey
      v-for="k in keys"
      :key="`${k.id}${2}`"
      :piano-key="k"
      :octave="octaves[3]"
      @playNote="playNote"
    />
    <PianoKey
      v-for="k in keys"
      :key="`${k.id}${3}`"
      :piano-key="k"
      :octave="octaves[4]"
      @playNote="playNote"
    />
    <PianoKey
      v-for="k in keys"
      :key="`${k.id}${4}`"
      :piano-key="k"
      :octave="octaves[5]"
      @playNote="playNote"
    />
    <PianoKey :piano-key="keys[0]" :octave="octaves[6]" @playNote="playNote" />
  </div>
</template>

<script>
export default {
  name: "PianoKeys",
  methods: {
    playNote(pianoKey) {
      this.$emit("playNote", pianoKey);
    },
  },
  data() {
    return {
      octaves: [0, 1, 2, 3, 4, 5, 6, 7],
      keys: [
        {
          id: 1,
          note: "C",
        },
        {
          id: 2,
          note: "C#",
        },
        {
          id: 3,
          note: "D",
        },
        {
          id: 4,
          note: "D#",
        },
        {
          id: 5,
          note: "E",
        },
        {
          id: 6,
          note: "F",
        },
        {
          id: 7,
          note: "F#",
        },
        {
          id: 8,
          note: "G",
        },
        {
          id: 9,
          note: "G#",
        },
        {
          id: 10,
          note: "A",
        },
        {
          id: 11,
          note: "A#",
        },
        {
          id: 12,
          note: "B",
        },
      ],
    };
  },
};
</script>

<style scoped>
.keys {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>