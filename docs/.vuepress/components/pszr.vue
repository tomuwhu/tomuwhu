<template>
    <div>
        <canvas id="myChart"></canvas>
        <table>
            <tr v-for="row in t">
                <th>"{{row[0]}}"</th>
                <td>{{row[1]}}</td>
                <td>{{( 100*row[1]/n ).toFixed(2)}}%</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Chart from 'chart.js'
import szoveg from 'raw-loader!../public/emberijogok.txt'
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    options: {}
})
var map = new Map
szoveg.toLowerCase().split('').forEach( v => {
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
            n: szoveg.length
        }
    }
}
</script>>

<style>
th {
    font-family: 'Courier New', Courier, monospace;
}
</style>