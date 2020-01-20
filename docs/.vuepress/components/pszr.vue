<template>
    <div>
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
import Chart from 'chart.js'
import szoveg from 'raw-loader!../public/toldi.txt'
var map = new Map
var rc = (a) => `rgba(${
    Math.round(Math.random()*215)
    }, ${
    Math.round(Math.random()*215)
    }, ${
    Math.round(Math.random()*215)
    }, ${ a })`
szoveg  .toLowerCase()
        .split('')
        .forEach( v => {
                if ( map.has( v ) ) {
                    map.set( v, map.get(v)+1)
                } else {
                    map.set( v, 1 )
                }
        })
var cucc = Array.from( map )
export default {
    data() {
        return {
            t: cucc.sort( (a, b) => b[1]-a[1] ),
            n: szoveg.length,
            show: false
        }
    },
    mounted() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: cucc.slice(1,20).map(v => `“${ v[0] }”`),
                datasets: [{
                    label: '% of Letters',
                    data: cucc.slice(1,20).map(v => Math.round(10000*v[1]/szoveg.length)/100),
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
        })
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