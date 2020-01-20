<template>
    <div>
        <input ref="mf" @change="f()" type="file">
        <select v-model="enc">
            <option>UTF-8</option>
            <option>ISO-8859-2</option>
        </select>
        <canvas id="myChart"></canvas>
        <table v-if="show">
            <tr v-for="row in t">
                <th>"{{row[0]}}"</th>
                <td>{{row[1]}}</td>
                <td>{{( 100*row[1]/n ).toFixed(2)}}%</td>
            </tr>
        </table>
        <div class="x" v-else @click="show=true">Táblázat</div>
    </div>
</template>

<script>
var szoveg, cucc, canvas, ctx, myChart, n
import Chart from 'chart.js'
import sz from 'raw-loader!../public/test.txt'
szoveg = sz
n = szoveg.length
var map = new Map
var rc = (a) => `rgba(${
    Math.round(Math.random()*215)
    }, ${
    Math.round(Math.random()*215)
    }, ${
    Math.round(Math.random()*215)
    }, ${ a })`
function readnow() {
    map     .clear()
    szoveg  .toLowerCase()
            .split('')
            .forEach( v => {
                    if ( map.has( v ) ) {
                        map.set( v, map.get(v)+1)
                    } else {
                        map.set( v, 1 )
                    }
            })
    cucc = Array.from( map )
}
function draw() {
    canvas = document.getElementById('myChart')
    ctx = canvas.getContext('2d');
    var config = {
        type: 'bar',
        data: {
            labels: cucc.slice(0,20).map(v => `“${ v[0] }”`),
            datasets: [{
                label: `% of Letters (${n})`,
                data: cucc.slice(0,20).map(v => Math.round(10000*v[1]/n)/100),
                backgroundColor: Array(25).fill(0).map( () => rc(0.2)),
                borderColor:  rc(1),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
    if (myChart) myChart.destroy()
    myChart = new Chart(ctx, config)
}
readnow()
export default {
    data() {
        return {
            t: cucc.sort( (a, b) => b[1]-a[1] ),
            show: false,
            enc: "utf-8",
            n
        }
    },
    methods: {
        f() {
            var reader = new FileReader()
            reader.onload = e => {
                szoveg = e.target.result
                n=szoveg.length
                this.n = n
                readnow()
                this.t = cucc.sort( (a, b) => b[1]-a[1] )
                draw()
                this.$forceUpdate()
            }
            reader.readAsText(
                this.$refs.mf.files[0], 
                this.enc
            )
            this.show=false
        }
    },
    mounted() {
        draw()
    }
}
</script>>

<style>
div.x {
    cursor: pointer;
    text-align: center;
}
th {
    font-family: 'Courier New', Courier, monospace;
}
</style>