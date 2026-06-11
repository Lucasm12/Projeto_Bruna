const infections = [
  {id:'resp1',cat:'respiratoria',name:'Pneumonia Bacteriana',icon:'🫁',color:'#E3F2FD',badge:'badge-blue',badgeText:'Respiratória',
   summary:'Infecção pulmonar bacteriana com alto potencial de gravidade.',
   definition:'A pneumonia bacteriana é uma infecção aguda do parênquima pulmonar causada por agentes como Streptococcus pneumoniae, Staphylococcus aureus e Klebsiella pneumoniae.',
   etiology:'Streptococcus pneumoniae (mais comum), Haemophilus influenzae, Staphylococcus aureus, Klebsiella pneumoniae, Pseudomonas aeruginosa (hospitalar).',
   symptoms:['Febre alta (>38,5°C)','Tosse produtiva','Dispneia','Dor torácica pleurítica','Taquicardia','Crepitação à ausculta','Cianose (graves)'],
   identification:['Radiografia de tórax: consolidação','Hemograma: leucocitose','Hemocultura','Escarro: cultura e Gram','PCR elevada','Procalcitonina'],
   alertType:'warning',alertText:'A pneumonia pode evoluir para sepse. Avalie SEMPRE o índice CURB-65 para estratificação de risco.',
   note:'Atenção para pneumonia hospitalar (HAP) em pacientes internados >48h — exige cobertura para Gram-negativos.'},

  {id:'resp2',cat:'respiratoria',name:'Tuberculose Pulmonar',icon:'🦠',color:'#FFF8E1',badge:'badge-orange',badgeText:'Respiratória',
   summary:'Doença infecciosa crônica causada pelo Mycobacterium tuberculosis.',
   definition:'A tuberculose pulmonar é doença crônica causada pelo Mycobacterium tuberculosis, transmitida por via aérea. É de notificação compulsória.',
   etiology:'Mycobacterium tuberculosis (bacilo de Koch). Transmissão por aerossóis de pacientes bacilíferos.',
   symptoms:['Tosse persistente >3 semanas','Hemoptise','Emagrecimento','Sudorese noturna','Febre vespertina','Astenia intensa','Anorexia'],
   identification:['Baciloscopia de escarro (BAAR)','Cultura de Micobactéria','Teste rápido molecular (TRM-TB)','Radiografia: cavitações em lobos superiores','PPD/IGRA'],
   alertType:'danger',alertText:'Notificação compulsória imediata. Isolar o paciente e investigar contactantes. Iniciar tratamento conforme protocolo do Ministério da Saúde.',
   note:'Tratamento padrão: esquema RHZE por 6 meses. Monitorar hepatotoxicidade.'},

  {id:'uri1',cat:'urinaria',name:'Infecção do Trato Urinário',icon:'🫘',color:'#E8F5E9',badge:'badge-green2',badgeText:'Urinária',
   summary:'Infecção bacteriana prevalente, especialmente em mulheres e idosos.',
   definition:'ITU caracteriza-se pela presença e multiplicação de micro-organismos no trato urinário, podendo acometer uretra, bexiga (cistite) ou rins (pielonefrite).',
   etiology:'Escherichia coli (80%), Klebsiella spp., Proteus mirabilis, Enterococcus faecalis, Staphylococcus saprophyticus.',
   symptoms:['Disúria','Polaciúria','Urgência miccional','Hematúria','Dor suprapúbica','Urina turva ou fétida','Febre e calafrios (pielonefrite)'],
   identification:['Exame de urina tipo 1 (EAS)','Urocultura com antibiograma','Leucocitúria e nitrito positivo','Hemograma (pielonefrite)','Ultrassonografia (casos complicados)'],
   alertType:'info',alertText:'Pielonefrite requer internação e ATB IV. Coletar urocultura ANTES de iniciar antibiótico.',
   note:'ITU recorrente (>3 episódios/ano): investigar fatores predisponentes e considerar profilaxia.'},

  {id:'pele1',cat:'pele',name:'Celulite Bacteriana',icon:'🩹',color:'#FCE4EC',badge:'badge-red2',badgeText:'Pele',
   summary:'Infecção bacteriana aguda da derme e tecido subcutâneo.',
   definition:'A celulite é uma infecção bacteriana aguda não purulenta da derme e hipoderme, geralmente por estreptococos ou estafilococos.',
   etiology:'Streptococcus pyogenes, Staphylococcus aureus (incluindo MRSA), Gram-negativos (imunossuprimidos).',
   symptoms:['Eritema expansivo','Calor local','Edema','Dor intensa','Febre','Linfadenopatia regional','Pele brilhante e tensa'],
   identification:['Diagnóstico clínico predominante','Hemograma: leucocitose','PCR e VHS elevados','Hemocultura (febre alta)','Cultura de secreção'],
   alertType:'warning',alertText:'Diferenciar de erisipela e fasciite necrosante (emergência cirúrgica). Crepitação = EMERGÊNCIA.',
   note:'Marcar com caneta os limites do eritema para monitorar progressão.'},

  {id:'pele2',cat:'pele',name:'Erisipela',icon:'🔴',color:'#FFEBEE',badge:'badge-red2',badgeText:'Pele',
   summary:'Infecção superficial da derme com eritema bem delimitado característico.',
   definition:'A erisipela é infecção bacteriana superficial da derme com acometimento dos vasos linfáticos, caracterizada por placa eritematosa bem delimitada.',
   etiology:'Streptococcus pyogenes (grupo A) — causa principal.',
   symptoms:['Placa eritematosa bem delimitada','Bordas elevadas e nítidas','Calor e dor intensos','Febre alta','Calafrios','Linfangite','Bolhas (formas bolhosas)'],
   identification:['Diagnóstico clínico','ASLO','Hemograma','Hemocultura (febre persistente)','Biópsia (casos atípicos)'],
   alertType:'info',alertText:'Tratar com penicilina G IV (internados) ou amoxicilina oral (ambulatorial leve). Prevenir recidiva com penicilina benzatina mensal.',
   note:'Principal porta de entrada: fissuras entre os dedos por tinea pedis. Tratar o fungo!'},

  {id:'hosp1',cat:'hospitalar',name:'Infecção de Corrente Sanguínea',icon:'🩸',color:'#F3E5F5',badge:'badge-purple',badgeText:'Hospitalar',
   summary:'ICSRC associada a cateter — uma das infecções hospitalares mais graves.',
   definition:'Infecção de corrente sanguínea relacionada a cateter (ICSRC): bacteremia ou fungemia em paciente com cateter sem outro foco identificado.',
   etiology:'S. coagulase-negativo, S. aureus, Enterococcus spp., Candida spp., Klebsiella spp., E. coli.',
   symptoms:['Febre >38°C ou hipotermia','Calafrios intensos','Instabilidade hemodinâmica','Eritema/edema no sítio do cateter','Sinais de sepse'],
   identification:['Hemoculturas pareadas (central + periférica)','Tempo diferencial de positividade','Cultura da ponta do cateter','Hemograma, PCR, Procalcitonina','Lactato sérico'],
   alertType:'danger',alertText:'Remover cateter imediatamente quando ICSRC confirmada. Iniciar antibiótico empírico para MRSA (vancomicina).',
   note:'Bundle de cateter: higienização das mãos, barreira máxima, clorexidina 2%, preferência pela veia subclávia.'},

  {id:'hosp2',cat:'hospitalar',name:'Pneumonia Associada à VM',icon:'🫀',color:'#E8EAF6',badge:'badge-purple',badgeText:'Hospitalar',
   summary:'PAV — principal infecção em UTI, com alta mortalidade.',
   definition:'Pneumonia associada à ventilação mecânica (PAV): pneumonia que surge ≥48h após intubação endotraqueal e início de ventilação mecânica.',
   etiology:'Pseudomonas aeruginosa, Acinetobacter baumannii, Klebsiella pneumoniae (ESBL+), S. aureus (MRSA), polimicrobiana.',
   symptoms:['Novo infiltrado na RX','Febre ou hipotermia','Leucocitose ou leucopenia','Secreção traqueal purulenta','Queda da relação PaO2/FiO2'],
   identification:['Cultura de secreção traqueal','Lavado broncoalveolar (padrão-ouro)','Hemograma, PCR','Procalcitonina','RX/TC de tórax','Hemocultura'],
   alertType:'danger',alertText:'Bundle PAV: cabeceira 30-45°, higiene oral com clorexidina, pressão do cuff 20-30 cmH2O, interrupção diária de sedação.',
   note:'Terapia de curta duração (7 dias) é recomendada para PAV sem imunossupressão ou Pseudomonas.'},

  {id:'sist1',cat:'sistemica',name:'Sepse',icon:'⚠️',color:'#FFEBEE',badge:'badge-red2',badgeText:'Sistêmica',
   summary:'Emergência médica — resposta desregulada do hospedeiro à infecção.',
   definition:'Sepse: disfunção orgânica ameaçadora à vida causada por resposta desregulada do hospedeiro a uma infecção (Sepsis-3, 2016).',
   etiology:'Qualquer agente infeccioso. Focos: pulmão (mais comum), abdome, trato urinário, corrente sanguínea, pele.',
   symptoms:['Alteração aguda do SOFA ≥2 pontos','Hipotensão','Febre ou hipotermia','Taquicardia e taquipneia','Alteração do estado mental','Oligúria'],
   identification:['Escore SOFA e qSOFA','Lactato sérico (>2 mmol/L)','Hemoculturas (2 pares antes ATB)','Hemograma, PCR, Procalcitonina','Função renal e hepática','Gasometria'],
   alertType:'danger',alertText:'BUNDLE HORA 1: medir lactato, hemoculturas, antibiótico amplo espectro, cristaloides 30ml/kg, vasopressores se PAM<65. TEMPO É VIDA.',
   note:'Choque séptico = sepse + vasopressor para PAM≥65 + lactato>2 mmol/L. Mortalidade: 40-50%.'},

  {id:'sist2',cat:'sistemica',name:'Endocardite Infecciosa',icon:'❤️',color:'#FCE4EC',badge:'badge-red2',badgeText:'Sistêmica',
   summary:'Infecção do endocárdio valvar — diagnóstico pelos critérios de Duke.',
   definition:'A endocardite infecciosa (EI) é infecção do endocárdio, principalmente das válvulas cardíacas, formando vegetações que podem embolizar.',
   etiology:'S. aureus (válvulas nativas), Streptococcus viridans (doença valvar prévia), Enterococcus, S. coagulase-negativo (próteses), Candida (UDIV).',
   symptoms:['Febre persistente','Sopro cardíaco novo','Nódulos de Osler','Manchas de Janeway','Hemorragias em flâmula','Manchas de Roth','Esplenomegalia'],
   identification:['Critérios de Duke','2-3 pares de hemoculturas','Ecocardiograma transtorácico/transesofágico','Hemograma, PCR, VHS','TC/PET-CT'],
   alertType:'warning',alertText:'Iniciar antibiótico APENAS após hemoculturas (2 pares), salvo instabilidade hemodinâmica. Avaliação cirúrgica precoce.',
   note:'EI em usuário de drogas IV: S. aureus, válvula tricúspide afetada principalmente.'},
];

