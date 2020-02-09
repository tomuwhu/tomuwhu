<template>
  <div id="app">
        <div class="x">
            <select :value="wave" v-model="form.waveForm" @change="rr()">
                <option v-for="wave in waveForms">
                {{ wave }}
                </option>
            </select>
            <input class="r" 
                   type="range"
                   @change="rr()"
                   min="5" max="14" step="0.00001" 
                   v-model="form.freq"> | <b>{{ (2 ** form.freq).toFixed() }}  Hz</b>
             - - >
            <button v-if="!started" type="button" @click="start()">Start</button>
            <button v-else type="button" @click="stop()">Stop</button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      ctx: new AudioContext(),
      osc: null,
      form: {
        waveForm: 'sine',
        freq: 8.78136
      },
      started: false,
      waveForms: ['sine', 'square', 'sawtooth', 'triangle']
    }
  },
  methods: {
    start() {
      this.started=true
      this.osc = this.ctx.createOscillator()
      this.osc.connect(this.ctx.destination)
      this.osc.frequency.value = 2 ** this.form.freq
      this.osc.detune.value = 0
      this.osc.type = this.form.waveForm
      this.osc.start()
    },
    stop() {
      this.osc.stop()
      this.started=false
    },
    rr() {
      this.osc.frequency.value = 2 ** this.form.freq
      if (this.started) {
            this.osc.stop()
            this.osc = this.ctx.createOscillator()
            this.osc.connect(this.ctx.destination)
            this.osc.frequency.value = 2 ** this.form.freq
            this.osc.detune.value = 0
            this.osc.type = this.form.waveForm
            this.osc.start()
      }
    }
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lemonada&display=swap');
    div.x {
        font-family: 'Lemonada', cursive;
        text-align: center;
        background-color: rgb(242, 242, 212);
        padding: 18px;
        box-shadow: 1px 1px 3px black;
        border-radius: 10px;
    }
    input.r {
        width: 300px;
    }
    button {
        font-family: 'Lemonada', cursive;
        padding: 5px;
        box-shadow: 1px 1px 3px black;
        cursor: pointer;
    }
    select {
        font-family: 'Lemonada', cursive;
    }
</style>