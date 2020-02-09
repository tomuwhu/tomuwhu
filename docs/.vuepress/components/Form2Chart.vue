<template>
    <div>
        <canvas ref="cc"></canvas>
        <input type="range" v-model="i1" max="8">
        -> {{ i1 }} -> 
        <button id="katt" @click="cd()">-</button>
        <button id="katt" @click="cu()">+</button>
    </div>
</template>
<script>
import Chart from 'chart.js'
var gs = { }
var config = {
    type: 'line',
    data: {
        labels: [0,1,2,3,4,5,6,7,8],
        datasets: [{
            label: 'Módosított',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: [0, 10, 5, 2, 20, 30, 45, 20, 20]
        },
        {
            label: 'Eredeti',
            backgroundColor: 'rgba(39, 135, 152, 0.2)',
            borderColor: 'rgba(39, 135, 152, 1)',
            data: [0, 10, 5, 2, 20, 30, 45, 20, 20]
        }]
    },
    options: {}
}
export default {
    name: 'Diagram',
    data() {
        return {
            i1: 0
        }
    },
    mounted() {
        gs.cc = new Chart(
            this.$refs.cc.getContext('2d'),
            config
        )
    },
    methods: {
        cu() {
            config.data.datasets[0].data[this.i1]++
            gs.cc.update(config)
        },
        cd() {
            config.data.datasets[0].data[this.i1]--
            gs.cc.update(config)
        }
    }
}
</script>
<style scoped>
div {
    text-align: center;
}
button#katt {
    box-shadow: 1px 1px 3px black;
    user-select: none;
    cursor: pointer;
    border-radius: 4px;
}
</style>
ITL111E	Informatikai alapismeretek