const libraryItems = [
  {id:'l1',cat:'protocolo',icon:'📋',title:'Protocolo de Prevenção de ICSRC',summary:'Bundle de medidas preventivas para infecção de corrente sanguínea relacionada a cateter, conforme ANVISA 2017.',badge:'badge-blue',badgeText:'Protocolo'},
  {id:'l2',cat:'protocolo',icon:'🛡️',title:'Bundle de Prevenção de PAV',summary:'Conjunto de medidas para redução de pneumonia associada à ventilação mecânica em UTI.',badge:'badge-blue',badgeText:'Protocolo'},
  {id:'l3',cat:'boas-praticas',icon:'🖐️',title:'Higienização das Mãos — WHO',summary:'Cinco momentos para higiene das mãos na prática clínica. Técnica correta e duração adequada.',badge:'badge-green2',badgeText:'Boas Práticas'},
  {id:'l4',cat:'boas-praticas',icon:'💊',title:'Uso Racional de Antimicrobianos',summary:'Princípios de stewardship de antibióticos para redução da resistência bacteriana em ambiente hospitalar.',badge:'badge-green2',badgeText:'Boas Práticas'},
  {id:'l5',cat:'caso',icon:'📖',title:'Caso Clínico: Sepse por E. coli',summary:'Paciente de 72 anos com sepse de foco urinário. Abordagem diagnóstica, manejo e desfecho clínico.',badge:'badge-orange',badgeText:'Caso Clínico'},
  {id:'l6',cat:'caso',icon:'📖',title:'Caso Clínico: PAV por Acinetobacter',summary:'Paciente em VM há 10 dias evolui com novo infiltrado e piora respiratória. Diagnóstico diferencial e conduta.',badge:'badge-orange',badgeText:'Caso Clínico'},
  {id:'l7',cat:'artigo',icon:'🔬',title:'Sepsis-3: Nova Definição de Sepse',summary:'Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock. JAMA, 2016.',badge:'badge-purple',badgeText:'Artigo Científico'},
  {id:'l8',cat:'artigo',icon:'🔬',title:'Surviving Sepsis Campaign 2021',summary:'Evans L et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021.',badge:'badge-purple',badgeText:'Artigo Científico'},
  {id:'l9',cat:'referencia',icon:'📚',title:'ANVISA — Manual de IRAS',summary:'Critérios diagnósticos de Infecções Relacionadas à Assistência à Saúde. Brasília: ANVISA, 2017.',badge:'badge-red2',badgeText:'Referência'},
  {id:'l10',cat:'referencia',icon:'📚',title:"Harrison's Principles of Internal Medicine",summary:'Kasper DL et al. 21ª ed. New York: McGraw-Hill, 2022. Capítulos de Doenças Infecciosas.',badge:'badge-red2',badgeText:'Referência'},
];

