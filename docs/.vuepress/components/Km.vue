<template>
  <div>
    <svg viewBox="0 0 1000 1000">
      <circle :cx="500+Math.cos(x)*420" 
              :cy="500-Math.sin(x)*420" 
              r="15" />
    </svg>
    <input v-model="x" type="range" 
           :min="0" :max="4*Math.PI" step="0.01">
    <hr>
    {{ x }}
  </div>
</template>

<script>
export default { data() { return { x: 0 } } }
</script>

<style>
input { width: 800px; }
</style>