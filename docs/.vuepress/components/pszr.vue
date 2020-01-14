<template>
    <div>
        <table>
            <tr v-for="row in t">
                <th>"{{row[0]}}"</th>
                <td>{{row[1]}}</td>
                <td>{{( 100*row[1]/n ).toFixed()}}%</td>
            </tr>
        </table>
    </div>
</template>

<script>
import szoveg from 'raw-loader!../public/emberijogok.txt'
var map = new Map
szoveg.toLowerCase().split('').forEach( v => {
                if ( map.has( v ) ) {
                    map.set( v, map.get(v)+1)
                } else {
                    map.set( v, 1 )
                }
            })
var cucc = Array.from( map )
//var szoveg="cica"
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