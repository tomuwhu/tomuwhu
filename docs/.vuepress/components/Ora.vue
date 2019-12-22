<template>
  <div id="xx3">
    <svg viewBox="0 0 500 500" width="500px" height="500px">
      <circle class="r" :cx="250+Math.sin(x/120*4*Math.PI)*220" :cy="250-Math.cos(x/120*4*Math.PI)*220" r="5" fill="red"></circle>
      <line
        :x1="250"
        :y1="250"
        :x2="250+Math.sin(x/120*4*Math.PI)*220"
        :y2="250-Math.cos(x/120*4*Math.PI)*220"
        stroke="pink"
      ></line>
      <circle :cx="250+Math.sin(x/720*2*Math.PI)*180" :cy="250-Math.cos(x/720*2*Math.PI)*180" r="9"></circle>
      <line :x1="250" :y1="250" :x2="250+Math.sin(x/720*2*Math.PI)*180" :y2="250-Math.cos(x/720*2*Math.PI)*180" stroke="blue"></line>
    </svg>
    <hr>
    <input v-model.number="x" type="range" :min="0" :max="60*12" step="0.1">
    <hr>
    {{ (y = Math.trunc(x / 60), x<60 ? 12 : y ) }} :
    {{ (y = Math.trunc(x % 60), y.toString(10).length===1?'0'+y.toString():y) }}
  </div>
</template>

<script>
let nd
export default {
  data() {
    return { x: 0 };
  },
  mounted() {
    nd = new Date()
    this.x=nd.getHours()*60 + nd.getMinutes()
    setInterval(v => {
      nd = new Date()
      this.x=nd.getHours()*60 + nd.getMinutes()
    }, 1000*60 )
  }
};
</script>

<style scoped>
div#xx3 {
    text-align: center;
}
input {
  width: 800px;
}
svg {
  box-shadow: 1px 1px 3px black;
  background-color: rgb(235, 245, 245);
  border-radius: 250px;
}
</style>
