"""Build compact print editions from the live citizenship materials."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'pdf'
CSS = '''
@page { size:A4; margin:14mm 13mm 15mm; @bottom-right { content:counter(page); font:9pt Arial; color:#687780; } }
*{box-sizing:border-box}body{margin:0;color:#263746;font:10pt/1.4 Arial,sans-serif}
h1{font-size:23pt;line-height:1.12;color:#315f45;margin:0 0 8pt}h2{font-size:16pt;color:#315f45;margin:15pt 0 7pt;break-after:avoid}h3{font-size:11pt;color:#315f45;margin:5pt 0;break-after:avoid}
p{margin:5pt 0}a{color:#315f45;text-decoration:none;overflow-wrap:anywhere}ul,ol{padding-left:18pt;margin:5pt 0}
.brand{font-size:10pt;color:#315f45;margin-bottom:9pt}.lead{font-size:11pt}.hero{border-bottom:2pt solid #8fab35;padding-bottom:10pt}
.meta{display:flex;gap:8pt;margin-top:7pt;font-size:9pt}.reference,.note{font-size:9pt;color:#53656f}
.question{border:1px solid #ccd8cf;border-radius:5pt;padding:7pt 9pt;margin:7pt 0;break-inside:avoid;min-width:0}
legend{font-weight:bold;padding:0 4pt;max-width:100%}.choice{display:block;padding:2pt 0}.choice input{display:none}.choice span:before{content:'○ ';color:#315f45}
textarea{display:none}.oral .question:after{content:'';display:block;height:24pt;border-bottom:1px dotted #aab6ad}
.answer-key{border-top:2pt solid #8fab35;margin-top:18pt;padding-top:10pt}.answer-key h1{break-after:avoid}.key-item{break-inside:avoid;margin:7pt 0;padding-bottom:6pt;border-bottom:1px solid #dde5df}
.lesson-grid{display:grid;grid-template-columns:1fr 1fr;gap:7pt}.lesson-grid .mini{margin:0}.sources{break-inside:avoid}
.mini{break-inside:avoid;border:1px solid #d5e2dd;border-radius:5pt;padding:7pt 9pt;margin:6pt 0}.mini .nr{font-weight:bold;color:#315f45;float:right}.mini .question{background:#f4f7ef;font-size:9pt;margin-bottom:0}
.day-title{display:flex;align-items:center;gap:8pt}.day-no{color:#315f45;font-weight:bold;font-size:15pt}.time{font-size:9pt;color:#687780}.day-head{break-after:avoid}
.practice,.official{background:#f0f5e9;border-left:3pt solid #8fab35;padding:7pt 10pt;margin:8pt 0;break-inside:avoid}
.overview,.exam-grid{display:flex;gap:8pt;margin:9pt 0}.metric,.exam-card{flex:1;border:1px solid #d5e2dd;padding:7pt}.metric b{display:block;color:#315f45}
.sources{font-size:9pt}.section{margin:0}.sources h2{font-size:13pt}.oral{margin-bottom:12pt}.eyebrow{font-size:9pt;letter-spacing:.5pt;color:#315f45}
'''

def write_edition(name, title, body):
    extra = '.mini{padding:5pt 7pt}.mini ul{margin:3pt 0}.mini .question{padding:5pt 7pt}.day h2{margin-top:11pt}.lesson-grid{gap:5pt}' if name.startswith('plan-') else ''
    html = '<!doctype html><html lang="ro"><head><meta charset="utf-8"><title>' + title + '</title><style>' + CSS + extra + '</style></head><body><div class="brand">Romanian Step by Step · B1 Română</div>' + body + '</body></html>'
    (OUT / name).write_text(html, encoding='utf-8')

tests = (ROOT / 'tests/b1/teste-cetatenie-romana.html').read_text()
chapters = re.findall(r'<section class="section chapter".*?</section>', tests, re.S)
assert len(chapters) == 5
keys = []
printed = []
for chapter in chapters:
    title = re.search(r'<h2[^>]*>(.*?)</h2>', chapter, re.S).group(1)
    key = '<h2>' + title + '</h2>'
    for n, field in enumerate(re.findall(r'<fieldset\b.*?</fieldset>', chapter, re.S), 1):
        answer = re.search(r'data-answer="([^"]+)"', field).group(1)
        choices = re.findall(r'<input\b[^>]*value="([^"]+)"[^>]*><span>([ABC])\.', field)
        letter = next(letter for value, letter in choices if value == answer)
        explanation = re.search(r'<div class="answer" hidden>(.*?)</div>', field, re.S).group(1)
        explanation = re.sub(r'<p class="verdict"></p>', '', explanation)
        explanation = re.sub(r'<a [^>]*>.*?</a>', '', explanation, flags=re.S)
        key += f'<div class="key-item"><strong>{n}. Varianta {letter}</strong>{explanation}</div>'
    for n, block in enumerate(re.findall(r'<details>(.*?)</details>', chapter, re.S), 1):
        model = re.sub(r'<summary>.*?</summary>', '', block, flags=re.S)
        key += f'<div class="key-item"><strong>Răspuns oral {n} · model</strong>{model}</div>'
    keys.append(key)
    chapter = re.sub(r'<div class="answer" hidden>.*?</div>', '', chapter, flags=re.S)
    chapter = re.sub(r'<details>.*?</details>', '', chapter, flags=re.S)
    chapter = re.sub(r'<p class="progress".*?</p>|<div class="buttons">.*?</div>|<p class="feedback".*?</p>', '', chapter, flags=re.S)
    chapter = re.sub(r'<p><a href="#capitole">.*?</p>', '', chapter, flags=re.S)
    chapter = chapter.replace('apoi apasă „Verifică testul”', 'apoi consultă baremul de la finalul documentului')
    printed.append(chapter)
source_section = re.search(r'<section class="section" id="surse">.*?</section>', tests, re.S).group(0)
source_section = re.sub(r'<p><a class="btn".*?</p>', '', source_section, flags=re.S)
intro = '<div class="hero"><span class="eyebrow">TESTE PENTRU CETĂȚENIA ROMÂNĂ</span><h1>Teste pe capitole</h1><p>5 capitole · 72 de întrebări grilă · 10 întrebări orale</p><p>Nume: .................................................... Data: ....................</p><p>Încercuiește o singură variantă la fiecare întrebare. Verifică răspunsurile după ce ai terminat. Fiecare răspuns corect valorează un punct. Întrebările orale se autoevaluează separat.</p><p>Material de antrenament adaptat după PDF-ul furnizat; nu reprezintă subiecte oficiale de examen.</p></div>'
write_edition('teste-cetatenie-romana-print.html', 'Teste pentru cetățenia română · B1', intro + '\n'.join(printed) + '<section class="answer-key"><h1>Barem și explicații</h1><p>Consultă această parte după rezolvarea testelor. Modelele orale acceptă și alte formulări corecte.</p>' + '\n'.join(keys) + '</section>' + source_section)

plan = (ROOT / 'lessons/b1/pregatire-cetatenie-romana-7-zile.html').read_text()
body = re.search(r'<main>(.*?)</main>', plan, re.S).group(1)
body = re.sub(r'<nav class="footer">.*?</nav>', '', body, flags=re.S)
body = re.sub(r'<div class="pdf-downloads"[^>]*>.*?</div>', '', body, flags=re.S)
write_edition('plan-cetatenie-romana-7-zile-print.html', 'Pregătire pentru cetățenia română în 7 zile · B1', body)
print('Ediții pentru tipărire generate: 72 întrebări cu variante și barem; plan integral cu 49 mini-lecții.')
