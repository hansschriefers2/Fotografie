// Shooting-Guides je Anlass (/guide/newborn/, /guide/babybauch/, /guide/familie/, /guide/paare/) – nicht verlinkt, noindex.
// Werden nach der Buchung per Link oder als PDF verschickt. Allgemeine Styling-Inhalte (Farbpaletten,
// Grundregeln, „Lieber nicht“) kommen aus ./styleguide.ts und erscheinen in jedem Guide.
import type { Photo } from "./fotos";
import { nicole, photos } from "./fotos";

export interface Karte {
  titel: string;
  text: string;
  /** Symbol im Ablauf (siehe Liste in src/pages/guide/[typ].astro) */
  icon?: string;
}

export interface Guide {
  id: string;
  /** Anzeige: „Newborn“ */
  name: string;
  titel: string;
  titelKursiv: string;
  intro: string;
  fotos: { titel: Photo; atmosphaere: Photo; ort: Photo; outfit: Photo; abschluss: Photo };
  atmosphaere: { text: string[]; punkte: Karte[] };
  ablauf: Karte[];
  ort: { eyebrow: string; titel: string; text: string; tipps: Karte[] };
  /** Palette, die zuerst gezeigt wird (Name aus styleguide.ts) */
  palette: string;
  outfit: Karte[];
  /** Zusatzseite (Familie: „Wenn's mal knirscht“, Paar: „Kleine Ideen“); eyebrow Standard: „Kind bleibt Kind“ */
  geschwister?: { eyebrow?: string; titel: string; text: string[]; tipps: string[] };
  checkliste: string[];
  abschluss: string;
}

