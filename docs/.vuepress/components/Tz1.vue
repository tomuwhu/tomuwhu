<template>
  <div class="container">
    <br>
    <div v-if="!ert">
        <div class="fel"><b>{{ af+1 }}. feladat:</b></div>
        <div class="felsz" v-html="fx[af]" />
        <div v-if="hint[af].texts.length" class="help">
            Segítség: 
            <span v-for="(elem, i) in hint[af].texts">
            [ <a :href="hint[af].links[i]"        
                 target="help"
            >{{ elem }}</a> ]&nbsp;
            </span>
        </div>
        <div class="help" v-else>
            <span v-if="!ert">Ehhez a feladathoz nincs segítség megadva. Próbáljon önállóan utána nézni!</span>
        </div>
        <br>
        <b>Adja meg a feladatot megoldó JavaScript kódot:</b>
        <pre class="feme"><textarea class="feme" v-model="x[af]" /></pre>
        <div class="right">
        <button class="xx" @click="ku(38)" title="előző megoldás">&lArr;</button>
        <button class="xx" @click="ku(40)" title="következő megoldás">&rArr;</button> 
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        <button class="xx" @click="f()">futtat (kipróbál)</button>
        </div>
    </div>
    <div v-else>
        <div class="fel"><b>Megoldások:</b></div>
        <table style="width: 120%;">
            <tr v-for="(mor,j) in x.slice(0, fx.length)">
                <th class="right">{{ j+1 }}.</th>
                <td style="width: 92%;">
                    <pre class="mox">{{ mor }}</pre>
                </td>
            </tr>
        </table>
    </div>
    <hr>
    <div v-if="!ert">
        <div class="fel">Konzol:</div>
        <div class="fmo" v-html="fe" />
        <table>
            <td v-for="(x, i) in 42" :key="'iv'+i" :class="( ( af / fx.length ) * 42).toFixed()>i?'o':''" />
        </table>
    </div>
    <div v-else class="fmo" style="text-align: center; color: red;">Ötös! (5-ös)</div>
  </div>
</template>

<script>
var myf, mox, mp = 0,
    t = Array( 27 + Math.round(Math.random()*18) ).fill( 0 ).map( () =>Math.round( Math.random() * 88 ) ),
    ts = `[${ t.toString() }]`,
    s = [
            "Bőszájú körülíróművész.",
            "Csúszdázó műbőr különítmény",
            "Húsz kábító fűrész őrködik, üt. (Balázsik Gábor)",
            "Fűsújtó, sárgördítő ütés",
            "Gyümölcsvédő ágyúfűnyíró",
            "Háztűznézőügynök-búsító",
            "Jóhírű tüzérágyúöntő (TSL16b)",
            "Jóízű félárú sütőtök (TSL16b)",
            "Jött árvíz, tűzvész, rút gümőkór.",
            "Kövér fülű sítúrázó nő (TSL16b)",
            "Különálló műútépítő (TSL16b)",
            "Nyúlfülvágó térközsűrítő",
            "Ötágú ütőműbénító (TSL16b)",
            "Öt szép szűzlány őrült írót nyúz. (Váncsa István tollából.)",
            "Tégy úgy őrült, már bűvölsz, hódíts! (Nagy László)",
            "Tíz büdös légy húsz műcsótányt főz",
            "Több hűtőházból kértünk színhúst.",
            "Tűzön tíz órát égő nyúlfül",
            "Sós húst sütsz tán, vízköpő Szűcsné.",
            "Számítógépbötű-őrült nyúl. (Kolonits Zoltán)",
            "Szénrázúdító fűtőküldönc",
            "Szőrösfülű vén sírásó úr. (Kolonits Zoltán)",
            "Túlkábító műrémölőfül",
            "Tüskéshátú kígyóbűvölő (Koltai László)",
            "Tűrő társ békít, s újból örül.",
            "Új füvön csábító kéjnőt gyűr. (lorenzo)",
            "Úrnőm, gyümölcsízű rágót végy!",
            "Úszójárműkürt-vészöblítő",
            "Üldögélő műújságíró (TSL16b)",
            "Vájt fülű bíró két döntőt fújt. (Vincze Ferdinánd)",
            "Zártkörű nőújító ülés (TSL16b)",
            "Szélütött űrújságírónő"
        ][ Math.trunc( Math.random()*32 ) ],
    ss= `'${ s }'`, n = Math.trunc( Math.random()*13432+2341 )
