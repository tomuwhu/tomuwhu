# Fakultáció

[TOC]

[Érettségi feladatsorok](https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok)

## Informatikai alapismeretek középszintű megoldások

### 2-es feladatok megoldásai

#### 2018 október

```javascript
let Ϙ, ev, h, n, ds, b, g, ε = (Ϙ = require('fs'))
    .readFileSync('uzemanyag.txt','utf-8').split('\r\n')
    .map(v => ( [ ds, b, g ] = v .split(';'),
        [ ev, h, n ] = ds.split('.').map(v=>Number(v)),
        { ev, h, n, b: Number(b), g: Number(g), ds }
    )), μ = 307.7, δ = [31,28,31,30,31,30,31,31,30,31,30,31], φ, ζ, ϡ,
κ = ( ev, v1, v2 ) => 
    ( δ[1] = !(ev % 4) ? 29 : 28,
      v1.h===v2.h ? v2.n - v1.n :  δ[v1.h-1] - v1.n + v2.n ),
Ξ = ( Ϟ, Ω, ξ) => 
    console.log( `${ Ϟ }. feladat: ${ Ω }` + (ξ || ξ === 0 ? `: ${ ξ }` : ``) )
Ξ   ( 3, 'Változások szám', ε.length)
Ξ   ( 4, 'A legkisebb különbség', ϡ = ε.map( v =>
        Math.abs(v.g-v.b)).sort((a,b)=>a-b)[0] )
Ξ   ( 5, 'A legkisebb különbség előfordulása',
        ε.filter( v => Math.abs(v.g-v.b) === ϡ).length )
Ξ   ( 6, ε.filter(v => !(v.ev % 4) && v.h===2 && v.n===24).length 
        ? 'Volt árváltozás szökőnapon!' : 'Nem volt árváltozás, vagy mi!' )
Ϙ   .writeFileSync('euro.txt', ε.map(v =>
        `${v.ds};${ ( v.b / μ).toFixed(2)};${
        ( v.g / μ ).toFixed(2) }`).join('\r\n') )
process.stdout.write(
    '8. feladat: Kérem adja meg az évszámot [2011...2016]: ' )
process.stdin.on( 'readable', () => {
    while ((ζ = process.stdin.read()) !== null) {
        if ( (φ = Number(ζ)) && φ > 2010 && φ < 2017 ) {
            Ξ( 10, `${φ} évben a leghosszabb időszak` ,
                ε.filter( v => v.ev === φ).map((v,i,t) =>
                i?κ(φ,t[i-1],t[i]):0).sort((a,b) => b-a)[0] + ' nap volt.' )
            process.exit( 0 )
        } else process.stdout.write(
                '8. feladat: Kérem adja meg az évszámot [2011...2016]: ' )
    }
} )
```

#### 2018 május

```javascript
let fs = require('fs'), f = [], ჰ, α, ξ, ζ, π, 
    ℍ = new Map(), nev, kat, egy,
    Θ = fs.readFileSync('fob2016.txt','utf-8')
          .split("\r\n").map( v =>
        ( [ nev, kat, egy, ...α ] = v.split(';'), 
          { nev, kat, egy, f: α.map( v => Number(v) ) } )),
    Ξ = (Ϟ, Ϡ) => console.log(`${ Ϟ }. feladat: ${ Ϡ }`),
    Σ = H => ( [ξ, ζ, ...α] = H.f.sort( ( a, b ) => a - b ),
        π = α.reduce( ( v, o ) => o += v, 0 ),
        π += ξ ? 10 : 0, π += ζ ? 10 : 0, π )
Ξ(3,`Versenyzők száma: ${ ჰ = Θ.length }`)
let noi = Θ.filter( v => v.kat === 'Noi')
Ξ(4,`A női versenyzők aránya: ${ ( 100 * noi.length/ჰ ).toFixed(2) }%`)
let nb = noi.sort( (a, b) => Σ(b) - Σ(a) )[0]
Ξ(6,`A Bajnok női versenyző: \n\tNév: ${ 
    nb.nev }\n\tEgyesület: ${ nb.egy }\n\tÖsszopnt: ${ Σ(nb) }`)
fs.writeFileSync('./osszpontFF.txt', Θ.map( v => 
    `${v.nev};${Σ(v)}` ).join('\r\n') )
Θ   .map( v => ℍ.set( v.egy, ( π = ℍ.get( v.egy ) ) ? ++π : 1 ) )
Ξ(8,`Egyesület statisztika:\n${ Array.from(ℍ)
    .filter( ξ => ( [α, ζ] = ξ, α !== "n.a." && ζ>2 ) )
    .map( ξ => ( [α, ζ] = ξ, `\t${ α } - ${ ζ } fő` ) ).join('\n') }`)
```

#### 2019 május

```javascript
let fs = require('fs'), q, lf='\r\n', c, μ, φ,
    exit = () => process.exit(0),
IdőÓrában = p => ( q = p.eie.split(":"), 
        Number(q[0]) + Number(q[1])/60 + Number(q[2])/3600 ),
ε = fs .readFileSync( 'ub2017egyeni.txt' ).toString( 'UTF-8' )
       .split( lf ).slice( 1, -1 )
       .map(v => ([ Λ, nΘ, kat, eie, nbsz] = v.split(';'), 
                  { Λ, Θ: Number(nΘ), kat, eie, bsz: Number(nbsz) })),
Ξ = (ζ, ξ) => console.log(`${ ζ }. feladat: ${ ξ }`),
Δ = console.log, δ = s => process.stdout.write(s)
Ξ (3, `Egyéni indulók: ${ ε.length } fő`)
Ξ (4, `Célba érkező női sportolók: ${ ε.filter( v=> 
        v.kat==='Noi' && v.bsz===100 ).length } fő`)
δ (`5. feladat: Kérem a sportoló nevét: `)
process.stdin.on('readable', () => { 
    if ( ( β = process.stdin.read().toString('utf-8') ) ) {
        q = ε.find( v => v.Λ === β.trim() )
        Δ( `\tIndult egyéniben a sportoló?  ${ q ? `Igen` : `Nem` } ` )
        if (q) Δ( `\tTeljesítette a teljes távot? ${
            q.bsz===100 ? `Igen` : `Nem` } ` )
        c = ε    .filter( v => ( v.bsz === 100 && v.kat === 'Ferfi' ) )
                .reduce( (acc,i) =>
                ( acc.ossz += IdőÓrában(i), acc.n++, acc ), { ossz: 0, n: 0 } )
        Ξ ( 7, `Átlagos idő: ${ c.ossz / c.n} óra` );
        Ξ ( 8, `A verseny győztesei:` );
        μ = ε.filter(v => (v.kat === 'Noi'   && v.bsz===100))
            .sort( (a, b) => IdőÓrában(a)-IdőÓrában(b) )[0]
        φ = ε.filter(v => (v.kat === 'Ferfi' && v.bsz===100))
            .sort( (a, b) => IdőÓrában(a)-IdőÓrában(b) )[0]
        Δ( `\tNők: ${μ.Λ} (${μ.Θ}.) - ${μ.eie}` );
        Δ( `\tFérfiak: ${φ.Λ} (${φ.Θ}.) - ${φ.eie}` );
        exit()
    }
})
```