const guideQuestions = [
  {id:'q1',q:'O paciente apresenta febre (≥38°C) ou hipotermia (<36°C)?',yes:'q2',no:'q5'},
  {id:'q2',q:'Existem sinais inflamatórios locais (eritema, calor, edema, dor)?',yes:'q3',no:'q4'},
  {id:'q3',q:'Os sinais locais estão em pele ou tecido subcutâneo?',yes:'r_pele',no:'q3b'},
  {id:'q3b',q:'O foco suspeito é pulmonar (tosse, dispneia, alteração na ausculta)?',yes:'r_resp',no:'r_outro'},
  {id:'q4',q:'Há alteração de parâmetros sistêmicos (PA, FC, FR, consciência)?',yes:'r_sepse_alert',no:'q5'},
  {id:'q5',q:'O paciente apresenta sintomas urinários (disúria, polaciúria, dor suprapúbica)?',yes:'r_itu',no:'r_baixo'},
];

const guideResults = {
  r_pele:{icon:'🩹',color:'#FCE4EC',title:'Possível Infecção de Pele/Partes Moles',sub:'Celulite, erisipela ou infecção de ferida',
    body:`<p style="font-size:13px;line-height:1.8;color:var(--text-light)">Investigar: inspeção da área, cultura de secreção (se presente), hemograma, PCR. Avaliar extensão e presença de crepitação.</p><div class="alert-box warning" style="margin-top:10px"><i class="fas fa-exclamation-triangle"></i><p>Crepitação ou necrose = emergência cirúrgica. Acionar equipe imediatamente.</p></div>`},
  r_resp:{icon:'🫁',color:'#E3F2FD',title:'Possível Infecção Respiratória',sub:'Pneumonia, bronquite aguda ou pleurite',
    body:`<p style="font-size:13px;line-height:1.8;color:var(--text-light)">Solicitar: radiografia de tórax, hemograma, PCR, oximetria, gasometria. Avaliar escore CURB-65 para estratificação de risco.</p><div class="alert-box info" style="margin-top:10px"><i class="fas fa-info-circle"></i><p>CURB-65 ≥2 indica internação. CURB-65 ≥3 considerar UTI.</p></div>`},
  r_itu:{icon:'🫘',color:'#E8F5E9',title:'Possível Infecção do Trato Urinário',sub:'Cistite, pielonefrite ou ITU complicada',
    body:`<p style="font-size:13px;line-height:1.8;color:var(--text-light)">Solicitar: EAS (urina tipo 1), urocultura com antibiograma. Febre alta e dor lombar sugerem pielonefrite — requer internação e ATB IV.</p>`},
  r_sepse_alert:{icon:'⚠️',color:'#FFEBEE',title:'ATENÇÃO: Possível Sepse',sub:'Avaliação urgente necessária',
    body:`<div class="alert-box danger"><i class="fas fa-exclamation-circle"></i><p><strong>EMERGÊNCIA:</strong> Aplicar qSOFA (FR≥22, alt. consciência, PAS≤100). Se ≥2 critérios — protocolo de sepse imediatamente.</p></div><p style="font-size:13px;line-height:1.8;color:var(--text-light);margin-top:10px">Bundle Hora 1: lactato, hemoculturas, antibiótico amplo espectro, 30ml/kg cristaloide, vasopressor se necessário.</p>`},
  r_baixo:{icon:'✅',color:'#E8F5E9',title:'Baixa Suspeita de Infecção Ativa',sub:'Continuar observação clínica',
    body:`<p style="font-size:13px;line-height:1.8;color:var(--text-light)">Com base nas respostas, o quadro não sugere fortemente infecção bacteriana ativa. Manter monitorização dos sinais vitais e reavaliação clínica. Considerar causas não-infecciosas.</p>`},
  r_outro:{icon:'🔍',color:'#F3E5F5',title:'Investigação Adicional Necessária',sub:'Foco não claramente definido',
    body:`<p style="font-size:13px;line-height:1.8;color:var(--text-light)">Solicitar: hemograma completo, PCR, procalcitonina, hemoculturas, urina tipo 1. Considerar avaliação com infectologista.</p>`},
};

