<template>
  <div class="container">
    <br>
    <div v-if="!name.length" class="center">
        <div class="fel">Adja meg a nevét: 
            <input v-model="setname" @keyup.enter="start()">
            <button class="xx" @click="start()">Kezdés</button>
        </div>
    </div>
    <div v-else>
        <div class="right">{{ name }}</div>
        <div v-if="!ert && time < 42">
            <div class="fel"><b>{{ af+1 }}. feladat:</b></div>
            <div class="felsz" v-html="fx[af]" />
            <br>
            <div v-if="hint[af] && hint[af].texts.length" class="help">
                <span v-if="xhelp[af].length" id="help">
                  <b id="h" @click="help()">Példa betöltése</b>
                  További súgók
                </span>
                <span v-else>Segítség</span>:
                <span v-for="(elem, i) in hint[af].texts">
                [ <a :href="hint[af].links[i]"        
                    target="help"
                >{{ elem }}</a> ]&nbsp;
                </span>
            </div>
            <div class="help" v-else>
                <span v-if="xhelp[af].length" @click="help()" id="help"><b id="h">Példa betöltése</b></span>
                <span v-else>Segítség</span>:
                <span v-if="!ert">Ehhez a feladathoz nincs hivatkozás megadva!</span>
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
            <table class="mt">
                <tr v-for="mor in mot">
                    <th class="right">{{ mor.fs+1 }}.</th>
                    <td style="width: 92%;" class="mt">
                        <pre class="mox">{{ mor.ms }}</pre>
                    </td>
                    <th class="right"> {{ (mor.time/1000).toFixed(0) }} &nbsp;
                    </th>
                </tr>
            </table>
            <div class="fmo center" >
                {{(mot.length / fx.length * 100).toFixed(0)}} %
                <div v-if="(mot.length / fx.length) >= 0.85">
                    Ötös! (5-ös)
                </div>
                <div v-else-if="(mot.length / fx.length) >= 0.7">
                    Négyes (4-es).
                </div>
                <div v-else-if="(mot.length / fx.length) >= 0.55">
                    Hármas (3-as).
                </div>
                <div v-else-if="(mot.length / fx.length) >= 0.4">
                    Kettes (2-es).
                </div>
                <div v-else>
                    Egyes sajnos (1-es), karó, bocs.
                </div>
            </div>
        </div>
        <hr>
        <div v-if="!ert && time < 42">
            <div class="fel">Konzol:</div>
            <div class="fmo" v-html="fe" />
            <table class="mt">
                <td v-for="(x, i) in 42" 
                    :key="'iv'+i"
                    class="mt"
                    :id="( ( af / fx.length ) * 42).toFixed()>i?'o':''" />
            </table>
            <table class="mt">
                <td v-for="(x, i) in 42" 
                    :key="'iv'+i"
                    class="mt"
                    :id="42-time < i ? 'r' : 'o'" />
            </table>
        </div>
    </div>
  </div>
</template>

<script>
var sec = 60000, myf, mox, mp = 0, mpt, nt,
    t = Array( 27 + Math.round(Math.random()*18) ).fill( 0 ).map( () => Math.round( Math.random() * 88 ) ),
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
    ss= `'${ s }'`, n = Math.round( Math.random()*13432+2341 )/1000
