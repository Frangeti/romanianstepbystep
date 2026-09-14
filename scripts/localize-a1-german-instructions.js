ObjC.import('Foundation');
const base='/Users/raluca/Workspace/romanianstepbystep/lessons/a1/';
const files=['lectia-01-primul-contact-germana.html','lectia-02-date-personale-germana.html','lectia-03-familia-si-persoanele-germana.html'];
const common=[
['Partenera mea este germană.','Partenera mea este germancă.'],
['Acasă','Home'],['Programa A1','A1-Lehrplan'],['Lecția anterioară','Vorherige Lektion'],['Lecția următoare','Nächste Lektion'],
['Verifică','Prüfen'],['Reia','Neu starten'],['Transcriere','Transkript'],['Model:','Beispiel:'],
['Pot folosi vocabularul lecției și pot comunica prin propoziții scurte și clare.','Ich kann den Wortschatz der Lektion verwenden und mit kurzen, klaren Sätzen kommunizieren.'],
['Într-o conversație, pronumele poate lipsi: „Sunt Ana.” este foarte natural.','Im Gespräch kann das Personalpronomen entfallen: „Sunt Ana.” klingt sehr natürlich.'],
['Negație: nu + verb → Nu vorbesc italiană.','Verneinung: nu + Verb → Nu vorbesc italiană.'],
['Naționalitatea se acordă','Nationalitätsbezeichnungen werden angepasst'],
['Numere utile','Wichtige Zahlen'],['Verbe utile','Wichtige Verben'],
['Verbul „a avea”','Das Verb „a avea”'],['Posesivul: mai întâi substantivul','Possessivformen: Entscheidend ist das Substantiv'],
['Substantiv masculin','Maskulines Substantiv'],['Substantiv feminin','Feminines Substantiv'],['Acordul adjectivului','Adjektivkongruenz'],
['Alegem „meu” sau „mea” după genul obiectului posedat: fratele','Wir wählen „meu” oder „mea” nach dem Genus des Bezugsworts: fratele'],
['Nu după genul persoanei care vorbește.','Nicht nach dem Geschlecht der sprechenden Person.'],
['Pentru păr și ochi folosim „a avea”:','Für Haare und Augen verwenden wir „a avea” (haben):'],
['Accentul cade de obicei pe o silabă clară. Repetă lent, apoi natural.','Die Betonung liegt meist deutlich auf einer Silbe. Sprich zuerst langsam, dann in natürlichem Tempo.'],
['În întrebări, vocea urcă ușor la final:','Bei Fragen steigt die Stimme am Ende leicht an:'],
['Adjectivul feminin are deseori finala „-ă”:','Die feminine Adjektivform endet häufig auf „-ă”:'],
['Ești la prima oră de curs. Salută profesorul, spune numele și prezintă un coleg.','Du bist in deiner ersten Unterrichtsstunde. Begrüße die Lehrkraft, nenne deinen Namen und stelle eine andere Person vor.'],
['La recepția unui curs completezi un formular și spui oral țara, orașul și limbile tale.','An der Kursanmeldung füllst du ein Formular aus und nennst mündlich dein Land, deine Stadt und deine Sprachen.'],
['Arată o fotografie și prezintă două persoane: relația, numele, vârsta și două trăsături.','Zeige ein Foto und stelle zwei Personen vor: Beziehung, Name, Alter und zwei Eigenschaften.']
];
const perFile=[
[
['Salută, prezintă-te și poartă primul dialog simplu în limba română.','Begrüße jemanden, stelle dich vor und führe dein erstes kurzes Gespräch auf Rumänisch.'],
['salut și rămas-bun','begrüßen und verabschieden'],['numele și prezentarea','Name und Vorstellung'],['pronumele personale','Personalpronomen'],['verbul „a fi” la prezent','das Verb „a fi” im Präsens'],
['Ana și Daniel se întâlnesc pentru prima dată.','Ana und Daniel treffen sich zum ersten Mal.'],['Ce spui când întâlnești o persoană?','Was sagst du, wenn du jemanden zum ersten Mal triffst?'],
['Afirmație','Aussage'],['Întrebare','Frage'],['Răspuns','Antwort'],
['Bună dimineața! se folosește…','Wann verwendet man „Bună dimineața!”?'],['dimineața','morgens'],['seara','abends'],['la despărțire','beim Abschied'],['Forma politicoasă este…','Welche Form ist höflich?'],['Răspunsul corect la „Mulțumesc” este…','Welche Antwort auf „Mulțumesc” ist richtig?'],
['Prezintă-te în 3 propoziții: salut, nume și formula de încheiere.','Stell dich in drei Sätzen vor: Begrüßung, Name und Abschiedsformel.'],['Scrie un mini-dialog de 4 replici între două persoane care se cunosc.','Schreibe einen Mini-Dialog mit vier Sprechzeilen zwischen zwei Personen, die sich kennenlernen.'],
['saluta și prezenta o persoană','jemanden begrüßen und vorstellen'],['alege forma gramaticală corectă','die richtige grammatische Form auswählen'],['înțelege un dialog A1 spus rar și clar','einen langsam und deutlich gesprochenen A1-Dialog verstehen']
],
[
['Spune de unde vii, unde locuiești și ce limbi vorbești.','Sage, woher du kommst, wo du wohnst und welche Sprachen du sprichst.'],
['țara și orașul','Land und Stadt'],['naționalitatea și limba','Nationalität und Sprache'],['numerele 0–100','Zahlen von 0 bis 100'],['negația cu „nu”','Verneinung mit „nu”'],
['Doi cursanți completează un formular și discută.','Zwei Kursteilnehmende füllen ein Formular aus und sprechen miteinander.'],['Ce informații personale poți spune deja în română?','Welche persönlichen Angaben kannst du bereits auf Rumänisch machen?'],
['„Nu vorbesc franceză” este…','„Nu vorbesc franceză” ist …'],['afirmație','eine Aussage'],['negație','eine Verneinung'],['întrebare','eine Frage'],['Ea vine din Austria. Ea este…','Sie kommt aus Österreich. Welche rumänische Form passt?'],['Numărul 30 este…','Welche Form bedeutet 30?'],
['Spune: numele, țara, orașul și limbile pe care le vorbești.','Nenne deinen Namen, dein Land, deine Stadt und die Sprachen, die du sprichst.'],['Completează un profil: nume, țară, oraș, limbi și număr de telefon fictiv.','Fülle ein Profil aus: Name, Land, Stadt, Sprachen und eine erfundene Telefonnummer.'],
['folosi vocabularul temei în propoziții simple','den Themenwortschatz in einfachen Sätzen verwenden'],['spune țara, orașul și limbile','Land, Stadt und Sprachen nennen'],['înțelege un dialog A1 spus rar și clar','einen langsam und deutlich gesprochenen A1-Dialog verstehen']
],
[
['Prezintă familia și descrie simplu o persoană.','Stelle deine Familie vor und beschreibe eine Person mit einfachen Sätzen.'],
['membrii familiei','Familienmitglieder'],['vârsta și relațiile','Alter und Beziehungen'],['posesivul meu/mea','Possessivformen meu/mea'],['descrierea simplă și acordul','einfache Beschreibung und Kongruenz'],
['Maria, un membru al familiei lui Andrei.','Maria, ein Mitglied von Andreis Familie.'],['Câte persoane poți numi în limba română?','Wie viele Familienmitglieder kannst du auf Rumänisch benennen?'],
['„Sora mea” este corect pentru că „sora” este…','„Sora mea” ist richtig, weil „sora” … ist.'],['masculin','maskulin'],['feminin','feminin'],['plural','Plural'],['El ___ ochii albaștri.','Welches Verb passt: El ___ ochii albaștri.'],['Antonimul lui „înalt” este…','Was ist das Gegenteil von „înalt”?'],
['Prezintă o persoană din familia ta în 4 propoziții. Poți vorbi și despre un prieten.','Stelle eine Person aus deiner Familie in vier Sätzen vor. Du kannst auch über einen Freund oder eine Freundin sprechen.'],['Scrie 5 propoziții despre familia ta sau despre o familie imaginară.','Schreibe fünf Sätze über deine Familie oder über eine erfundene Familie.'],
['folosi vocabularul temei în propoziții simple','den Themenwortschatz in einfachen Sätzen verwenden'],['prezenta și descrie familia','die Familie vorstellen und beschreiben'],['înțelege un dialog A1 spus rar și clar','einen langsam und deutlich gesprochenen A1-Dialog verstehen']
]
];
function read(p){return ObjC.unwrap($.NSString.stringWithContentsOfFileEncodingError($(p),$.NSUTF8StringEncoding,null))}function write(p,s){$(s).writeToFileAtomicallyEncodingError($(p),true,$.NSUTF8StringEncoding,null)}
for(let i=0;i<files.length;i++){const path=base+files[i];let html=read(path);for(const pair of common.concat(perFile[i]))html=html.split(pair[0]).join(pair[1]);write(path,html)}
