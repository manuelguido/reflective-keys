<template>
  <div class="toggle-switch-container">
    <div class="toggle-switch switch-vertical">
      <input
        id="toggle-a"
        v-model="checked"
        type="radio"
        name="switch"
        value="notes"
        @click="check('notes')"
      />
      <label for="toggle-a" @click="check('notes')">Display Notes</label>
      <input
        id="toggle-b"
        type="radio"
        name="switch"
        value="keys"
        :v-model="checked"
        @click="check('keys')"
      />
      <label for="toggle-b" @click="check('keys')">Display Keyboard Keys</label>
      <span class="toggle-outside">
        <span class="toggle-inside"></span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PianoDataToggleTextSwitch',
  data() {
    return {
      checked: 'notes'
    }
  },
  methods: {
    check(newValue) {
      this.checked = newValue
      this.$emit('checked', this.checked)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_background.scss';
@import '@/assets/scss/_variables.scss';

@mixin easeTransition {
  transition: all 0.25s ease-in-out;
}

.toggle-switch {
  position: relative;
}

.toggle-switch input {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 2;
}

.toggle-switch input:checked {
  z-index: 1;
}

.toggle-switch input:checked + label {
  cursor: default;
  opacity: 1;
}

.toggle-switch label {
  @include easeTransition;
  color: $white;
  cursor: pointer;
  opacity: 0.25;
}

.toggle-switch .toggle-outside {
  @include easeTransition;
  border-radius: 17px;
  height: 100%;
  overflow: hidden;
  padding: 11px;
}

.toggle-switch .toggle-inside {
  @include easeTransition;
  border-radius: 50%;
  background: $grey-medium-light;
  position: absolute;
}

.switch-vertical {
  width: 0px;
  height: 55px;
  margin-left: 27px;
}

.switch-vertical input {
  height: 100%;
  width: 60px;
  right: 0;
  margin: 0;
}

.switch-vertical label {
  font-size: 14px;
  display: inline-block;
  width: 200px;
  height: 50%;
  text-align: left;
  padding-left: 12px;
}

.switch-vertical .toggle-outside {
  @include backdropFilterDark;
  display: flex;
  flex: column;
  justify-content: center;
  position: absolute;
  width: 28px;
  height: 100%;
  right: 0;
  top: 0;
}

.switch-vertical .toggle-inside {
  height: 22px;
  left: 3px;
  top: 3px;
  width: 22px;
}

.switch-vertical input:checked ~ .toggle-outside .toggle-inside {
  top: 3px;
}

.switch-vertical input ~ input:checked ~ .toggle-outside .toggle-inside {
  top: 30px;
}
</style>