var rng = [2,4,7,9,10,11,14,17,19,21,24,27], rn = rng[ Math.trunc( Math.random()*12) ]
export default { 
    data() { 
        return {
            utime: new Date,
            name: '', setname: '',
            fx: [
                `Adott egy n szám ( <code>var n = ...</code> ).<br>
                 Határozza meg a <big>${ rn }</big>-szeresét 2 tizedesjegyre kerekítve!`,
                `Adott egy s string, határozza meg a ${ rn }. karakterét!`,
                `Adott egy s string szavainak számát!`,
                `Határozza meg a t tömb ${ rn }. eleme értékének ${ rn }-szeresét!<br>(A tömb 1. eleme: <code>t[0]</code> )`,
                `Határozza meg a t tömbben a páratlan számok elemszámát!`,
                `Határozza meg a t tömb elemeinek összegét!`,
                `Határozza meg a t tömbben a páratlan értékű elemek összegét!`,
                `Határozza meg a t tömbben a maximális elem értékét!`,
                `Határozza meg a t tömbben a 7-tel osztható számok közül a legnagyobbat!`,
                `Határozza meg a t tömbben az első ${ rn } elem összegét!`,
                `Határozza meg a t tömbben a legnagyobb ${ rn } elem összegét!`,
                `Határozza meg a t tömbben az ${ rn } legnagyobb, 2-vel osztható szám szorzatát!`,
                `Határozza meg a t tömbben az ${ rn-1 }. és ${ rn }. legnagyobb páratlan szám szorzatát!`
            ],
            hint: [
                { texts: ['Number.toFixed'],
                  links: [
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed'
                  ] },
                { texts: ['String charAt'],
                  links: ['https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/String/charAt'] },
                { texts: ['String split', 'String length'],
                  links: [
                      'https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/String',
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length'
                  ] },
                { texts: ['JS Array'],
                  links: [
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
                  ] },
                { texts: ['Array filter', '%-operator'],
                  links: [
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder'
                  ] },
                { texts: ['Array reduce'],
                  links: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'] },
                { texts: ['Array filter', '%-operator', 'Array reduce'],
                  links: [
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder',
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
                  ] },
                { texts: ['Array reduce','Math.max'],
                  links: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
                          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max'] },
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
                { texts: ['Array filter', 'Array sort', 'Array slice', 'Array reduce'],
                  links: [
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
                      'https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
                  ] },
                  { texts: ['Array sort'],
                  links: [
                      'https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
                  ] }
            ],
            x: [],
            xhelp: [
                '( 2 * n ).toFixed( 1 )', 's[12]', `s.split(' ')`, 't[4]',`t.filter( v => true )`,
                '', '', '', '',
                '', '', ``, ``, ``
            ],
            mo: [
                (rn * n).toFixed(2), s[rn-1], s.split(" ").length, t[rn-1]*rn,
                t.filter( v => v % 2).length,  t.reduce( ( o, v ) => o += v, 0),
                t.reduce( ( o, v ) => o += v % 2 ? v : 0, 0),
                Math.max( ...t ), Math.max( ...t.filter(v => !(v % 7) ) ),
                t.slice( 0, rn ).reduce( ( o, v ) => o += v, 0),
                t.sort( ( a, b ) => b - a ).slice( 0, rn ).reduce( ( o, v ) => o += v, 0),
                t.filter(v => v % 2).sort( ( a, b ) => b - a ).slice( 0, rn ).reduce( ( o, v ) => o *= v, 1),
                t.filter( v => v % 2 ).sort( (a, b) => b - a )[rn-2]*t.filter( v => v % 2 ).sort( (a, b) => b - a )[rn-1]
            ],
            mot: [],
            fe: '<b class="green">> </b>',
            af: 0,
            ert: false,
            time: 0
        }
    },
    methods: {
        //'"Life, the universe and everything. Answer:".length'
        start() {
            this.name  = this.setname
            this.utime = new Date
            setInterval( () => this.time++, sec )
        },
        help() {
            this.$set( this.x, this.af, this.xhelp[this.af] )
        },
        ku ( kk ) {
            if (mp === 0) mpt = this.x[this.af-mp]
            if (kk === 38 && this.af>0 && this.af-mp >= 1) {
                mp++
                this.$set( this.x,this.af,this.x[this.af-mp] )
            }
            if (kk === 40 && this.af>0 && mp > 0) {
                mp--
                this.$set( this.x,this.af,this.x[this.af-mp] )
            }
            if (mp === 0) this.x[this.af-mp] = mpt
        },
        f() {
            try {
                if (this.x[this.af]) {
                    let ret = this.x[this.af].includes('return') ? '' : 'return '
                    myf=new Function (`
                        var t = ${ ts }
                        var s = ${ ss }
                        var n = ${ n }
                        ${ ret }${ this.x[this.af] }`)
                    this.fe = '<b class="green">> </b>'    
                    this.fe += `<b class="yellow">${ 
                        (mox = myf(), mox && mox.length > 15 
                            ? mox.slice(0,15)+"..."
                            : mox == undefined ? "" : mox ) 
                    }</b>`
                    setTimeout( () => this.fe = `<b class="green">> </b> `, 2000 )
                } else {
                    this.fe = '<b class="green">> </b>'
                    this.fe = `<b class="green">> Nincs kiszámolt érték</b>`
                    setTimeout( () => this.fe = `<b class="green">> </b> `, 2000 )
                }
            } catch( error ) {
                this.fe = '<b class="green">> </b>'    
                this.fe += `<b class="red">${ error }</b>`
                setTimeout( () => this.fe = `<b class="green">> </b> `, 2000 )
            }
            if ( mox  == this.mo[this.af]) {
                mp=0
                nt = new Date
                this.mot.push({
                    fs: this.af,
                    ms: this.x[this.af],
                    mo: this.mo[this.af],
                    time: nt - this.utime
                })
                this.utime = new Date
                this.af++
                if (this.fx && this.af===this.fx.length) {
                    this.fe = '<b class="green">> </b>'    
                    this.fe += `<b class="green">Gratulálok az összes feladatot megoldotta!</b>`
                    setTimeout( () => this.fe = `<b class="green">> </b> `, 2000 )
                    this.ert = true
                } else {
                    this.fe = '<b class="green">> </b>'    
                    this.fe += ` <b class="green"> Jó megoldás! Új feladat!</b>`
                    setTimeout( () => this.fe = `<b class="green">> </b> `, 2000 )
                }
            }
        }
    }
}
</script>

<style>
b#h {
    border:solid 1px black;
    border-radius: 6px;
    margin: 8px;
    padding: 4px;
    background-color: beige;
    box-shadow: 1px 1px 3px black;
    cursor: pointer;
}
b#h:hover {
    color:rgb(49, 73, 72) ;
    text-shadow: 0px 0px 2px rgb(96, 86, 86);
}
b#h:active {
    text-shadow: 1px 1px 2px rgb(96, 86, 86);
}
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|VT323&display=swap');
input {
    text-align: left;
    font-size: 20px;
    font-family: 'Josefin Sans', sans-serif;
    background-color: rgb(255, 253, 219);
    margin: 4px;
    padding: 5px;
    color:rgb(12, 65, 73);
}
td.mt {
    background-color: rgb(255, 245, 213);
    width: 8px;
    height: 20px;
    border-radius: 4px;
    border: none;
    padding: 2px;
    box-shadow: 0px 0px 1px rgb(147, 183, 186);
    padding: 3px;
}
td.c {
    background-color: rgb(255, 77, 77);
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
    color:rgb(36, 35, 19);
}
td#o {
    background-color: rgb(143, 198, 151) ;
}
td#r {
    background-color: rgb(242, 212, 212) ;
}
table.mt {
    width: 120%;
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
    color: red;
}
div.right {
    text-align: right;
}
div.center {
    text-align: center; 
}
textarea.feme { 
    width: 99%;
    height: 100px;
    font-size: 20px;
    font-family: courier, monospace;
    background: transparent;
    color:white;
    border:none;
}
textarea.feme:focus { 
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
h2.mt {
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
input {
    width: 200px;
}
</style>