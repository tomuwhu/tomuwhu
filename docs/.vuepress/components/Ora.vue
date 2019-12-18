<template>
  <div id="xx3">
    <svg viewBox="0 0 500 500" width="500px" height="500px">
      <circle class="r" :cx="250+Math.sin(x*12)*220" :cy="250-Math.cos(x*12)*220" r="5" fill="red"></circle>
      <line
        :x1="250"
        :y1="250"
        :x2="250+Math.sin(x*12)*220"
        :y2="250-Math.cos(x*12)*220"
        stroke="pink"
      ></line>
      <circle :cx="250+Math.sin(x)*180" :cy="250-Math.cos(x)*180" r="9"></circle>
      <line :x1="250" :y1="250" :x2="250+Math.sin(x)*180" :y2="250-Math.cos(x)*180" stroke="blue"></line>
    </svg>
    <hr>
    <input v-model.number="x" type="range" :min="0" :max="2*Math.PI" step="0.001">
    <hr>
    {{ x }}
  </div>
</template>

<script>
export default {
  data() {
    return { x: 0 };
  },
  mounted() {
    setInterval(v => (this.x += 0.001), 1000);
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
