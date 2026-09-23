ObjC.import('Foundation');
const path='/Users/raluca/Workspace/romanianstepbystep/lessons/b2/lectia-04-media-tehnologie-engleza.html';
let html=ObjC.unwrap($.NSString.stringWithContentsOfFileEncodingError($(path),$.NSUTF8StringEncoding,null));
const replacements=[
['<section class="section" id="obiective"><h2>Learning goals · Obiective</h2><p class="lead">This lesson follows Unit 4 of the B2 curriculum: media, technology, misinformation and reported speech.</p>','<section class="section" id="obiective"><h2>Learning goals · Obiective</h2><div class="note"><strong>Target language: Romanian.</strong> English is used only for instructions and brief meaning support. Read, listen, answer, discuss and write in Romanian.</div><p class="lead">This lesson follows Unit 4 of the B2 curriculum: media, technology, misinformation and Romanian reported speech.</p>'],
['<h3>A. Reporting statements</h3><table><thead><tr><th>Direct speech</th><th>Reported speech</th><th>English</th>','<h3>A. Reporting statements in Romanian</h3><table><thead><tr><th>Direct Romanian speech</th><th>Reported Romanian speech</th><th>Meaning support</th>'],
['<strong>Answer after listening.</strong>','<strong>Answer in Romanian after listening.</strong>'],
['<section class="section" id="vorbire"><h2>8. Speaking · Analysing a controversial story</h2><div class="grid2">','<section class="section" id="vorbire"><h2>8. Speaking in Romanian · Analysing a controversial story</h2><div class="note"><strong>Use Romanian throughout the role-play.</strong></div><div class="grid2">'],
['Explain what the post says and why it seems convincing. Ask for confirmation.','Explain the claim in Romanian, say why it seems convincing and ask for confirmation.'],
['Ask about the author, date and evidence. Report what an official source said. Recommend three verification steps.','Ask in Romanian about the author, date and evidence. Report what an official source said and recommend three verification steps.'],
['<section class="section" id="scriere"><h2>9. Writing · News analysis</h2><p><strong>B2 task, 180–220 words:</strong> Write an analysis of a controversial online story.','<section class="section" id="scriere"><h2>9. Writing in Romanian · News analysis</h2><p><strong>B2 task, 180–220 Romanian words:</strong> Write an analysis in Romanian of a controversial online story.'],
['<div><strong>Language</strong><br>reported speech + precise vocabulary</div>','<div><strong>Romanian language</strong><br>reported speech + precise vocabulary</div>'],
['□ I can assess a source. □ I can report statements, questions and instructions. □ I can discuss misinformation. □ I can write a balanced news analysis.','□ I can assess a source in Romanian. □ I can report statements, questions and instructions in Romanian. □ I can discuss misinformation in Romanian. □ I can write a balanced Romanian news analysis.']
];
for(const [from,to] of replacements)html=html.split(from).join(to);
$(html).writeToFileAtomicallyEncodingError($(path),true,$.NSUTF8StringEncoding,null);
