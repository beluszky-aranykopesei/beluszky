const quotes = [
    "Színvonaltalan, gyerekes, elszomorító",
    "Precíz, jó, értelmes jegyzetek. Egy tévedés van csak benne, Arisztotelésszel kapcsolatban.",
    "Megkérdőjelezem, hogy most mi a munkám értelme?",
    "Ha mégegyszer meg látom a kezét, hogy lendít!",
    "Szolíd, tudatos, tisztelettudó, csak a Kristóf!",
    "Halihó!",
    "Belátással, inteligenciával kéne viselkedni.",
    "Noh!",
    "Engem nem érdekel ki, csak az, hogy ne legyen.",
    "Meglepő, szarkasztikus és humoros",
    "Igazán megismerném milyen lehet érzéketlen, lelkiismeretlen tuskónak lenni.",
    "Elfogadom a helyzeted, csak egyáltalán nem érdekel.",
    "Bár én nem vagyok egy analfabéta, jobbágy paraszt.",
    "Ti is -hozzátenném jogosan- meg lennétek megsértődve, ha miközben beszéltek hozzám én fülhallgatóként, öhm illetve, fülhallgatóval Bizsit hallgatnék.",
    "Ez kihozza belőlem a vadállatot!",
    "A véletlenért sem akarom Mátyást az Orosz elnökhöz hasonlítani, de...",
    "Hát én mindjárt dobok egy hátast, ilyen fiatalosan fogalmazva.",
    "Manufaktúra - Közép újkori közép ember",
    "Öhm... Bocsáss meg, kicsoda? Oh, Tímea, hát igen ő mindig nagyon segítőkész és egy igazán kommunikatív egyéniség.",
    "Halihó! Figyelem! Szűnjön meg a sus, maradjon a kuss!",
    "Ez aztán igazán közösségellenes, antikollegiális magatartás.",
    "Igen, igen most beszéltem Vida Lacival.",
    "Rendben, megkaptad a négyesed, de attól még fordulj előre!",
    "Nem, ennyi lehet. Ez se olyan kicsi.",
    "Csavarom, csavarom, de hiába.",
    "Ott van Ulrich Zwingly, magyarul Zwingly Ulrich",
    "Csöndet kérünk (Továbbra is egyedül van), halihó!",
    "Nem film, csak egy kicsit nagyobb képillusztráció",
    "A kőrözési listán, a kőrözött személy...",
    "És valójában ők hozták létre a mai Nyű Jorkot.",
    "Kicsike, mozgékony, de nehezen elsüllyeszthető.",
    "Az oroszok annyian vannak, mint az oroszok.",
    "Aaa... mondjad már, könyörgök! Adók! Köszönöm!",
    "Jah, hétfőn, bocsánat szamár vagyok.",
    "Nyilván ennek megvan a saját csínyja, bínyja.",
    "Aha, itt lehet nagyítani!",
    "Hát ez egyenlőre nagyon mini.",
    "Tú bí or nát to bí, det is dö kveszcsán. - Beluszky Shékszpír",
    "Ő volt O.V., de nem Orbán Viktor, ah véletlenül sem. Hanem Orániai Vilmos",
    "Nem elesett, hanem megölték",
    "Napkirály... ő volt a 17. századi Donald Trump, csak ő normális volt.",
    "Hosszú volt a napom, mentek végig az óráim, de sajnálatosan rosszul voltam.",
    "Ilyen szinten még Sztálin se verte szét, nah mondjuk Hitler igen, de ő el is tűnt a süllyesztőben. Szerencsére...",
    "Nem az a bajom, hogy szülinapom van, hanem az, hogy ilyen sok.",
    "Köszönjétek a drága, kedves, elviselhetetlen, tiszteletlen, [...] osztálytársaitoknak.",
    "A dolgok jelenlegi állása miatt, minden rosszindulat nélkül, egy perccel sem mehettek el hamarabb, sajnálom.",
    "Nehogy már nektek csak jogaitok legyenek, nekem meg csak kötelességeim.",
    "Hát 111 év múlva hozzád is eljutott a hír, jobb mint soha.",
];

// A napi idézet lekérése vagy kiválasztása
let dailyQuote = localStorage.getItem('daily-quote');
if (!dailyQuote) {
    dailyQuote = quotes[Math.floor(Math.random() * quotes.length)];
    localStorage.setItem('daily-quote', dailyQuote);
}

// Idézet megjelenítése a DOM-ban
document.getElementById('daily-quote').innerText = dailyQuote;
