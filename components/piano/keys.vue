<template>
  <div class="keys">
    <PianoKeyWhite
      v-for="k in whiteKeys"
      :key="k.id"
      @click.native="playNote(`${k.id}${octaves[3]}`)"
    />
    <PianoKeyWhite
      v-for="k in whiteKeys"
      :key="k.id"
      @click.native="playNote(`${k.id}${octaves[4]}`)"
    />
    <PianoKeyWhite
      @click.native="playNote(`${whiteKeys[0].id}${octaves[5]}`)"
    />
  </div>
</template>

<script>
export default {
  name: "PianoKeys",
  methods: {
    playNote(note = "C5", duration = "8n") {
      const play = {
        note: note,
        duration: duration,
      };
      this.$emit("playNote", play);
    },
  },
  data() {
    return {
      octaves: [0, 1, 2, 3, 4, 5],
      whiteKeys: [
        {
          id: "C",
        },
        {
          id: "D",
        },
        {
          id: "E",
        },
        {
          id: "F",
        },
        {
          id: "G",
        },
        {
          id: "A",
        },
        {
          id: "B",
        },
      ],
    };
  },
};
</script>

<style scoped>
.keys {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
</style>