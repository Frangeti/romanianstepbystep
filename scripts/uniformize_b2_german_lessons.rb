# frozen_string_literal: true

# Uniformizează componentele pedagogice cerute pentru lecțiile B2 destinate
# vorbitorilor de germană. Conținutul-țintă rămâne în română, iar sprijinul
# lexical este oferit în germană.

LESSONS = {
  'lessons/b2/amenajarea-unui-magazin-germana.html' => {
    goals: ['identifici ideile principale și detaliile unui articol despre comerț', 'evaluezi soluții de amenajare și explici efectul lor asupra clienților', 'exprimi scopul, cauza și consecința în enunțuri complexe', 'formulezi oral și în scris o recomandare profesională'],
    reading: 'Citește mai întâi titlul și primul enunț al fiecărui paragraf. Asociază fiecărui paragraf un cuvânt-cheie, apoi recitește textul pentru detalii.',
    dialogue: [['Mara', 'Clienții intră, dar ies repede. Cred că spațiul pare prea aglomerat.'], ['Thomas', 'Sunt de acord. Aș muta standul central pentru ca intrarea să fie mai aerisită.'], ['Mara', 'Am putea folosi și o lumină mai caldă în zona cabinelor.'], ['Thomas', 'Da, iar indicatoarele ar trebui să fie mai vizibile, astfel încât clienții să găsească ușor raioanele.'], ['Mara', 'Atunci păstrăm vitrina simplă și creăm un traseu clar prin magazin.'], ['Thomas', 'Perfect. Propunerea este practică și nu depășește bugetul.']],
    phrases: [['a atrage atenția', 'Aufmerksamkeit erregen', 'Vitrina simplă atrage atenția asupra produsului principal.', 'Das schlichte Schaufenster lenkt die Aufmerksamkeit auf das Hauptprodukt.'], ['a pune în valoare', 'zur Geltung bringen', 'Lumina caldă pune în valoare culorile hainelor.', 'Warmes Licht bringt die Farben der Kleidung zur Geltung.'], ['a ține cont de', 'berücksichtigen', 'Amenajarea trebuie să țină cont de nevoile clienților.', 'Die Gestaltung muss die Bedürfnisse der Kundschaft berücksichtigen.'], ['astfel încât', 'sodass / damit', 'Așezăm indicatoare clare, astfel încât raioanele să fie ușor de găsit.', 'Wir stellen klare Schilder auf, sodass die Abteilungen leicht zu finden sind.']],
    writing: 'Scrie o propunere de 180–220 de cuvinte pentru proprietarul unui magazin de haine. Prezintă problema actuală, trei măsuri, justificarea lor și rezultatul așteptat. Folosește cel puțin șase cuvinte din vocabular și patru structuri din lecția de gramatică.'
  },
  'lessons/b2/miscarea-in-viata-noastra-germana.html' => {
    goals: ['vorbești nuanțat despre mișcare și obiceiuri sportive', 'compari avantajele și dezavantajele mai multor activități', 'exprimi concesia, contrastul și condiția în limba română', 'recomanzi o activitate și îți justifici convingător alegerea'],
    reading: 'Citește textul o dată pentru ideea principală, apoi recitește-l și subliniază argumentele și exemplele.',
    dialogue: [['Elena', 'Aș vrea să fac mai multă mișcare, dar sala de fitness mă intimidează.'], ['Radu', 'Ai putea începe cu înotul. Este blând cu articulațiile și lucrează tot corpul.'], ['Elena', 'Îmi place ideea, deși bazinul este destul de departe.'], ['Radu', 'Atunci încearcă tenisul de două ori pe săptămână, cu condiția să găsești un partener.'], ['Elena', 'Cred că aș prefera un curs de karate. Programul este fix și m-ar ajuta să fiu consecventă.'], ['Radu', 'E o alegere bună. Important este să alegi ceva care îți face plăcere.']],
    phrases: [['a se ține de un program', 'sich an einen Plan halten', 'Mă țin mai ușor de program când mă antrenez cu o prietenă.', 'Ich halte mich leichter an meinen Plan, wenn ich mit einer Freundin trainiere.'], ['a fi în formă', 'fit sein', 'După câteva săptămâni de înot, mă simt din nou în formă.', 'Nach einigen Wochen Schwimmen fühle ich mich wieder fit.'], ['cu condiția să', 'unter der Bedingung, dass', 'Poți merge la tenis, cu condiția să rezervi terenul din timp.', 'Du kannst Tennis spielen, unter der Bedingung, dass du den Platz früh reservierst.'], ['chiar dacă', 'auch wenn', 'Continui să fac mișcare, chiar dacă uneori sunt obosit.', 'Ich bleibe aktiv, auch wenn ich manchmal müde bin.']],
    writing: 'Scrie 180–220 de cuvinte pentru o persoană care vrea să fie mai activă. Compară două activități, ține cont de program, costuri și motivație, apoi formulează o recomandare argumentată. Folosește minimum opt cuvinte din lecție și patru conectori studiați.'
  },
  'lessons/b2/lectia-02-educatie-germana.html' => {
    goals: ['vorbești despre cursuri, competențe și forme de învățare', 'folosești condiționalul prezent pentru dorințe, sfaturi și situații imaginare', 'folosești condiționalul perfect pentru regrete și situații ireale din trecut', 'compari învățarea online cu cea față în față'],
    reading: 'Citește cele trei texte scurte și identifică motivul pentru care învață fiecare persoană. Apoi compară metodele și dificultățile lor.',
    dialogue: [['Ana', 'Aș vrea să învăț să gătesc mai bine, dar nu știu ce curs să aleg.'], ['Mihai', 'În locul tău, aș merge la un atelier practic, nu la un curs exclusiv online.'], ['Ana', 'De ce? Online aș putea învăța în ritmul meu.'], ['Mihai', 'Da, dar la atelier primești imediat feedback. Eu aș fi progresat mai repede dacă aș fi cerut ajutor.'], ['Ana', 'Ai dreptate. Mă înscriu la modulul de weekend.'], ['Mihai', 'Și poți folosi tutorialele online ca să repeți acasă.']],
    phrases: [['a pune în practică', 'in die Praxis umsetzen', 'La atelier punem imediat în practică noțiunile învățate.', 'Im Workshop setzen wir das Gelernte sofort in die Praxis um.'], ['a face progrese', 'Fortschritte machen', 'Aș face progrese mai repede dacă aș vorbi zilnic în română.', 'Ich würde schneller Fortschritte machen, wenn ich täglich Rumänisch spräche.'], ['a ieși din zona de confort', 'die Komfortzone verlassen', 'Prezentarea m-a ajutat să ies din zona de confort.', 'Die Präsentation hat mir geholfen, meine Komfortzone zu verlassen.'], ['a învăța din greșeli', 'aus Fehlern lernen', 'Dacă acceptăm feedbackul, putem învăța din greșeli.', 'Wenn wir Feedback annehmen, können wir aus Fehlern lernen.']],
    writing: 'Scrie un text de 180–200 de cuvinte despre o abilitate pe care ai vrea să o înveți. Explică de ce este utilă, cum ai învăța-o și ce ar putea fi dificil. Folosește două forme de condițional prezent și o propoziție despre un regret din trecut.'
  },
  'lessons/b2/lectia-04-media-tehnologie-germana.html' => {
    goals: ['comentezi o știre și îți argumentezi acordul sau dezacordul', 'deosebești faptele, opiniile, afirmațiile și informațiile neverificate', 'redai în limba română afirmații, întrebări și îndemnuri', 'scrii o analiză clară a unei știri controversate'],
    reading: 'Citește textul o dată pentru ideea principală. Recitește-l și observă etapele prin care s-a răspândit afirmația neverificată.',
    dialogue: [['Ioana', 'Ai văzut știrea despre transportul public gratuit?'], ['Felix', 'Da, dar nu am distribuit-o. Titlul pare prea categoric.'], ['Ioana', 'Postarea spune că primăria a luat deja decizia.'], ['Felix', 'Site-ul oficial precizează că s-a discutat doar despre un program-pilot.'], ['Ioana', 'Atunci informația a fost prezentată fără context.'], ['Felix', 'Exact. Aș verifica și declarația primarului înainte să trag o concluzie.']],
    phrases: [['din câte se pare', 'anscheinend / wie es scheint', 'Din câte se pare, fotografia nu a fost făcută în acest oraș.', 'Wie es scheint, wurde das Foto nicht in dieser Stadt aufgenommen.'], ['potrivit sursei citate', 'laut der zitierten Quelle', 'Potrivit sursei citate, proiectul este încă în dezbatere.', 'Laut der zitierten Quelle wird das Projekt noch diskutiert.'], ['a verifica din mai multe surse', 'anhand mehrerer Quellen prüfen', 'Verific informația din mai multe surse înainte să o distribui.', 'Ich prüfe die Information anhand mehrerer Quellen, bevor ich sie teile.'], ['a face distincția între', 'unterscheiden zwischen', 'Trebuie să facem distincția între fapt și opinie.', 'Wir müssen zwischen Tatsache und Meinung unterscheiden.']],
    writing: 'Scrie în limba română o analiză de 180–220 de cuvinte a unei știri controversate. Rezumă afirmația inițială, redă informațiile oferite de alte două surse, evaluează dovezile și formulează recomandări practice. Folosește minimum cinci structuri de discurs indirect și opt cuvinte din lecție.'
  },
  'lessons/b2/brancusi-si-operele-lui-germana.html' => {
    goals: ['prezinți ideile centrale ale unui text despre Brâncuși', 'vorbești despre formă, material, stil și semnificație', 'folosești comparația și superlativul în descrieri argumentate', 'formulezi o opinie personală despre artă și frumusețe'],
    reading: 'Citește textul și notează ce urmărea Brâncuși prin simplificarea formelor. Identifică apoi două opere și semnificația lor.',
    dialogue: [['Laura', 'La prima vedere, sculptura mi se pare foarte simplă.'], ['Martin', 'Și mie, dar forma ei este mai expresivă decât pare.'], ['Laura', 'Crezi că artistul a vrut să reprezinte o pasăre reală?'], ['Martin', 'Nu exact. Din punctul meu de vedere, a redat ideea de zbor.'], ['Laura', 'Suprafața lucioasă pune în valoare lumina și mișcarea.'], ['Martin', 'Da. Tocmai reducerea detaliilor face opera atât de puternică.']],
    phrases: [['la prima vedere', 'auf den ersten Blick', 'La prima vedere, forma pare simplă și austeră.', 'Auf den ersten Blick wirkt die Form schlicht und streng.'], ['a pune în valoare', 'zur Geltung bringen', 'Soclul pune în valoare eleganța sculpturii.', 'Der Sockel bringt die Eleganz der Skulptur zur Geltung.'], ['a transmite o stare', 'eine Stimmung vermitteln', 'Suprafața netedă transmite o stare de calm.', 'Die glatte Oberfläche vermittelt eine ruhige Stimmung.'], ['din punctul meu de vedere', 'meiner Ansicht nach', 'Din punctul meu de vedere, opera sugerează libertatea.', 'Meiner Ansicht nach deutet das Werk Freiheit an.']],
    writing: 'Scrie 180–220 de cuvinte despre o operă a lui Brâncuși pe care o consideri importantă. Explică ce o face specială, ce stare transmite și prin ce se deosebește de o operă tradițională. Folosește minimum șase cuvinte din vocabular și patru comparații sau superlative.'
  },
  'lessons/b2/arbeitswelt-und-lebensbalance-germana.html' => {
    goals: ['vorbești despre volumul de muncă, stres și limite personale', 'exprimi presupuneri și concluzii în limba română', 'compari soluții și negociezi un compromis', 'scrii o opinie structurată și bine argumentată'],
    reading: 'Citește textul de două ori. La a doua lectură, marchează cauzele, consecințele și soluțiile propuse.',
    dialogue: [['Andrei', 'În ultima vreme răspund la mesaje și după ora nouă. Nu mai reușesc să mă odihnesc.'], ['Clara', 'Probabil că echipa presupune că ești disponibil mereu. Ai discutat cu managerul?'], ['Andrei', 'Nu încă. Mi-e teamă să nu par lipsit de implicare.'], ['Clara', 'Ai putea propune o regulă comună: mesajele neurgente să fie citite a doua zi.'], ['Andrei', 'Ar fi un compromis bun. Pentru urgențe am putea păstra un singur canal.'], ['Clara', 'Exact. Astfel pui o limită clară fără să blochezi comunicarea.']],
    phrases: [['a trage o linie între', 'eine Grenze ziehen zwischen', 'Încerc să trag o linie clară între muncă și timpul liber.', 'Ich versuche, eine klare Grenze zwischen Arbeit und Freizeit zu ziehen.'], ['a avea prea multe pe cap', 'zu viel um die Ohren haben', 'Săptămâna aceasta am prea multe pe cap și trebuie să stabilesc priorități.', 'Diese Woche habe ich zu viel um die Ohren und muss Prioritäten setzen.'], ['a ajunge la un compromis', 'einen Kompromiss finden', 'Echipa a ajuns la un compromis privind mesajele urgente.', 'Das Team hat bei dringenden Nachrichten einen Kompromiss gefunden.'], ['a lua în considerare', 'berücksichtigen', 'Soluția trebuie să ia în considerare nevoile tuturor.', 'Die Lösung muss die Bedürfnisse aller berücksichtigen.']],
    writing: 'Scrie o opinie de 180–220 de cuvinte despre limitarea mesajelor profesionale în afara programului. Prezintă avantaje și dezavantaje, descrie o situație reală sau imaginară și formulează o recomandare argumentată. Folosește minimum șase cuvinte din lecție și trei structuri pentru exprimarea presupunerii.'
  },
  'lessons/b2/lectia-06-sanatate-stil-de-viata-germana.html' => {
    goals: ['vorbești despre obiceiuri care influențează sănătatea fizică și psihică', 'formulezi sfaturi nuanțate și realiste', 'folosești corect structurile ar trebui să, e necesar să și se cuvine să', 'scrii un plan de schimbare clar, prudent și ușor de urmat'],
    reading: 'Citește textul pentru a identifica ideea principală. Recitește-l și marchează sfaturile, prioritățile și limitele fiecărei recomandări.',
    dialogue: [['Mara', 'Dorm prost și nu reușesc să păstrez nicio rutină mai mult de câteva zile.'], ['Sorin', 'În locul tău, aș începe cu o singură schimbare, nu cu un program perfect.'], ['Mara', 'Poate aș putea să închid telefonul cu o jumătate de oră înainte de culcare.'], ['Sorin', 'E o idee realistă. Ar fi bine să păstrezi și o oră de culcare aproximativ constantă.'], ['Mara', 'Iar dacă oboseala continuă?'], ['Sorin', 'Dacă simptomele persistă, e necesar să discuți cu medicul de familie.']],
    phrases: [['în locul tău, aș…', 'an deiner Stelle würde ich …', 'În locul tău, aș începe cu o plimbare scurtă după prânz.', 'An deiner Stelle würde ich mit einem kurzen Spaziergang nach dem Mittagessen anfangen.'], ['ar fi bine să', 'es wäre gut, … zu', 'Ar fi bine să ții cont de programul tău real.', 'Es wäre gut, deinen tatsächlichen Tagesablauf zu berücksichtigen.'], ['pe termen lung', 'langfristig', 'Pe termen lung, un plan flexibil este mai ușor de menținut.', 'Langfristig lässt sich ein flexibler Plan leichter beibehalten.'], ['cu condiția să', 'vorausgesetzt, dass', 'Poți crește intensitatea, cu condiția să te simți bine.', 'Du kannst die Intensität steigern, vorausgesetzt, dass du dich gut fühlst.']],
    writing: 'Scrie un mesaj de 180–220 de cuvinte pentru o persoană apropiată care este mereu obosită. Descrie situația, stabilește două priorități, oferă sfaturi nuanțate, explică avantajele lor și menționează când este necesar ajutorul unui specialist. Folosește minimum patru structuri de sfat și opt cuvinte din lecție.'
  }
}.freeze