const checklist = [
  {id:'c1',text:'Febre (≥38°C) ou hipotermia (<36°C)'},
  {id:'c2',text:'Taquicardia (FC > 100 bpm)'},
  {id:'c3',text:'Taquipneia (FR > 20 irpm)'},
  {id:'c4',text:'Leucocitose (>12.000) ou leucopenia (<4.000)'},
  {id:'c5',text:'Sinais inflamatórios locais (eritema, calor, edema)'},
  {id:'c6',text:'Tosse produtiva ou dispneia'},
  {id:'c7',text:'Disúria, polaciúria ou dor suprapúbica'},
  {id:'c8',text:'Hipotensão arterial (PAS < 90 mmHg)'},
  {id:'c9',text:'Alteração do nível de consciência'},
  {id:'c10',text:'Ferida, úlcera ou solução de continuidade na pele'},
];

let currentFilter = 'todos';
let currentLibFilter = 'todos';
let guideAnswers = {};
let secretCount = 0;

function switchTab(tab) {
  ['home','infections','guide','library'].forEach(t => {
    document.getElementById('page-'+t).classList.remove('active');
    const n = document.getElementById('nav-'+t);
    if(n) n.classList.remove('active');
  });
  document.getElementById('page-researcher').classList.remove('active');
  const page = document.getElementById('page-'+tab);
  if(page) page.classList.add('active');
  const nav = document.getElementById('nav-'+tab);
  if(nav) nav.classList.add('active');
  window.scrollTo(0,0);
}

