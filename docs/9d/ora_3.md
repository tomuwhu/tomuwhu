Fájlformátumok

A fájlformátum (fájltípus) meghatározza, hogy adott fájltípusban mit és miképpen tárolhatunk az adathordozón.

A szövegfájl vagy .txt (Text fájl) az informatikában legelterjedtebb, legalapvetőbb, formázást nem tartalmazó, szöveges dokumentumformátum.

A szövegfájl kifejezés konténerformátumra utal, a plain text format („sima szöveges fájl") a tartalomra utal. A szövegfájlok lehetnek sima szöveges fájlok, de ez nem szükségszerű.

Az ASCII egy mozaikszó: az American Standard Code for Information Interchange kezdőbetűiből (jelentése kb.: szabványos amerikai kódinformációcserére). A kód jelkészlete az angol abc betűit, számokat, írásjeleket és vezérlő kódokat tartalmazza. Az ASCII jelkészlet 128 különböző szövegkaraktert 0..127 előjel nélküli egész számokra képez le. A kisbetű/nagybetű külön kódnak számít. Ez a kód 8 bitből áll, az első karakter 0 (pl.:01011010), ha amerikaiak hasznáják, és 1, ha más nemzetek.

Az ISO 8859-2 az [ISO/IEC 8859] szabvány második része. Az [ISO] (International Organization for Standardization, ISO magyarul: Nemzetközi Szabványügyi Szervezet egy [nemzetközi szervezet]) által kettes számú latin ábécének nevezett 191 [karakter] mindegyikének [egybájtos] (nyolcbites) kódját adja meg. A 191 karakter között minden magyar ékezetes betű megtalálható (a sok más készletből hiányzó ő és ű is). A kódolás szinte minden adatátviteli és kommunikációs rendszerben használható, és a következő európai nyelvek megjelenítésére alkalmas: bosnyák, cseh, horvát, lengyel, magyar, [román], [szerb](a latinbetűs írásmóddal), szerbhorvát, szlovák, szlovén, alsószorb és [felsőszorb]. Bizonyos nyugat-európai nyelvek leírására is alkalmas (pl.: [finn]).

1 byte: 256 (28) féle számot tárolhat

2 byte: 65 536 (216)

4 byte: 4 294 967 296 (232)

UTF-8 kódolás (kínai rendszer):

Az UTF-8 (8-bit Unicode Transformation Format, 8 bites Unicode átalakítási formátum) változó hosszúságú [Unicode] [karakterkódolási] és [Ken Thompson] alkotott meg. Bármilyen Unicode karaktert képes reprezentálni, ugyanakkor visszafelé kompatibilis a 7 bites [ASCII] szabvánnyal. Emiatt egyre inkább az [internetes] karakterkódolás standardjává válik(az egész világ ezt használja). Az UTF-8-kódolás lényege, hogy a 7 bites ASCII kódtábla karaktereit (angol kis- és nagybetűk, számok és gyakoribb írásjelek) az ASCII-kódjukkal jelöli, az egyéb karakterek kódját pedig „feldarabolja", és a darabokat egy vezérlőjelet követő több, egymás utáni bájtban helyezi el úgy, hogy a bájtok mindegyike 127 felett van (azaz így nem téveszthető össze a 7 bites ASCII-kódok egyikével sem). A karakterek mindenütt ugyanazok. Hátránya viszont az, hogy nem lehet formázni (pl.: igazításokat készíteni), ezért nincs meg az átláthatóság.

Fájlformátumok:

fájlnév.txt

fájlnév.md

h1 # \_\_

h2 ##

h3 ###

TOC: table of content-tartalomjegyzék

h1 \&lt;— a betűméretet szabhatjuk meg vele

-

-        felsorolás

-

-
——       \&lt;— alfelsorolás

HTML:

A HTML (angolul: HyperText Markup Language=hiperszöveges jelölőnyelv) egy leíró nyelv, melyet [weboldalak] készítéséhez fejlesztettek ki, és mára már internetes szabvánnyá vált a [W3C] (World Wide Web Consortium) támogatásával. HTML általában szöveges állományokban található meg olyan [számítógépeken], melyek az internethez kapcsolódnak. Ezek az állományok tartalmazzák azokat a szimbólumokat, amelyek a megjelenítő programnak leírják, hogyan is kell megjeleníteni illetve feldolgozni az adott állomány tartalmát. Megjelenítő program lehet például egy [webböngésző].

               nyitó tag

\&lt;CICA\&gt;

               belseje             HTML objektum

\&lt;/CICA\&gt;

                   záró tag



\&lt;CICA\&gt;                        \&lt;CICA\&gt;

    \&lt;EGÉR\&gt;                    \&lt;EGÉR\&gt;

    \&lt;/EGÉR\&gt;                    \&lt;/EGÉR\&gt;

\&lt;/CICA\&gt;                    \&lt;EGÉR\&gt;

                            \&lt;/EGÉR\&gt;

                        \&lt;/CICA\&gt;

\&lt;html\&gt;

     \&lt;head\&gt;

     \&lt;/head\&gt;

     \&lt;body\&gt;

     \&lt;/body\&gt;

\&lt;/html\&gt;



Az Ecma International (Európai informatikai és kommunikációs rendszerek szabványosítási szövetsége, European association for standardising information and communication systems) [1994]-ben jött létre, amikor az Európai Számítógépgyártók Szövetsége (European Computer Manufacturers Association (ECMA)) megváltoztatta nevét, ezzel is jelezve a szervezet új nemzetközi tevékenységét. Az ECMA [1961]-ben alakult azon célból, hogy az európai számítástechnikai rendszerek szabványosítását koordinálja. A tagság nyitott minden olyan cégnek, ami Európában számítógépeket vagy kommunikációs eszközöket gyárt.

\&lt;CICA farok=&quot;tarka&quot;\&gt;

\&lt;/CICA\&gt;        attribútum-property (Az attribútum informatikai értelemben is több jelentésben használt fogalom, mely jelentéstartalmakat az fogja össze, hogy valamely (fizikai vagy logikai) objektum milyen tulajdonságokkal ruházható fel)



\&lt;BR\&gt;

brake-sortörés

\&lt;HR\&gt;                     nincs záró tagje

horizontal

\&lt;INPUT\&gt;

\&lt;SPAN(\&gt;) ID=&quot;\_\_&quot;\&gt;

\&lt;/SPAN\&gt;                van záró tagje, viszont nem csinál semmit

\&lt;DIV\&gt;

\&lt;/DIV\&gt;



\&lt;TABLE\&gt;

     \&lt;TR\&gt;\&lt;TH\&gt;...\&lt;/TR\&gt;                                \&lt;TD\&gt; Technical Design (fizikai tervezési fázis)

     \&lt;TR\&gt;\&lt;TD\&gt;...\&lt;/TD\&gt;...\&lt;/TR\&gt;                        \&lt;TR\&gt; tabular report(táblázatos jellegű jelentés)

         :                                                \&lt;TH\&gt; table header cella

         :

\&lt;/TABLE\&gt;

táblázat-sor-cellák



kiemelés \&lt;B\&gt;-\&lt;/B\&gt;

dőlt \&lt;I\&gt;\&lt;/I\&gt;

\&lt;STYLE\&gt;

       :

       :

    #ONEMTUDOM

\&lt;/STYLE\&gt;

\&lt;SPAN ID &quot;ONEMTUDOM&quot;\&gt;

      :

      :

\&lt;/SPAN\&gt;

TOTAL COMMANDER

\&lt;!DOCTYPE html\&gt;

\&lt;h1\&gt;CÍM\&lt;/h1\&gt;
\&lt;i\&gt;Valami\&lt;/i\&gt;

codesandbox.io – The online code editor

\&lt;style\&gt;

div {

       color:red;

       background-color:green;

       text-align:center;

       box-shadow: 1px 1px 3px black;

       border-radius: 8px;

       text-shadow: 0px 0px 3px black;

                   }

\&lt;/style\&gt;

Kép beillesztése:

\&lt;img src=&quot;rose.jpg&quot; width=&quot;230&quot; height=&quot;189&quot;
   style=&quot;float: right&quot; alt=&quot;Egy rózsa fényképe&quot; title=&quot;Rózsa&quot;\&gt;



HREF attribútum a hivatkozás céljának:

\&lt;a href=&quot;https://www.w3schools.com&quot;\&gt;Visit W3Schools\&lt;/a\&gt;