def goals_section(goals)
  cards = goals.map { |goal| %(<div class="goal">#{goal.capitalize}.</div>) }.join
  %(<section class="section" id="obiective"><h2>🎯 Obiectivele lecției</h2><p class="lead">La finalul lecției, poți comunica în limba română cu mai multă precizie în situațiile studiate.</p><div class="goals">#{cards}</div></section>)
end

def context_section(data)
  dialogue = data[:dialogue].map { |speaker, line| %(<p><strong>#{speaker}:</strong> #{line}</p>) }.join
  rows = data[:phrases].map do |ro, de, ex_ro, ex_de|
    %(<tr><td><strong>#{ro}</strong><br><em>Exemplu: #{ex_ro}</em></td><td><strong>#{de}</strong><br><em>Beispiel: #{ex_de}</em></td></tr>)
  end.join
  <<~HTML.gsub("\n", '')
    <section class="section" id="dialog-expresii"><h2>💬 Dialog și expresii în context</h2>
    <p class="lead">Citește dialogul în limba română. Observă cum sunt folosite expresiile, apoi interpretează dialogul împreună cu un coleg.</p>
    <div class="card">#{dialogue}</div>
    <h3>Expresii utile, exemple și traducere</h3>
    <table><thead><tr><th>Română · expresie și exemplu</th><th>Deutsch · Übersetzung und Beispiel</th></tr></thead><tbody>#{rows}</tbody></table></section>
  HTML
end

LESSONS.each do |path, data|
  html = File.read(path)

  html.sub!(/<section\b[^>]*id="obiective"[^>]*>.*?<\/section>/m, goals_section(data[:goals]))

  # Titlul și instrucțiunea de lectură sunt în română; textul de bază rămâne intact.
  html.sub!(/(<section\b[^>]*>\s*)<h2([^>]*)>(?:[^<]|<(?!\/h2>))*?(Lesen|Lesetext)(?:[^<]|<(?!\/h2>))*?<\/h2>\s*<p class="lead(?: [^"]*)?">.*?<\/p>/m) do
    opening = Regexp.last_match(1)
    title = Regexp.last_match(0)[/<h2[^>]*>.*?<\/h2>/m].gsub(/<[^>]+>/, ' ').gsub(/\s+/, ' ').strip
    topic = title.split('·', 2)[1]&.strip || 'Textul lecției'
    %(#{opening}<h2>📖 Citire · #{topic}</h2><p class="lead">#{data[:reading]}</p>)
  end

  # Cerința de redactare este complet în română.
  html.sub!(/<section\b[^>]*id="(?:scriere|writing)"[^>]*>.*?<\/section>/m,
            %(<section class="section" id="scriere"><h2>✍️ Scriere</h2><p class="lead">#{data[:writing]}</p><textarea rows="10" placeholder="Scrie răspunsul aici, în limba română..."></textarea></section>))

  unless html.include?('id="dialog-expresii"')
    marker = html.index(/<section\b[^>]*id="gramatica"/)
    raise "Nu am găsit secțiunea de gramatică în #{path}" unless marker
    html.insert(marker, context_section(data))
  end

  File.write(path, html)
end

puts "Au fost actualizate #{LESSONS.length} lecții B2 pentru vorbitori de germană."

# Lecția 7 avea deja dialog și structură completă; completăm doar consecvența
# limbii pentru citire și exemplele germane ale expresiilor.
culture_path = 'lessons/b2/lectia-07-arta-cultura-literatura-germana.html'
culture = File.read(culture_path)
culture.sub!('<h2>6. Lesen · Ultima lumină</h2><p class="lead">Lesen Sie diesen eigens verfassten zeitgenössischen Kurztext. Achten Sie darauf, wie Erinnerung die Bedeutung eines Alltagsgegenstands verändert.</p>',
             '<h2>6. Citire · Ultima lumină</h2><p class="lead">Citește acest text contemporan și observă cum schimbă memoria semnificația unui obiect obișnuit.</p>')
culture.gsub!('Dialog nach dem Lesen · Cine lăsase biletul?', 'Dialog după citire · Cine lăsase biletul?')
culture.gsub!('Lesen Sie, wie zwei Freunde dasselbe Ende unterschiedlich deuten. Begründen Sie anschließend, welche Interpretation Sie überzeugender finden.', 'Citește cum interpretează doi prieteni același final. Argumentează apoi care interpretare ți se pare mai convingătoare.')
culture.gsub!('<strong>Diskutieren Sie auf Rumänisch:</strong>', '<strong>Discută în limba română:</strong>')
culture.sub!('<th>Deutsch · Bedeutung</th>', '<th>Deutsch · Übersetzung und Beispiel</th>')
{
  'Auf den ersten Blick wirkt das Werk …' => 'Auf den ersten Blick wirkt das Werk …<br><em>Beispiel: Auf den ersten Blick wirkt das Werk schlicht, doch die Details deuten einen inneren Konflikt an.</em>',
  'Dieses Detail könnte darauf hindeuten, dass …' => 'Dieses Detail könnte darauf hindeuten, dass …<br><em>Beispiel: Das geschlossene Fenster könnte darauf hindeuten, dass die Figur sich isoliert fühlt.</em>',
  'Meiner Ansicht nach lautet die Botschaft …' => 'Meiner Ansicht nach lautet die Botschaft …<br><em>Beispiel: Meiner Ansicht nach lautet die Botschaft, dass die Erinnerung die Vergangenheit nicht getreu bewahrt.</em>',
  'Ich bin nicht überzeugt, dass dies die Absicht war.' => 'Ich bin nicht überzeugt, dass dies die Absicht war.<br><em>Beispiel: Ich bin nicht überzeugt, dass die Künstlerin eine eindeutige Erklärung geben wollte.</em>',
  'Am meisten überrascht hat mich …' => 'Am meisten überrascht hat mich …<br><em>Beispiel: Am meisten überrascht hat mich die spontane Reaktion des Publikums.</em>',
  'Das Erlebnis erinnerte mich an …' => 'Das Erlebnis erinnerte mich an …<br><em>Beispiel: Das Erlebnis erinnerte mich an meinen ersten Besuch in einem Museum für moderne Kunst.</em>',
  'Ich würde es jemandem empfehlen, der …' => 'Ich würde es jemandem empfehlen, der …<br><em>Beispiel: Ich würde die Ausstellung jemandem empfehlen, der ungewöhnliche und symbolische Werke schätzt.</em>'
}.each do |original, replacement|
  culture.sub!(%(<td>#{original}</td>), %(<td>#{replacement}</td>)) unless culture.include?(replacement)
end
File.write(culture_path, culture)