function renderInfections(list) {
  document.getElementById('infectionsGrid').innerHTML = list.map(inf => `
    <div class="inf-card" onclick="openDetail('${inf.id}')" tabindex="0"
         onkeydown="if(event.key==='Enter')openDetail('${inf.id}')">
      <div class="inf-card-img" style="background:${inf.color}">${inf.icon}</div>
      <div class="inf-card-body">
        <h4>${inf.name}</h4>
        <p>${inf.summary.substring(0,55)}...</p>
        <span class="inf-badge ${inf.badge}">${inf.badgeText}</span>
      </div>
    </div>`).join('');
}

function setFilter(el, cat) {
  document.querySelectorAll('#page-infections .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  currentFilter = cat;
  applyInfFilter();
}

function applyInfFilter() {
  const q = (document.getElementById('infSearch').value || '').toLowerCase();
  let list = infections;
  if(currentFilter !== 'todos') list = list.filter(i => i.cat === currentFilter);
  if(q) list = list.filter(i => i.name.toLowerCase().includes(q) || i.summary.toLowerCase().includes(q));
  renderInfections(list);
}

function openDetail(id) {
  const inf = infections.find(i => i.id === id);
  if(!inf) return;
  const alertIcon = inf.alertType==='danger'?'exclamation-circle':inf.alertType==='warning'?'exclamation-triangle':'info-circle';
  document.getElementById('detailTitle').textContent = inf.name;
  document.getElementById('detailBadge').textContent = inf.badgeText;
  document.getElementById('detailContent').innerHTML = `
    <div class="detail-hero" onclick="openImgModal('${inf.icon}','${inf.name}')">${inf.icon}</div>
    <div class="info-section">
      <h3><i class="fas fa-book-open"></i> Definição</h3>
      <p>${inf.definition}</p>
    </div>
    <div class="info-section">
      <h3><i class="fas fa-dna"></i> Etiologia</h3>
      <p>${inf.etiology}</p>
    </div>
    <div class="info-section">
      <h3><i class="fas fa-thermometer-half"></i> Sinais e Sintomas</h3>
      <div class="symptom-list">${inf.symptoms.map(s=>`<span class="symptom-tag"><i class="fas fa-circle-dot"></i>${s}</span>`).join('')}</div>
    </div>
    <div class="info-section">
      <h3><i class="fas fa-microscope"></i> Métodos de Identificação</h3>
      <ul>${inf.identification.map(i=>`<li>${i}</li>`).join('')}</ul>
    </div>
    <div class="alert-box ${inf.alertType}">
      <i class="fas fa-${alertIcon}"></i>
      <p>${inf.alertText}</p>
    </div>
    <div class="info-section">
      <h3><i class="fas fa-lightbulb"></i> Observações Importantes</h3>
      <p>${inf.note}</p>
    </div>
    <div style="height:24px"></div>`;
  document.getElementById('detailPage').classList.add('open');
  document.getElementById('detailPage').scrollTop = 0;
}

function closeDetail() {
  document.getElementById('detailPage').classList.remove('open');
}

function switchGuideTab(el, tab) {
  document.querySelectorAll('.guide-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('guideFluxo').style.display = tab==='fluxo'?'block':'none';
  document.getElementById('guideCheck').style.display = tab==='check'?'block':'none';
}

function renderGuide() {
  const container = document.getElementById('guideSteps');
  document.getElementById('guideResult').classList.remove('visible');
  container.innerHTML = '';
  let stepId = 'q1';
  const steps = [];
  while(stepId) {
    const q = guideQuestions.find(q=>q.id===stepId);
    if(!q) break;
    steps.push(q);
    const ans = guideAnswers[stepId];
    if(!ans) break;
    stepId = q[ans];
    if(!stepId || stepId.startsWith('r_')) { if(stepId) showGuideResult(stepId); break; }
  }
  const done = steps.filter(s=>guideAnswers[s.id]).length;
  const pct = Math.round((done / guideQuestions.length) * 100);
  document.getElementById('guideProgressFill').style.width = Math.min(100,pct)+'%';
  container.innerHTML = steps.map((q,i) => {
    const ans = guideAnswers[q.id];
    return `<div class="guide-step">
      <div class="step-num">PASSO ${i+1}</div>
      <div class="step-question">${q.q}</div>
      <div class="step-options">
        <button class="step-btn ${ans==='yes'?'selected-yes':''}" onclick="answerGuide('${q.id}','yes')">
          <i class="fas fa-check"></i> Sim
        </button>
        <button class="step-btn ${ans==='no'?'selected-no':''}" onclick="answerGuide('${q.id}','no')">
          <i class="fas fa-times"></i> Não
        </button>
      </div>
    </div>`;
  }).join('');
}

function answerGuide(qid, ans) {
  guideAnswers[qid] = ans;
  let clear = false;
  guideQuestions.forEach(q => { if(clear) delete guideAnswers[q.id]; if(q.id===qid) clear=true; });
  renderGuide();
}

function showGuideResult(resultId) {
  const r = guideResults[resultId];
  if(!r) return;
  document.getElementById('resultIcon').textContent = r.icon;
  document.getElementById('resultIcon').style.background = r.color;
  document.getElementById('resultTitle').textContent = r.title;
  document.getElementById('resultSub').textContent = r.sub;
  document.getElementById('resultBody').innerHTML = r.body;
  const result = document.getElementById('guideResult');
  result.classList.add('visible');
  setTimeout(()=>result.scrollIntoView({behavior:'smooth',block:'nearest'}),100);
}

function resetGuide() {
  guideAnswers = {};
  document.getElementById('guideResult').classList.remove('visible');
  document.getElementById('guideProgressFill').style.width='0%';
  renderGuide();
}

function renderChecklist() {
  document.getElementById('checklistContainer').innerHTML = checklist.map(item => `
    <div class="checklist-item" id="check-${item.id}" onclick="toggleCheck('${item.id}')" tabindex="0"
         onkeydown="if(event.key===' '||event.key==='Enter'){event.preventDefault();toggleCheck('${item.id}')}">
      <div class="checklist-check" id="chk-${item.id}"></div>
      <p>${item.text}</p>
    </div>`).join('');
}

function toggleCheck(id) {
  const el = document.getElementById('check-'+id);
  const chk = document.getElementById('chk-'+id);
  const checked = el.classList.toggle('checked');
  chk.innerHTML = checked ? '<i class="fas fa-check"></i>' : '';
  const count = document.querySelectorAll('.checklist-item.checked').length;
  const result = document.getElementById('checkResult');
  if(count >= 3) {
    const sev = count>=7?'grave':count>=5?'moderada':'leve';
    const col = count>=7?'var(--danger)':count>=5?'var(--warning)':'var(--secondary)';
    const msg = count>=7?'Quadro clínico complexo. Avaliação médica urgente. Considerar sepse.':
                count>=5?'Investigação laboratorial e clínica indicada. Identifique o foco.':
                'Monitorar sinais vitais. Considerar exames complementares básicos.';
    document.getElementById('checkResultBody').innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <i class="fas fa-chart-pie" style="color:${col};font-size:22px"></i>
        <strong style="color:${col}">${count} sinais detectados — Suspeita ${sev}</strong>
      </div>
      <p style="font-size:13px;color:var(--text-light);line-height:1.7">${msg}</p>`;
    result.style.display='block';
  } else {
    result.style.display='none';
  }
}

function renderLibrary(list) {
  document.getElementById('libraryList').innerHTML = list.map(item => `
    <div class="lib-card" tabindex="0" onclick="openImgModal('${item.icon}','${item.title}')"
         onkeydown="if(event.key==='Enter')openImgModal('${item.icon}','${item.title}')">
      <div class="lib-card-icon">${item.icon}</div>
      <div class="lib-card-body">
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
        <span class="lib-badge ${item.badge}">${item.badgeText}</span>
      </div>
    </div>`).join('');
}

function setLibFilter(el, cat) {
  document.querySelectorAll('#page-library .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  currentLibFilter = cat;
  applyLibFilter();
}

function applyLibFilter() {
  const q = (document.getElementById('libSearch').value || '').toLowerCase();
  let list = libraryItems;
  if(currentLibFilter !== 'todos') list = list.filter(i => i.cat === currentLibFilter);
  if(q) list = list.filter(i => i.title.toLowerCase().includes(q) || i.summary.toLowerCase().includes(q));
  renderLibrary(list);
}

function secretTap() {
  secretCount++;
  if(secretCount >= 5) { secretCount = 0; openLock(); }
}

function openLock() {
  ['pin1','pin2','pin3','pin4'].forEach(id => document.getElementById(id).value='');
  document.getElementById('pinError').style.display='none';
  document.getElementById('lockOverlay').classList.add('visible');
  setTimeout(()=>document.getElementById('pin1').focus(),100);
}

function closeLock() { document.getElementById('lockOverlay').classList.remove('visible'); }

function pinNext(el, nextId) {
  if(el.value.length >= 1 && nextId) document.getElementById(nextId).focus();
  if(!nextId && el.value.length >= 1) setTimeout(checkPin, 100);
}

function checkPin() {
  const pin = ['pin1','pin2','pin3','pin4'].map(id=>document.getElementById(id).value).join('');
  if(pin === '2024') {
    closeLock();
    ['home','infections','guide','library'].forEach(t=>{
      document.getElementById('page-'+t).classList.remove('active');
      const n=document.getElementById('nav-'+t); if(n) n.classList.remove('active');
    });
    document.getElementById('page-researcher').classList.add('active');
    window.scrollTo(0,0);
  } else {
    document.getElementById('pinError').style.display='block';
    ['pin1','pin2','pin3','pin4'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('pin1').focus();
  }
}

function lockResearcher() {
  document.getElementById('page-researcher').classList.remove('active');
  switchTab('home');
}

function openImgModal(emoji, caption) {
  document.getElementById('imgModalBody').textContent = emoji;
  document.getElementById('imgModalCaption').textContent = caption;
  document.getElementById('imgModal').classList.add('open');
}

function closeImgModal() { document.getElementById('imgModal').classList.remove('open'); }

window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  btn.classList.toggle('visible', window.scrollY > 300);
});

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') {
    closeImgModal();
    closeDetail();
    closeLock();
  }
});

renderInfections(infections);
renderGuide();
renderLibrary(libraryItems);
renderChecklist();