export const guides: Guide[] = [
  {
    id: "newborn",
    name: "Newborn",
    titel: "Willkommen,",
    titelKursiv: "kleines Wunder",
    intro:
      "Wie schön, dass ich euch in dieser ganz besonderen Zeit begleiten darf! In diesem Guide findet ihr alles, was ihr für euer Newborn-Shooting zu Hause wissen müsst, vom Ablauf über das richtige Licht bis zur Kleiderwahl. Nehmt euch einen ruhigen Moment und stöbert in Ruhe.",
    fotos: {
      titel: photos.baby06,
      atmosphaere: photos.baby16,
      ort: photos.baby09,
      outfit: photos.baby14,
      abschluss: nicole.kniend,
    },
    atmosphaere: {
      text: [
        "Das Wichtigste vorweg: Es gibt nichts, was ihr richtig oder falsch machen könnt. Ihr seid gerade erst als Familie angekommen, die Nächte sind kurz und jeder Tag ist anders. Genau das darf man sehen, und genau das macht eure Bilder so echt.",
        "Euer Baby gibt das Tempo vor. Wenn es Hunger hat, wird gestillt. Wenn es weint, wird gekuschelt. Ich warte geduldig und fotografiere, wenn alle wieder entspannt sind.",
      ],
      punkte: [
        { titel: "Kein Zeitdruck", text: "Pausen zum Stillen, Wickeln und Kuscheln sind fest eingeplant." },
        { titel: "Nichts gestellt", text: "Ich leite euch sanft an, wo es hilft, und halte mich sonst im Hintergrund." },
        { titel: "Sicherheit zuerst", text: "Euer Baby wird nur von euch gehalten und nie in unsichere Posen gebracht." },
      ],
    },
    ablauf: [
      { icon: "nachricht", titel: "Nach der Geburt melden", text: "Wenn ihr mögt, meldet euch schon in der Schwangerschaft. Dann plane ich euren Termin grob um den Geburtstermin ein. Sobald euer Baby da ist, schreibt mir kurz. Ideal sind die ersten 5 bis 14 Lebenstage." },
      { icon: "haus", titel: "Ich komme zu euch", text: "Ich bringe nur meine Kamera mit und nutze das Licht eurer Fenster. Ihr müsst nichts aufbauen." },
      { icon: "herz", titel: "Erst ankommen", text: "Euer Baby ist satt und frisch gewickelt. Wir beginnen mit Familienbildern, dann folgen Details wie Händchen und Füße." },
      { icon: "bild", titel: "Eure Galerie", text: "Nach etwa zwei Wochen bekommt ihr eure Online-Galerie und sucht euch eure Lieblingsbilder aus." },
    ],
    ort: {
      eyebrow: "Fotospots bei euch",
      titel: "Euer Zuhause erzählt mit",
      text: "Euer Zuhause muss nicht aussehen wie aus einem Magazin. Es gehört zu eurer Geschichte und macht die Bilder unverwechselbar eure.",
      tipps: [
        { titel: "Licht ist alles", text: "Am schönsten ist ein Raum mit großem Fenster. Oft ist das Licht am Vormittag oder Mittag am weichsten. Schaut gern vorher, wann es wo am hellsten ist." },
        { titel: "Das Bett als Bühne", text: "Ein großes Bett mit heller, schlichter Bettwäsche ist der perfekte Ort für Kuschelbilder. Auch Sofa und Kinderzimmer eignen sich wunderbar." },
        { titel: "Schön warm", text: "Heizt den Raum auf etwa 24 bis 26 °C vor. Neugeborene frieren schnell, und ein warmes Baby schläft viel entspannter." },
        { titel: "Aufräumen? Nur grob", text: "Räumt größere Dinge weg, die nicht aufs Bild sollen. Wäschekorb und Spucktuch schieben wir beim Shooting einfach kurz zur Seite." },
      ],
    },
    palette: "Hell & sanft",
    outfit: [
      { titel: "Fürs Baby", text: "Ein schlichter Body oder Strampler in Creme, Beige oder Hellgrau ist ideal. Ideal ist die passende Größe, denn zu lange Ärmel verstecken sonst die winzigen Händchen." },
      { titel: "Füßchen zeigen", text: "Hat der Strampler Füße, lohnt sich ein zweites Outfit ohne. Die kleinen Zehen sind so schnell gewachsen. Auf den Bildern bleiben sie für immer winzig." },
      { titel: "Für Mama", text: "Ein weiches Kleid oder Oberteil mit Knöpfen oder etwas Ausschnitt, praktisch zum Stillen und wunderschön für Haut-an-Haut-Bilder." },
      { titel: "Für Papa", text: "Ein helles T-Shirt, Hemd oder ein feiner Strickpulli in einer Farbe der Palette passt wunderbar. Große Uhren und Ketten drücken beim Kuscheln, ohne ist es meist gemütlicher." },
    ],
    geschwister: {
      titel: "Großer Bruder, große Schwester",
      text: [
        "Für die Großen ist das Shooting oft aufregend und manchmal auch ein bisschen viel. Deshalb nehme ich mir zuerst Zeit für sie, damit sie spüren: Hier geht es auch um mich.",
        "Wir starten mit den Bildern, auf denen alle dabei sind. Danach dürfen die Großen gern mit Oma, Opa oder Papa etwas anderes machen.",
      ],
      tipps: [
        "Erzählt vorher, dass eine Fotografin kommt und ihr zusammen kuschelt und spielt.",
        "Ein Lieblingskuscheltier oder kleines Spielzeug darf gern mit aufs Bild.",
        "Ist das große Kind skeptisch, kuschelt es einfach mit Mama oder Papa. Die schönsten Momente kommen oft ganz von allein.",
      ],
    },
    checkliste: [
      "Raum auf 24–26 °C vorheizen",
      "Baby kurz vor dem Termin stillen oder füttern",
      "Outfits bereitlegen, bei Bedarf bügeln",
      "Ein zweites Baby-Outfit (ohne Füßchen)",
      "Helle, schlichte Bettwäsche aufziehen",
      "Größere Dinge wegräumen, die nicht aufs Bild sollen",
      "Kuscheltier, Spieluhr oder Erinnerungsstücke bereitlegen",
      "Brille statt Kontaktlinsen? Dann vorher schon aufsetzen (keine Druckstellen)",
    ],
    abschluss: "Ich freue mich so sehr darauf, euer kleines Wunder kennenzulernen!",
  },
  {
    id: "babybauch",
    name: "Babybauch",
    titel: "Die Zeit",
    titelKursiv: "der Vorfreude",
    intro:
      "Ein runder Bauch, ein kleines Herz, das darin schlägt, und ganz viel Vorfreude: Diese Zeit ist so besonders und so schnell vorbei. In diesem Guide findet ihr alles für euer Babybauch-Shooting: den richtigen Zeitpunkt, den schönsten Ort und was ihr anziehen könnt.",
    fotos: {
      titel: photos.schwangerschaft01,
      atmosphaere: photos.familie12,
      ort: photos.familie10,
      outfit: photos.baby09,
      abschluss: nicole.kniend,
    },
    atmosphaere: {
      text: [
        "Bei einem Babybauch-Shooting geht es nicht um perfekte Posen, sondern um euch zwei (oder drei, oder vier) und die Vorfreude auf das, was kommt. Ihr müsst nicht wissen, wie man vor der Kamera steht – ich zeige es euch.",
        "Euer Wohlbefinden steht an erster Stelle. Wenn der Rücken zwickt oder das Baby turnt, machen wir eine Pause. Sagt mir einfach Bescheid.",
      ],
      punkte: [
        { titel: "Sanft angeleitet", text: "Ich gebe euch kleine Impulse, der Rest entsteht ganz natürlich." },
        { titel: "Bequem bleiben", text: "Wir wählen nur Positionen, die sich für euch gut anfühlen." },
        { titel: "Zeit zu zweit", text: "Viele Paare sagen hinterher: Das war ein richtig schöner gemeinsamer Abend." },
      ],
    },
    ablauf: [
      { icon: "kalender", titel: "Den Zeitpunkt wählen", text: "Am schönsten zwischen der 30. und 36. Schwangerschaftswoche. Der Bauch ist rund und ihr fühlt euch noch fit." },
      { icon: "ort", titel: "Den Ort festlegen", text: "Draußen im Abendlicht oder gemütlich bei euch zu Hause? Das besprechen wir im Vorgespräch." },
      { icon: "kamera", titel: "Das Shooting", text: "Etwa eine Stunde: Bilder von dir allein, als Paar, mit Geschwistern und kleine Details." },
      { icon: "bild", titel: "Eure Galerie", text: "Nach etwa zwei Wochen bekommt ihr eure Online-Galerie, oft genau rechtzeitig vor der Geburt." },
    ],
    ort: {
      eyebrow: "Wo wir fotografieren",
      titel: "Draußen oder zu Hause",
      text: "Beides hat seinen ganz eigenen Zauber. Draußen wird es luftig und weit, zu Hause intim und vertraut.",
      tipps: [
        { titel: "Goldenes Abendlicht", text: "Draußen fotografieren wir am liebsten ein bis zwei Stunden vor Sonnenuntergang. Dann ist das Licht warm und weich." },
        { titel: "Felder & Waldränder", text: "Rund um Wurmberg gibt es wunderschöne Wiesen, Feldwege und Waldränder. Habt ihr einen Lieblingsort? Erzählt mir davon!" },
        { titel: "Gemütlich drinnen", text: "Zu Hause eignet sich ein helles Schlafzimmer mit großem Fenster. Das Bett mit heller Bettwäsche ist perfekt für Kuschelbilder." },
        { titel: "Wetter-Plan B", text: "Spielt das Wetter nicht mit, verschieben wir kostenfrei oder weichen spontan nach drinnen aus." },
      ],
    },
    palette: "Warm & erdig",
    outfit: [
      { titel: "Den Bauch betonen", text: "Schön sind ein eng anliegendes Kleid, ein figurnahes Shirt oder eine offene Bluse über einem Top. Alles, was die Rundung zeigt." },
      { titel: "Fließende Kleider", text: "Lange Kleider, die im Wind schwingen, sehen draußen traumhaft aus. Mit einem Kleid und einem lockeren Outfit zum Wechseln habt ihr schöne Abwechslung." },
      { titel: "Für den Partner", text: "Ein schlichtes Hemd, ein Strickpulli oder ein T-Shirt in einer Farbe der Palette passt gut." },
      { titel: "Natürlich schön", text: "Dezenter Schmuck, natürliches Make-up und offene oder locker gesteckte Haare sehen am natürlichsten aus. Weite Kleidung auf dem Weg zum Shooting verhindert Abdrücke auf der Haut." },
    ],
    geschwister: {
      titel: "Wenn die Großen dabei sind",
      text: [
        "Wird euer Kind bald großer Bruder oder große Schwester? Dann gehört es unbedingt mit aufs Bild! Ein Kuss auf den Bauch, ein Ohr ans Baby: Diese Momente sind unbezahlbar.",
      ],
      tipps: [
        "Wir fotografieren die Bilder mit Geschwistern am Anfang, solange die Laune gut ist.",
        "Danach dürfen die Großen gern mit Oma, Opa oder Papa spielen gehen.",
      ],
    },
    checkliste: [
      "Outfits auswählen und vorher anprobieren",
      "Am Tag selbst weite Kleidung ohne enge Bündchen tragen",
      "Bequeme Schuhe für den Weg zum Ort mitnehmen",
      "Etwas zu trinken und einen kleinen Snack einpacken",
      "Kleine Details: Ultraschallbild, erste Babyschuhe, Kuscheltier",
      "Haargummi und Haarspangen für zwischendurch",
      "Im Herbst und Winter: Jacke für die Pausen",
      "Mutterpass nicht vergessen, sicher ist sicher",
    ],
    abschluss: "Ich freue mich darauf, eure Vorfreude in Bildern festzuhalten!",
  },
  {
    id: "familie",
    name: "Familie & Kinder",
    titel: "Lasst die Kinder",
    titelKursiv: "Kinder sein",
    intro:
      "Rennen, lachen, kuscheln: Genau so sollen eure Familienbilder werden. In diesem Guide erfahrt ihr, wie euer Shooting abläuft, welcher Ort und welche Tageszeit sich eignen und wie ihr euch ganz entspannt kleidet. Das gilt auch für Kinder- und 1.-Geburtstag-Shootings.",
    fotos: {
      titel: photos.familie02,
      atmosphaere: photos.familie04,
      ort: photos.familie15,
      outfit: photos.familie01,
      abschluss: nicole.kniend,
    },
    atmosphaere: {
      text: [
        "Kinder lassen sich nicht stellen. Und das ist auch gut so! Statt „Bitte lächeln“ spielen wir Fangen, laufen um die Wette oder erzählen uns Quatsch. So entstehen echte Momente und echtes Lachen.",
        "Und wenn mal jemand keine Lust hat? Völlig normal. Wir machen eine Pause, essen einen Keks und starten neu. Das gehört dazu, und ihr werdet staunen, wie viele schöne Bilder trotzdem entstehen.",
      ],
      punkte: [
        { titel: "Spielen statt posen", text: "Ich bringe Spiele und kleine Ideen mit, die Kinder lieben." },
        { titel: "Kein Lächel-Druck", text: "Bitte kein „Jetzt schau mal schön!“. Das echte Lachen kommt von allein." },
        { titel: "Alle dürfen mit", text: "Großeltern, Hund oder Lieblingskuscheltier: Wer zu euch gehört, gehört aufs Bild." },
      ],
    },
    ablauf: [
      { icon: "kalender", titel: "Ort & Zeit planen", text: "Im Vorgespräch suchen wir einen schönen Ort und eine Uhrzeit, die zum Rhythmus eurer Kinder passt." },
      { icon: "sonne", titel: "Locker ankommen", text: "Wir starten ganz entspannt mit einem kleinen Spaziergang. So können sich alle erst einmal an mich gewöhnen." },
      { icon: "funkeln", titel: "Spielen & entdecken", text: "Etwa eine Stunde lang: Familienbilder, Geschwister, Eltern zu zweit und ganz viele Momente dazwischen." },
      { icon: "bild", titel: "Eure Galerie", text: "Nach etwa zwei Wochen bekommt ihr eure Online-Galerie und sucht euch eure Lieblingsbilder aus." },
    ],
    ort: {
      eyebrow: "Ort & Tageszeit",
      titel: "Wo es euch gefällt",
      text: "Der schönste Ort ist einer, an dem ihr euch wohlfühlt, ob Wiese, Waldrand oder euer eigener Garten.",
      tipps: [
        { titel: "Weiches Licht", text: "Am schönsten ist der späte Nachmittag oder Abend. Die Mittagssonne meiden wir, weil sie harte Schatten wirft und alle kneifen die Augen zusammen." },
        { titel: "Nach dem Mittagsschlaf", text: "Ausgeschlafene, satte Kinder sind die besten Models. Plant den Termin rund um ihren Rhythmus." },
        { titel: "Platz zum Toben", text: "Wiesen, Feldwege und Baumstämme laden zum Rennen und Klettern ein. Perfekt für lebendige Bilder." },
        { titel: "Bewölkt ist super", text: "Leichte Wolken sind wie ein natürlicher Weichzeichner. Nur bei Regen verschieben wir – natürlich kostenfrei." },
      ],
    },
    palette: "Natur & grün",
    outfit: [
      { titel: "Bei einem Teil anfangen", text: "Oft ist es am leichtesten, mit einem Lieblingsteil zu beginnen, zum Beispiel dem Kleid der Mama, und den Rest der Familie darauf abzustimmen." },
      { titel: "Für die Kinder", text: "Schwingende Kleider, Strickjacken, Cord oder Leinen sehen toll aus. Hauptsache bequem, damit sie rennen und sich im Gras wälzen können." },
      { titel: "Feste Schuhe", text: "Wir laufen über Wiesen und Feldwege. Dafür eignen sich bequeme, schlichte Schuhe in Braun- oder Naturtönen am besten." },
      { titel: "Lagen für jedes Wetter", text: "Eine Jacke oder Strickjacke zum Ausziehen sorgt dafür, dass niemand friert oder schwitzt, und bringt schöne Abwechslung ins Bild." },
    ],
    geschwister: {
      titel: "Wenn's mal knirscht",
      text: [
        "Nicht jedes Kind hat am Shooting-Tag Lust auf Fotos, und das ist völlig in Ordnung. Ich lasse ihm Zeit, ziehe es spielerisch mit ein und dränge nie.",
      ],
      tipps: [
        "Erzählt vorher, dass ihr zusammen einen Ausflug macht und eine Fotografin mitkommt. Ganz ohne Erwartungen.",
        "Kleine Belohnung danach? Gern! Aber bitte nicht während des Shootings ankündigen, sonst wartet jeder nur darauf.",
        "Bleibt selbst entspannt. Kinder spüren sofort, wenn die Großen gestresst sind.",
      ],
    },
    checkliste: [
      "Outfits am Vorabend bereitlegen und kurz anprobieren",
      "Kinder vorher ausschlafen lassen und satt losgehen",
      "Ein kleiner Snack ohne Krümel und Flecken, etwas zu trinken",
      "Feuchttücher, Taschentücher und eine Haarbürste",
      "Wechselkleidung für die Kleinen",
      "Lieblingskuscheltier oder Spielzeug",
      "Im Sommer Mückenschutz, im Winter Mütze und Handschuhe",
      "Gute Laune und Zeit. Alles andere machen wir zusammen",
    ],
    abschluss: "Ich freue mich auf eine fröhliche Stunde mit euch!",
  },
  {
    id: "paare",
    name: "Paar",
    titel: "Einfach",
    titelKursiv: "ihr zwei",
    intro:
      "Ob frisch verliebt, schon lange zusammen oder einfach mal wieder Zeit zu zweit: In diesem kleinen Guide erfahrt ihr, wie euer Paarshooting abläuft, welcher Ort und welche Tageszeit sich eignen und was ihr anziehen könnt. Und keine Sorge – Fotomodel-Erfahrung braucht ihr keine.",
    // Vorläufig Nicoles eigene Fotos – sobald es Paarbilder gibt, hier austauschen
    fotos: {
      titel: nicole.weite,
      atmosphaere: nicole.hauptbild,
      ort: photos.familie09,
      outfit: nicole.portrait,
      abschluss: nicole.kniend,
    },
    atmosphaere: {
      text: [
        "Die meisten Paare sagen mir vorher: „Wir sind nicht so die Fototypen.“ Das ist völlig normal und überhaupt kein Problem. Posen braucht es nicht, und die ganze Zeit in die Kamera lächeln auch nicht.",
        "Wir gehen zusammen ein Stück spazieren, ich gebe euch kleine Impulse, und ihr dürft einfach ihr sein: albern, verliebt, nachdenklich. Die schönsten Bilder entstehen meist genau dann, wenn ihr mich kurz vergesst.",
      ],
      punkte: [
        { titel: "Kein Posen-Stress", text: "Vorwissen braucht ihr keins. Ich sage euch, wo ihr ungefähr hinlaufen könnt, den Rest macht ihr ganz von allein." },
        { titel: "Kleine Impulse", text: "Ein Flüstern ins Ohr, eine Frage, ein kleines Spiel: So entsteht echtes Lachen statt gestellter Blicke." },
        { titel: "Ganz ihr selbst", text: "Ob ruhig und innig oder laut und albern: Eure Bilder sollen sich nach euch anfühlen." },
      ],
    },
    ablauf: [
      { icon: "kalender", titel: "Ort & Zeit planen", text: "Im Vorgespräch suchen wir gemeinsam einen Ort, der zu euch passt, und eine Uhrzeit mit schönem Licht." },
      { icon: "kaffee", titel: "Ankommen & warm werden", text: "Wir starten mit einem kurzen Spaziergang und quatschen ein bisschen. So verfliegt die Aufregung ganz von selbst." },
      { icon: "herz", titel: "Zeit zu zweit", text: "Etwa eine Stunde Zeit zu zweit, mal ganz nah, mal mit viel Landschaft drumherum." },
      { icon: "bild", titel: "Eure Galerie", text: "Nach etwa zwei Wochen bekommt ihr eure Online-Galerie und sucht euch eure Lieblingsbilder aus." },
    ],
    ort: {
      eyebrow: "Ort & Tageszeit",
      titel: "Euer Ort",
      text: "Am schönsten ist ein Ort, an dem ihr euch wohlfühlt, vielleicht ein Ort mit Geschichte, zum Beispiel dort, wo ihr euch kennengelernt habt.",
      tipps: [
        { titel: "Goldene Stunde", text: "Ein bis zwei Stunden vor Sonnenuntergang ist das Licht warm und weich. Morgens bei Sonnenaufgang ist es oft genauso schön und ganz still." },
        { titel: "Ein Ort mit Bedeutung", text: "Euer Lieblingsspaziergang, die Bank am See, der Weg hinterm Haus: Orte, die euch etwas bedeuten, machen die Bilder noch persönlicher." },
        { titel: "Platz zum Gehen", text: "Wege und Wiesen, auf denen ihr laufen könnt, sind ideal. In Bewegung fühlt man sich viel lockerer als im Stehen." },
        { titel: "Bewölkt ist super", text: "Leichte Wolken sind wie ein natürlicher Weichzeichner. Nur bei Regen verschieben wir – natürlich kostenfrei." },
      ],
    },
    palette: "Warm & erdig",
    outfit: [
      { titel: "Abgestimmt statt gleich", text: "Partnerlook ist nicht nötig. Schön ist es, wenn eure Farben zueinander passen, zum Beispiel Creme und Camel oder Salbei und Sand." },
      { titel: "Was sich gut anfühlt", text: "Zieht an, worin ihr euch wohl und wie ihr selbst fühlt. Ein Lieblingspulli wirkt auf Bildern oft schöner als ein neues Outfit, das zwickt." },
      { titel: "Bewegung erlaubt", text: "Kleider, Röcke, Mäntel oder ein großer Schal bewegen sich schön im Wind und bringen Leben ins Bild." },
      { titel: "Lagen & Schuhe", text: "Eine Jacke zum Ausziehen bringt Abwechslung. Für den Weg lohnen sich bequeme Schuhe. Schöne Schuhe für die Bilder könnt ihr gern mitnehmen." },
    ],
    geschwister: {
      eyebrow: "Wenn ihr mögt",
      titel: "Kleine Ideen für mehr Nähe",
      text: [
        "Ein paar persönliche Kleinigkeiten machen eure Bilder noch mehr zu euren. Alles kann, nichts muss.",
      ],
      tipps: [
        "Bringt etwas mit, das zu euch gehört: eine Decke, eine Thermoskanne mit Kaffee oder euren Hund.",
        "Erzählt mir vorher, wie ihr euch kennengelernt habt. Daraus ergeben sich oft die schönsten Ideen.",
        "Ihr habt ein Lied, das euch verbindet? Leise über das Handy abgespielt, wirkt es manchmal Wunder.",
      ],
    },
    checkliste: [
      "Outfits am Vorabend bereitlegen und kurz anprobieren",
      "Bequeme Schuhe für den Weg",
      "Haarbürste, Lippenpflege und Taschentücher",
      "Etwas zu trinken",
      "Im Herbst und Winter: eine warme Jacke für zwischendurch",
      "Ein persönliches Lieblingsteil, wenn ihr mögt",
      "Zeit und gute Laune. Alles andere machen wir zusammen",
    ],
    abschluss: "Ich freue mich auf eine entspannte Stunde mit euch zwei!",
  },
];
