<template>
  <div class="container">
    <br>
    <div v-if="!ert">
        <div class="fel"><b>{{ af+1 }}. feladat:</b></div>
        <div class="felsz">{{ fx[af] }}</div>
        <div v-if="hint[af].texts.length" class="help">
            Segítség: 
            <span v-for="(elem, i) in hint[af].texts">
            [ <a :href="hint[af].links[i]"        
                 target="help"
            >{{ elem }}</a> ]&nbsp;
            </span>
        </div>
        <div v-else>
            <span v-if="!ert">Ehhez a feladathoz nincs segítség megadva. Próbáljon önállóan utána nézni!</span>
        </div>
        <br>
        Adja meg a feladatot megoldó JavaScript kódot:
        <pre><textarea v-model="x[af]" @keyup.enter="f()" @keyup="ku"/></pre>
        <div class="right">
        <button class="xx" @click="f()">futtat</button>
        </div>
    </div>
    <div v-else><div v-for="(mor,j) in x.slice(0, fx.length)"><pre>{{ j+1 }}. megoldás: {{ mor }}</pre></div></div>
    <hr>
    Konzol:
    <div class="fmo" v-html="fe" />
    <h2>{{ ( ( af / fx.length ) * 100 ).toFixed() }} %</h2>
  </div>
</template>

<script>
var myf, mox,
    t = Array( 27 + Math.round(Math.random()*18) ).fill( 0 ).map( () =>Math.round( Math.random() * 88 ) ),
    ts = `[${ t.toString() }]`,
    mp = 0

export default { 
    data() { 
        return {
            fx: [
                `Adott egy t tömb, határozza meg az elemszámát!`,
                `Határozza meg a t tömbben a páratlan számok elemszámát!`,
                `Határozza meg a t tömb elemeinek összegét!`,
                `Határozza meg a t tömbben a páratlan értékű elemek összegét!`,
                `Határozza meg a t tömbben a maximális elem értékét!`,
                `Határozza meg a t tömbben az első 8 elem összegét!`,
                `Határozza meg a t tömbben a legnagyobb 8 elem összegét!`
            ],
            hint: [
                { texts: ['Array length'],
                  links: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length'] },
                { texts: ['Array filter', '%-operator'],
                  links: [
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder'
                  ] },
                { texts: ['Array reduce', '%-operator'],
                  links: [
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder'] },
                { texts: ['Array reduce'],
                  links: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'] },
                { texts: [],
                  links: [] },
                { texts: ['Array slice','Array reduce'],
                  links: [
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
                  ] },
                { texts: ['Array sort', 'Array slice', 'Array reduce'],
                  links: [
                      'https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
                  ] },
                { texts: [],
                  links: [] },
            ],
            x: [
                't.', 't.', 't.', 't.', '', 't.', 't.', 't.',
            ],
            mo: [
                t.length, 
                t.filter( v => v % 2).length, 
                t.reduce( ( o, v ) => o += v, 0),
                t.reduce( ( o, v ) => o += v % 2 ? v : 0, 0),
                Math.max( ...t ),
                t.slice( 0, 8 ).reduce( ( o, v ) => o += v, 0),
                t.sort( ( a, b ) => b - a ).slice( 0, 8 ).reduce( ( o, v ) => o += v, 0) 
            ],
            fe: '<b class="green">> </b>',
            af: 0,
            ert: false
        } 
    },
    methods: {
        ku ( event ) {
            if (event.keyCode === 38 && this.af>0 && this.af-mp >= 1) {
                mp++
                this.$set( this.x,this.af,this.x[this.af-mp] )
            }
            if (event.keyCode === 40 && this.af>0) {
                mp--
                this.$set( this.x,this.af,this.x[this.af-mp] )
            }
        },
        f() {
            try {
                myf=new Function (`
                    var t=${ ts }
                    return ${ this.x[this.af] }`)
                this.fe = '<b class="green">> </b>'    
                this.fe += `<b class="yellow">${ (mox = myf(), mox.length > 15 ? mox.slice(0,15)+"..." : mox ) }</b>`
                setTimeout( () => this.fe = `<b class="green">> </b> `, 15000 )
            } catch( error ) {
                this.fe = '<b class="green">> </b>'    
                this.fe += `<b class="red">${ error }</b>`
                setTimeout( () => this.fe = `<b class="green">> </b> `, 15000 )
            }
            if ( mox  === this.mo[this.af]) {
                mp=0
                this.af++
                if (this.af===this.fx.length) {
                    this.fe = '<b class="green">> </b>'    
                    this.fe += `<b class="green">Gratulálok az összes feladatot megoldotta!</b>`
                    setTimeout( () => this.fe = `<b class="green">> </b> `, 15000 )
                    this.ert = true
                } else {
                    this.fe = '<b class="green">> </b>'    
                    this.fe += ` <b class="green"> Jó megoldás! Új feladat!</b>`
                    setTimeout( () => this.fe = `<b class="green">> </b> `, 15000 )
                }
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|VT323&display=swap');
div.container {
    user-select: none;
}
div.fel {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    padding: 9px;
    text-shadow: 0px 0px 1px rgb(79, 49, 49);
}
div.felsz {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    margin: 5px;
    padding: 9px;
    background-color: antiquewhite;
    box-shadow: 1px 1px 3px black;
    border-radius: 5px;
    text-shadow: 0px 0px 2px rgb(60, 48, 1);
}
div.help {
    text-align: right;
}
pre {
    font-size: 16px;
    color:white;
    box-shadow: 1px 1px 3px black;
}
div.fmo {
    font-size: 35px;
    font-family: 'VT323', monospace;
}
div.right {
    text-align: right;
}
textarea { 
    width: 98%;
    height: 100px;
    font-size: 20px;
    font-family: courier, monospace;
    background: transparent;
    color:white;
    border:none;
}
button.xx {
    font-size: 16px;
    box-shadow: 1px 1px 3px black;
}
b.red {
    color: red ;
    font-family: courier, monospace;
    font-size: 18px;
}
b.green {
    color: rgb(33, 92, 62) ;
}
b.yellow {
    color: rgb(115, 45, 194) ;
}
h2 {
    font-family: 'VT323', monospace;
    font-size: 30px;
    color: rgb(33, 92, 62) ;
}
h2.h2x {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    color: rgb(25, 70, 62) ;
    text-align: center;
    text-shadow: 0px 0px 3px rgb(65, 79, 77);
}

</style>