export default { 
    data() { 
        return {
            fx: [
                `Adott egy n szám ( <code>var n = ...</code> ).<br>
                 Határozza mag a <big>𝜋</big>-szeresét 2 tizedesjegyre kerekítve!`,
                `Adott egy s string, határozza meg a hosszát (a karakterei számát)!`,
                `Határozza meg s sting 13. karakterét!`,
                `Adott egy t tömb ( <code>var t = [...]</code> ), határozza meg az elemszámát (t tömb hosszát)!`,
                `Határozza meg a t tömb 2. elemét!<br>(A tömb 1. eleme: <code>t[0]</code> )`,
                `Határozza meg a t tömbben a páratlan számok elemszámát!`,
                `Határozza meg a t tömb elemeinek összegét!`,
                `Határozza meg a t tömbben a páratlan értékű elemek összegét!`,
                `Határozza meg a t tömbben a maximális elem értékét!`,
                `Határozza meg a t tömbben a 7-tel osztható számok közül a legnagyobbat!`,
                `Határozza meg a t tömbben az első 8 elem összegét!`,
                `Határozza meg a t tömbben a legnagyobb 8 elem összegét!`,
                `Határozza meg s string szavainak számát!`
            ],
            hint: [
                { texts: ['Math.PI', 'Number.toFixed'],
                  links: [
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI',
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed'
                  ] },
                { texts: ['String length'],
                  links: ['https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/String/length'] },
                { texts: ['String charAt'],
                  links: ['https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/String/charAt'] },
                { texts: ['Array length'],
                  links: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length'] },
                { texts: ['JS Array'],
                  links: ['https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/Array'] },
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
                { texts: ['String split'],
                  links: [
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split'
                  ] }
            ],
            x: [
                'n * 2', 's.', '', 't.', '1', 't.', 't.', 't.', '', '', 't.', 't.'
            ],
            mo: [
                (Math.PI * n).toFixed(2),
                s.length,
                s[12],
                t.length,
                t[1],
                t.filter( v => v % 2).length, 
                t.reduce( ( o, v ) => o += v, 0),
                t.reduce( ( o, v ) => o += v % 2 ? v : 0, 0),
                Math.max( ...t ),
                Math.max( ...t.filter(v => !(v % 7) ) ),
                t.slice( 0, 8 ).reduce( ( o, v ) => o += v, 0),
                t.sort( ( a, b ) => b - a ).slice( 0, 8 ).reduce( ( o, v ) => o += v, 0),
                s.split(" ").length
            ],
            fe: '<b class="green">> </b>',
            af: 0,
            ert: false
        } 
    },
    methods: {
        ku ( kk ) {
            if (kk === 38 && this.af>0 && this.af-mp >= 1) {
                mp++
                this.$set( this.x,this.af,this.x[this.af-mp] )
            }
            if (kk === 40 && this.af>0) {
                mp--
                this.$set( this.x,this.af,this.x[this.af-mp] )
            }
        },
        f() {
            try {
                let ret = this.x[this.af].includes('return') ? '' : 'return '
                myf=new Function (`
                    var t = ${ ts }
                    var s = ${ ss }
                    var n = ${ n }
                    ${ ret }${ this.x[this.af] }`)
                this.fe = '<b class="green">> </b>'    
                this.fe += `<b class="yellow">${ (mox = myf(), mox.length > 15 ? mox.slice(0,15)+"..." : mox ) }</b>`
                setTimeout( () => this.fe = `<b class="green">> </b> `, 15000 )
            } catch( error ) {
                this.fe = '<b class="green">> </b>'    
                this.fe += `<b class="red">${ error }</b>`
                setTimeout( () => this.fe = `<b class="green">> </b> `, 15000 )
            }
            if ( mox  == this.mo[this.af]) {
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
td {
    background-color: rgb(255, 245, 213);
    width: 8px;
    height: 20px;
    border-radius: 4px;
    border: none;
    padding: 2px;
    box-shadow: 0px 0px 1px rgb(147, 183, 186);
    padding: 3px;
}
th.right {
    text-align: right;
    width: 20px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 15px;
    border: none;
    background-color: white;
    vertical-align: top;
    padding-top: 13px;
    color:rgb(255, 247, 133);
    text-shadow: 0px 0px 2px black;
}
td.o {
    background-color: rgb(143, 198, 151) ;
}
table { 
    border-spacing: 4px;
    border-collapse: separate;
}
div.container {
    user-select: none;
}
div.fel {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    padding-top: 9px;
    padding-left: 1px;
    padding-bottom: 3px;
    text-shadow: 0px 0px 1px rgb(79, 49, 49);
}
div.felsz {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    margin: 5px;
    padding: 9px;
    padding-top: 17px;
    padding-bottom: 9px;
    background-color: rgb(255, 245, 213);
    box-shadow: 1px 1px 3px black;
    border-radius: 5px;
    text-shadow: 0px 0px 2px rgb(60, 48, 1);
}
div.help {
    text-align: right;
}
pre.mox {
    font-size: 15px;
    color:white;
    box-shadow: 1px 1px 3px black;
    margin: 3px;
    padding: 3px;
}
pre.feme {
    font-size: 15px;
    box-shadow: 1px 1px 3px black;
    margin: 3px;
    padding: 8px;
}
textarea.feme {
    color:rgb(249, 242, 192);
}
div.fmo {
    font-size: 35px;
    font-family: 'VT323', monospace;
}
div.right {
    text-align: right;
}
textarea { 
    width: 99%;
    height: 100px;
    font-size: 20px;
    font-family: courier, monospace;
    background: transparent;
    color:white;
    border:none;
}
textarea:focus { 
    outline: none; 
}
button.xx {
    font-size: 16px;
    box-shadow: 1px 1px 3px black;
    margin: 6px;
    padding: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
}
button.xx:hover {
    background-color: rgb(219, 233, 240);
    outline: none; 
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