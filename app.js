const infections = [
  {id:'pav',cat:'respiratoria',name:'Pneumonia Associada à Ventilação Mecânica',sigla:'PAV',img:'img/1.jpeg',color:'#E3F2FD',badge:'badge-blue',badgeText:'IRAS • PAV',
   question:'Estou diante de uma Pneumonia Associada à Ventilação Mecânica – PAV?',
   summary:'Pneumonia em paciente em uso de ventilação mecânica por mais de dois dias consecutivos.',
   criteriaTitle:'O paciente se enquadra nos critérios definidores de PAV?',
   criteria:`
     <h5>Critérios iniciais para a identificação<sup>(1)</sup>:</h5>
     <p>Trata-se de um paciente <strong>com pneumonia</strong>, que seja adulto ou criança acima de 1 ano (que não seja imunodeprimido, e que não tenha doença cardíaca ou pulmonar de base) em <strong>uso de Ventilação Mecânica (VM)</strong> por um período maior que dois dias consecutivos e que, mediante a infecção, o paciente estava em VM ou a VM havia sido removida no dia anterior.</p>
     <h5>O que é o Ventilador mecânico (VM):</h5>
     <p>Dispositivo utilizado para auxiliar ou controlar a respiração de forma contínua, por uma pressão positiva que destina oxigênio para as vias aéreas, de forma:</p>
     <ul>
       <li><strong>Invasiva</strong>: através de traqueostomia (abertura cirúrgica direto na traqueia com uso de uma cânula ligada à um ventilador) ou por intubação endotraqueal (uso de um tubo respiratório da boca à traqueia)<sup>(1)</sup>;</li>
       <li><strong>Não invasiva</strong>: através do CPAP, que oferece uma única pressão positiva durante todo o ciclo respiratório; ou BIPAP, no qual o aparelho trabalha com duas pressões diferentes, a inspiratória e a expiratória. Ambos com uso via máscara nasal ou máscara facial<sup>(1)</sup>.</li>
     </ul>`,
   signsTitle:'Há sinais clínicos, laboratoriais e radiológicos, que sugerem PAV?',
   signs:`
     <h5>Evidências radiológicas / laboratoriais / clínicas<sup>(1)</sup>:</h5>
     <p><u>1 ou mais exames de imagem (seriados) com</u>:</p>
     <ul>
       <li><strong>Presença de infiltrado</strong> (acúmulo anormal de líquidos e/ou substâncias no tecido pulmonar) OU <strong>opacificação/consolidação</strong> (área densa) OU <strong>Cavitação/pneumatocele</strong> (cavidade ou espaços císticos intrapulmonares);</li>
     </ul>
     <div class="plus">+</div>
     <p><u>Pelo menos 1 dos sinais e sintomas</u>:</p>
     <ul>
       <li><strong>Febre</strong> (temperatura: &gt;38ºC); OU <strong>leucopenia</strong> (leucócitos &lt; 4.000 células/mm³) OU <strong>leucocitose</strong> (leucócitos &gt; 12.000 células/mm³) em adultos, e alteração do nível de consciência (sem outra causa aparente) em pacientes ≥70 anos;</li>
     </ul>
     <div class="plus">+</div>
     <p><u>Pelo menos DOIS dos sinais e sintomas</u>:</p>
     <ul>
       <li>O <strong>surgimento de secreção purulenta</strong> OU <strong>mudança nas características da secreção</strong> (cor, consistência, odor e quantidade) OU <strong>aumento da secreção</strong> respiratória OU <strong>aumento da necessidade de aspiração</strong>;</li>
       <li><strong>Apneia</strong> OU <strong>taquipneia</strong> OU <strong>dispneia</strong> OU <strong>tosse</strong> (episódio novo ou com agravamento);</li>
       <li><strong>Ausculta com sibilos, roncos ou estertores</strong> (episódio novo ou com agravamento);</li>
       <li><strong>Piora da troca gasosa, queda da saturação, aumento da demanda de oxigênio ou aumento dos parâmetros ventilatórios, por pelo menos 2 dias.</strong></li>
     </ul>
     <p class="obs"><strong>Observação</strong>: os indícios radiológicos / laboratoriais / clínicos, ocorreram no período de janela de infecção (intervalo temporal de 7 dias durante os quais são identificadas as evidências acima)<sup>(1,2,3)</sup>.</p>`,
   aspects:[
     {title:'Sobre PAV',type:'info',html:`
       <p>Corresponde a IRA de maior mortalidade, segundo dados atuais! Logo, sua identificação precoce é indispensável, e deve incluir a <strong>análise de uma combinação de fatores</strong>:</p>
       <ul><li><strong>Avaliação clínica de sinais e sintomas</strong> infecciosos por meio do exame físico, radiografia ou tomografia torácica; + <strong>Dados laboratoriais</strong> incluindo leucócitos, e biomarcadores inflamatórios como Procalcitonina (PCT) &gt; 1,86 ng/mL e Proteína C Reativa (PCR) &gt; 88 mg/L (ref019), testes microbiológicos de secreções respiratórias, com culturas de escarro<sup>(4,5,6,7,8,9,10,11)</sup>.</li></ul>`},
     {title:'Atenção',type:'warning',html:`
       <ul>
         <li>O <strong>declínio da oxigenação</strong> (hipoxemia) é um parâmetro clínico de fácil detecção, e que sinaliza um alerta ao profissional de saúde<sup>(7,10,11)</sup>.</li>
         <li>A <strong>tomografia computadorizada (TC)</strong> é particularmente mais sensível para demonstrar doenças parenquimatosas ou pleurais nas bases pulmonares póstero-inferiores, embora este exame possa ser impraticável para muitos pacientes de UTI<sup>(6,8)</sup>.</li>
         <li>Há muitas maneiras de detectar uma <strong>aparência radiográfica de pneumonia</strong>. Os laudos radiológicos irão incluir: “doença do espaço aéreo”, “opacidade focal” e “áreas de aumento da densidade”. Em situações clínicas sugestivas à pneumonia, estas descrições devem ser fortemente consideradas como achados positivos<sup>(3,9)</sup>.</li>
         <li>Outras condições não infecciosas (como edema pulmonar e insuficiência cardíaca congestiva) podem simular a presença de pneumonia. Nestes casos mais difíceis, <strong>radiografias torácicas seriadas</strong> precisam ser analisadas minuciosamente!<sup>(3)</sup>.</li>
       </ul>`},
     {title:'Cuidado',type:'danger',html:`
       <ul>
         <li>Apesar de não se encaixar nas descrições oficiais de estertores, sibilos ou roncos, os <strong>sons de gorgolejo</strong> (ruído produzido pelos movimentos oscilatórios de secreções nas vias aéreas superiores, associados à respiração inspiratória e expiratória) ouvidos durante a respiração tranquila ou por intermédio da fala, ou auscultados sobre a laringe, estão fortemente associados à PAV<sup>(12)</sup>.</li>
         <li>O exame físico e a radiografia de tórax são insuficientes para a confirmação diagnóstica de PAV, mas fornecem dados cruciais para a identificação inicial da PAV. A partir destes, recomenda-se avançar para o diagnóstico com procedimentos que permitam a <strong>identificação do patógeno responsável</strong> pela infecção, por meio de cultura de secreções do trato respiratório inferior<sup>(13)</sup>.</li>
         <li>É valido destacar que o crescimento de mais um microrganismo ou mudança no patógeno em cultura, isoladamente, não é indicativo de novo episódio de pneumonia. Também, uma única anotação sobre a mudança nas características da secreção ou sobre a presença de secreção purulenta não é significativa; pois <strong>repetidas anotações durante um período de 24 horas</strong> seriam mais prudentes como um indicativo do início de um processo infeccioso<sup>(3,8)</sup>.</li>
       </ul>`},
     {title:'Lembre-se',type:'success',html:`
       <p>Para quesitos de identificação da <strong>Taquipneia</strong>, considera-se<sup>(3)</sup>:</p>
       <ul>
         <li>Adultos: frequência respiratória &gt; 22 incursões respiratórias por minuto;</li>
         <li>Crianças com mais de 1 ano de idade: frequência respiratória &gt; 30 incursões respiratórias por minuto;</li>
         <li>Lactente com menos de 2 meses de idade: frequência respiratória &gt; 60 incursões respiratórias por minuto;</li>
         <li>Lactente de 2-12 meses de idade: frequência respiratória &gt; 50 incursões respiratórias por minuto<sup>(3)</sup>.</li>
       </ul>`},
   ]},

  {id:'itu-ac',cat:'urinaria',name:'Infecção de Trato Urinário Associada à Cateter Vesical de Demora',sigla:'ITU-AC',img:'img/2.jpeg',color:'#E8F5E9',badge:'badge-green2',badgeText:'IRAS • ITU-AC',
   question:'Estou diante de uma Infecção de Trato Urinário Associada à Cateter Vesical de Demora – ITU-AC?',
   summary:'Infecção urinária em paciente com cateter vesical de demora por mais de dois dias consecutivos.',
   criteriaTitle:'O paciente se enquadra nos critérios definidores de ITU / ITU-RAS / ITU-AC?',
   criteria:`
     <h5>Critérios iniciais para a identificação<sup>(1)</sup>:</h5>
     <ul>
       <li>A <strong>Infecção do Trato Urinário – ITU</strong> é detectada pela presença de um ou mais microrganismos identificados por meio de cultura de urina, em pacientes com sinais ou sintomas (não havendo sinais e sintomas, trata-se de ITU assintomática)<sup>(1)</sup>.</li>
       <li><strong>Infecções do trato urinário relacionada à assistência à saúde (ITU-RAS)</strong>: definida como qualquer infecção do trato urinário relacionada a procedimento urológico, podendo ser associada ou não ao uso de cateter vesical de demora<sup>(3)</sup>.</li>
       <li><strong>ITU Associada à Cateter vesical de demora (ITU-AC):</strong> infecção do trato urinário em paciente com cateter vesical de demora instalado por um período maior que dois dias consecutivos e, na data da infecção, o paciente estava com o cateter instalado ou este havia sido removido no dia anterior<sup>(1,3)</sup>.</li>
     </ul>
     <h5>O que é Cateter Vesical de Demora (CVD):</h5>
     <p>É um tubo de drenagem inserido na bexiga através da uretra e que permanece instalado na região, o que o difere do cateterismo vesical de alívio. Inclusive, este CVD é conectado a uma bolsa coletora que armazena o volume de urina secretada<sup>(1)</sup>.</p>`,
   signsTitle:'Há sinais clínicos e laboratoriais que sugerem ITU-AC?',
   signs:`
     <h5>Evidências clínicas / laboratoriais<sup>(1)</sup>:</h5>
     <p>ITU – AC em adultos e crianças &gt; 3 anos, que apresentam pelo menos UM dos seguintes <u>sinais e sintomas</u>, sem outras causas reconhecidas:</p>
     <ul>
       <li><strong>Febre (Tª &gt;38ºC)</strong>;</li>
       <li><strong>Dor ou desconforto supra púbico</strong>;</li>
       <li><strong>Dor ou desconforto lombar;</strong></li>
       <li><strong>Hematúria</strong> (presença de sangue na urina);</li>
       <li><strong>Urgência miccional</strong> (retirou a sonda no dia anterior à data da infecção);</li>
       <li><strong>Aumento da frequência miccional</strong> (retirou a sonda no dia anterior à data da infecção);</li>
       <li><strong>Disúria</strong> (retirou a sonda no dia anterior à data da infecção)</li>
     </ul>
     <div class="plus">+</div>
     <p><u>Cultura de urina positiva</u> com, no máximo, duas espécies bacterianas, com <strong>contagem de colônias ≥ 10<sup>5</sup> UFC/mL</strong> (100.000 UFC/mL) de pelo menos UMA espécie.</p>
     <div class="plus">+</div>
     <p class="obs">Os <strong>sinais/sintomas</strong> e a primeira <strong>urocultura positiva</strong> ocorreram no <strong>período de Janela de Infecção</strong> (intervalo temporal de 7 dias durante os quais são identificados as evidências acima)<sup>(1)</sup>.</p>`,
   aspects:[
     {title:'Sobre ITU-AC',type:'info',html:`
       <p>É a Infecção Relacionada à Assistência em Saúde (IRAS) <strong>mais prevalente</strong>, e o principal fator de risco para sua ocorrência é a <strong>presença de um cateter vesical</strong>, onde o risco aumenta conforme a duração do uso deste dispositivo, que conecta meio externo e interno do corpo, dando passagem a microrganismos<sup>(2,4)</sup>.</p>`},
     {title:'Atenção',type:'warning',html:`
       <p>Os <strong>sintomas clínicos</strong> gerais de uma ITU incluem<sup>(2,15)</sup>:</p>
       <ul>
         <li>Polaciúria (micção frequente)</li>
         <li>Urgência miccional (vontade súbita e forte de urinar)</li>
         <li>Disúria (sensação de ardor ao urinar)</li>
         <li>Dor pélvica ou sensibilidade suprapúbica.</li>
       </ul>`},
     {title:'Cuidado',type:'danger',html:`
       <p>Cerca de metade dos casos de <strong>febre</strong> no paciente hospitalizado ocorrem devido à IRAS, incluindo as tão frequentes infecções urinárias!<sup>(4)</sup></p>`},
     {title:'Lembre-se',type:'success',html:`
       <p>Se não tratada, a ITU pode levar a <strong>complicações graves</strong>, como sepse ou falência de órgãos<sup>(2)</sup>.</p>`},
   ]},

  {id:'isc',cat:'cirurgica',name:'Infecção de Sítio Cirúrgico',sigla:'ISC',img:'img/4.jpeg',color:'#FCE4EC',badge:'badge-red2',badgeText:'IRAS • ISC',
   question:'Estou diante de uma Infecção de Sítio Cirúrgico – ISC?',
   summary:'Processo infeccioso relacionado a procedimento cirúrgico, em pacientes internados ou ambulatoriais.',
   criteriaTitle:'O paciente se enquadra nos critérios definidores de ISC?',
   criteria:`
     <h5>Critérios iniciais para a identificação<sup>(1)</sup>:</h5>
     <p>As <strong>infecções de Sítio Cirúrgico (ISC)</strong> correspondem a processos infecciosos relacionados a <strong>procedimentos cirúrgicos</strong> em pacientes internados ou ambulatoriais, sendo classificadas quanto à local e profundidade, conforme os critérios de sítios específicos<sup>(1,2)</sup>:</p>
     <ul>
       <li><u>ISC Incisional Superficial (IS)</u> - infecção da região de pele e tecido subcutâneo à incisão;</li>
       <li>ISC Incisional Profunda (IP) - Infecção que ocorre na região de fáscia ou dos músculos referentes ao local da incisão.</li>
       <li><u>ISC Órgão/ Cavidade (OC)</u> - envolve um órgão, materiais implantados e/ou espaço anatômico mais profundo que as estruturas de fáscia e músculo<sup>(1,2)</sup>.</li>
     </ul>
     <p>A ISC ocorre quando bactérias penetram a região corporal por meio de incisões cirúrgicas OU quando são introduzidas na fase pós-operatória, por curativos ou outros meios. É importante destacar que este tipo de infecção pode ocorrer em até 30 ou 90 dias após o procedimento cirúrgico, a depender do tipo de procedimento, sendo o 1º dia a data de realização da cirurgia<sup>(1,2)</sup>.</p>
     <h5>O que é um procedimento cirúrgico?</h5>
     <p>Uma <strong>intervenção operatória em que há pelo menos uma incisão</strong> (incluindo abordagem laparoscópica e orifícios de broca craniana), realizada em um centro cirúrgico (sala de cirurgia, sala de cesariana, ou sala de radiologia intervencionista), feita através da pele, membrana mucosa ou através de uma incisão que foi deixada aberta durante um procedimento cirúrgico anterior<sup>(1)</sup>.</p>`,
   signsTitle:'Há sinais clínicos e laboratoriais que sugerem ISC?',
   signs:`
     <h5>Evidências clínicas / laboratoriais<sup>(1)</sup>:</h5>
     <p><u>Mediante Incisão Superficial</u>:</p>
     <p>Apresenta pelo menos UM dos seguintes critérios:</p>
     <ul>
       <li><strong>Drenagem purulenta</strong> da incisão superficial;</li>
       <li><strong>Microrganismo identificado</strong> em secreção ou em tecido da incisão superficial, obtido de forma asséptica (não serão considerados coletas de swabs) por cultura ou por outro método microbiológico;</li>
       <li>A incisão superficial é <strong>deliberadamente aberta</strong> pelo cirurgião ou outro médico na vigência de, pelo menos, <strong>UM dos sinais ou sintomas</strong>: dor, aumento da sensibilidade, edema local, hiperemia ou calor;</li>
       <li><strong>Diagnóstico de ISC-IS</strong> pelo cirurgião ou outro médico.</li>
     </ul>
     <p><u>Mediante Incisão Profunda</u>:</p>
     <p>Apresenta pelo menos UM dos seguintes critérios:</p>
     <ul>
       <li><strong>Drenagem purulenta</strong> da incisão profunda (desde que não originada de órgão ou cavidade);</li>
       <li><strong>Incisão profunda aberta ou aspirada</strong> pelo cirurgião ou outro médico, associada a:
         <ul>
           <li><strong>Microrganismo identificado</strong> em tecidos moles profundos da incisão por cultura ou outro método microbiológico OU ausência de exame para essa identificação (a cultura realizada com resultado negativo não se aplica)</li>
         </ul>
         <div class="plus">+</div>
         <ul>
           <li>Pelo menos <strong>UM dos sinais e sintomas</strong>: febre (temperatura &gt;38ºC), dor, ou aumento da sensibilidade localizada.</li>
         </ul>
       </li>
       <li><strong>Abscesso ou outra evidência de infecção envolvendo tecidos profundos</strong>, detectado durante exame clínico, anatomopatológico ou de imagem;</li>
       <li><strong>Diagnostico de ISC-IP</strong> feito pelo cirurgião ou médico assistente.</li>
     </ul>
     <p><u>Mediante Orgão/Cavidade</u>:</p>
     <ul>
       <li><strong>Drenagem purulenta de um dreno colocado no órgão/espaço</strong> (por exemplo, sistema de drenagem de sucção fechado, dreno aberto, dreno de tubo em T, drenagem guiada por TC);</li>
       <li><strong>Microrganismo identificado</strong> em secreção ou tecido do órgão/cavidade, obtido assepticamente*1 por cultura ou outro método microbiológico;</li>
       <li><strong>Presença de abscesso ou outra evidência que a infecção envolve os planos profundos</strong> da ferida (órgão/cavidade) identificada ao exame anatômico, histopatológico ou de imagem conclusivo ou sugestivo de infecção;</li>
       <li><strong>Diagnóstico de ISC-OC</strong> pelo cirurgião preferencialmente, ou outro médico<sup>(1)</sup>.</li>
     </ul>`,
   aspects:[
     {title:'Sobre ISC',type:'info',html:`
       <ul>
         <li>As ISC são passíveis de ocorrer em pacientes submetidos a cirurgias tanto em <strong>internações</strong>, quanto em <strong>regime ambulatorial</strong>, com breve permanência no serviço de saúde<sup>(2)</sup>;</li>
         <li>Se houver mais de uma incisão, deve-se considerar a ocorrência de ISC em todas as incisões acometidas, devendo estas ser registradas e avaliadas<sup>(1)</sup>;</li>
       </ul>`},
     {title:'Atenção',type:'warning',html:`
       <p>Uma intervenção cirúrgica pressupõe uma agressão ao paciente, que pode desenvolver uma síndrome de <strong>resposta inflamatória</strong> sistêmica e, consequentemente, febre. Isto é <strong>consequência do traumatismo cirúrgico</strong>, e costuma aparecer mais nas primeiras 24-48 horas após a intervenção, mas não representa um processo infeccioso de fato, bem como não demanda tratamento. Além disso, nas primeiras horas após a cirurgia pode haver hipertermia decorrente dos medicamentos anestésicos, sem correlação com microrganismos<sup>(4)</sup>.</p>`},
     {title:'Cuidado',type:'danger',html:`
       <p>De modo geral, ISCs tendem a produzir <strong>vermelhidão, edema, dor, sensibilidade local e drenagem de pus ou líquido no local da incisão</strong>. No entanto, a presença de uma inflamação mínima e drenagem de secreção limitada aos pontos de sutura, não podem ser considerados com ISC incisional, haja vista que se trata de uma resposta esperada do organismo mediante um processo cirúrgico<sup>(1,2,15)</sup>.</p>`},
     {title:'Lembre-se',type:'success',html:`
       <p>Para detecção de ISC, é fundamental que haja <strong>monitoramento e vigilância</strong> dos quadros clínicos, considerando o procedimento realizado:</p>
       <ul><li><strong>90 dias</strong> para implante de prótese mamária, artroplastia primária de quadril e joelho, revascularização do miocárdio, derivação interna neurológica, cirurgia de catarata. E, <strong>30 dias</strong> para cirurgia cesariana<sup>(1)</sup>.</li></ul>`},
   ]},

  {id:'ipcs',cat:'sanguinea',name:'Infecção Primária de Corrente Sanguínea',sigla:'IPCS',img:'img/3.jpeg',color:'#F3E5F5',badge:'badge-purple',badgeText:'IRAS • IPCS',
   question:'Estou diante de uma Infecção Primária de Corrente Sanguínea – IPCS?',
   summary:'Microrganismo na corrente sanguínea sem relação com outro foco primário de infecção.',
   criteriaTitle:'O paciente se enquadra nos critérios definidores de IPCS?',
   criteria:`
     <h5>Critérios iniciais para a identificação<sup>(1)</sup>:</h5>
     <p>A <strong>presença de um ou mais microrganismos (bactérias, vírus, fungos ou protozoários) na corrente sanguínea</strong>, cuja origem não está relacionada a nenhum outro foco primário de infecção (foco primário de outra IRAS). Nesta situação, o foco primário é a própria corrente sanguínea (ponto de partida/surgimento) e, por isso, a infecção é denominada de Infecção Primária de Corrente Sanguínea (IPCS)<sup>(1)</sup>.</p>
     <h5>O que é um Cateter Venoso Central (CVC):</h5>
     <p><strong>Dispositivo intravascular</strong> utilizado para infusão, coleta de amostra sanguínea ou monitoramento hemodinâmico, cuja terminação esteja posicionada próxima ao coração ou em um grande vaso (são considerados grandes vasos: aorta, artéria pulmonar, veias cavas, veias braquicefálicas, veias jugulares internas, veias subclávias, veias ilíacas externa e comum, veias femorais)<sup>(1)</sup>;</p>
     <h5>Infecção Primária de Corrente Sanguínea Laboratorialmente Confirmada Associada a Cateter Central (IPCSL-CVC)</h5>
     <p>Paciente em uso de cateter central por um período maior que 2 dias consecutivos (a partir do D3, sendo o dia da inserção considerado como D1, independentemente do horário de inserção) e que, na data da infecção, o paciente estava em uso do dispositivo ou este havia sido removido no dia anterior. Ademais, a infecção foi confirmada laboratorialmente, através da <strong>identificação de microrganismo bacteriano ou fúngico patogênico</strong> em uma ou mais hemoculturas<sup>(1)</sup>.</p>`,
   signsTitle:'Há sinais clínicos e laboratoriais que sugerem IPCS?',
   signs:`
     <h5>Evidências laboratoriais / clínicas<sup>(1)</sup>:</h5>
     <p><u>IPCS:</u></p>
     <p>Paciente adulto (ou criança com mais de 28 dias), que <strong>apresenta microrganismo patogênico</strong> bacteriano ou fúngico, não incluído na lista de microrganismos comensais (confira definição da ANVISA), isolado em amostra sanguínea,</p>
     <div class="plus">+</div>
     <ul>
       <li>Identificado a partir de uma ou mais amostras de sangue obtidas em hemocultura;<br><strong>OU</strong><br>Identificado gênero e espécie (ou pelo menos o gênero), por métodos validados de teste microbiológico (testes moleculares, automatizados, realizados a partir de amostras de sangue) não baseado em cultura;</li>
     </ul>
     <div class="plus">+</div>
     <ul><li>O <strong>microrganismo identificado não está relacionado a outro foco infeccioso</strong>;</li></ul>
     <p><u>IPCSL:</u></p>
     <p>Causada por microrganismo contaminante de pele em adultos e crianças (acima de 1 ano), que <strong>apresente pelo menos UM dos seguintes sinais ou sintomas</strong>:</p>
     <ul>
       <li>Febre (&gt;38°C)</li>
       <li>Calafrios</li>
       <li>Hipotensão (pressão sistólica ≤ 90 mmHg em adultos);</li>
     </ul>
     <div class="plus">+</div>
     <ul><li><strong>Apresenta microrganismos contaminantes de pele</strong> (comensais 1a,1b), por exemplo: <em>Corynebacterium</em> spp. (exclui <em>C. diphtheriae</em>), <em>Bacillus spp.</em> (exclui <em>B. anthracis</em>), <em>Propionibacterium spp.</em>, <em>Staphylococcus</em> coagulase negativo, <em>Streptococcus</em> do grupo viridans, <em>Aerococcus spp.</em> e <em>Micrococcus spp</em>, <strong>identificados em DUAS ou MAIS hemoculturas</strong>, coletadas em momentos distintos, no mesmo dia ou no máximo no dia seguinte;</li></ul>
     <div class="plus">+</div>
     <ul><li>O microrganismo identificado não está relacionado a outro foco infeccioso.</li></ul>
     <div class="plus">+</div>
     <p class="obs">Os sinais/sintomas e o resultado da hemocultura ocorreram no <strong>período de janela da Infecção</strong><sup>(1)</sup>.</p>`,
   aspects:[
     {title:'Sobre IPCS',type:'info',html:`
       <p>As infecções da corrente sanguínea, clinicamente, podem gerar <strong>febre (&gt;38ºC) como um dos sinais principais</strong>, episódios de calafrios e hipotensão. Estes indícios antecedem agravamentos severos, como disfunção orgânica e choque séptico<sup>(2,4,6,14,15)</sup>.</p>`},
     {title:'Atenção',type:'warning',html:`
       <ul>
         <li>A inserção e o manuseio frequentes e inseguros de <strong>dispositivos intravasculares</strong> assim como o uso de equipamentos contaminados, aumentam consideravelmente o risco para ocorrência de infecção!<sup>(2)</sup></li>
         <li>Pacientes com início abrupto de sinais e sintomas de sepse sem fatores de risco, especialmente sem qualquer foco local de infecção, levantam suspeitas importantes de infecção associada à um dispositivo intravascular, e este pode já estar apresentando falhas na funcionalidade e até <strong>sinais flogísticos</strong> produzidos<sup>(6)</sup>.</li>
       </ul>`},
     {title:'Cuidado',type:'danger',html:`
       <p>A gravidade clínica na admissão hospitalar, e a imunossupressão do paciente, elevam os <strong>riscos para IPCS</strong>, por isso a importância da cautela rigorosa na avaliação inicial e contínua do paciente<sup>(2)</sup>.</p>`},
     {title:'Lembre-se',type:'success',html:`
       <p>Os profissionais de saúde devem priorizar um <strong>exame físico direcionado</strong>, mesmo em ambientes com grande fluxo de pacientes. É crucial inspecionar e avaliar ativamente os locais de inserção do cateter para prevenir complicações adicionais<sup>(6,14)</sup>.</p>`},
   ]},
];

const libraryItems = [
  {id:'l1',cat:'protocolo',icon:'📋',title:'Protocolo de Prevenção de ICSRC',summary:'Bundle de medidas preventivas para infecção de corrente sanguínea relacionada a cateter, conforme ANVISA 2017.',badge:'badge-blue',badgeText:'Protocolo'},
  {id:'l2',cat:'protocolo',icon:'🛡️',title:'Bundle de Prevenção de PAV',summary:'Conjunto de medidas para redução de pneumonia associada à ventilação mecânica em UTI.',badge:'badge-blue',badgeText:'Protocolo'},
  {id:'l11',cat:'protocolo',img:'img/sepse.jpeg',pdf:'img/sepse.pdf',pdfName:'Protocolo-Atual-Sepse.pdf',title:'Protocolo Atual — Sepse',summary:'Protocolo HC-UFTM: manejo clínico gerenciado da sepse e do choque séptico no paciente adulto.',badge:'badge-blue',badgeText:'Protocolo'},
  {id:'l3',cat:'boas-praticas',img:'img/Mãos.jpeg',pdf:'img/1.pdf',pdfName:'Higienizacao-das-Maos-WHO.pdf',title:'Higienização das Mãos — WHO',summary:'Cinco momentos para higiene das mãos na prática clínica. Técnica correta e duração adequada.',badge:'badge-green2',badgeText:'Boas Práticas'},
  {id:'l10',cat:'boas-praticas',img:'img/luvas.jpeg',pdf:'img/UsodeLuvasFolhetoInformativo.pdf',pdfName:'Uso-Adequado-de-Luvas.pdf',title:'Uso Adequado de Luvas',summary:'Folheto informativo sobre quando e como utilizar luvas na assistência. O uso de luvas não substitui a higienização das mãos.',badge:'badge-green2',badgeText:'Boas Práticas'},
  {id:'l4',cat:'boas-praticas',icon:'💊',title:'Uso Racional de Antimicrobianos',summary:'Princípios de stewardship de antibióticos para redução da resistência bacteriana em ambiente hospitalar.',badge:'badge-green2',badgeText:'Boas Práticas'},
  {id:'l5',cat:'caso',img:'img/casoclinico.jpeg',pdf:'img/CasoS clínicoSS.pdf',pdfPage:1,pdfName:'Casos-Clinicos.pdf',title:'Caso Clínico: Sepse secundária à PAV',summary:'Pessoa idosa de 77 anos em ventilação mecânica evolui com PAV por Pseudomonas aeruginosa e choque séptico. Diagnóstico, condutas e desfecho clínico.',badge:'badge-orange',badgeText:'Caso Clínico'},
  {id:'l6',cat:'caso',img:'img/casoclinico.jpeg',pdf:'img/CasoS clínicoSS.pdf',pdfPage:5,pdfName:'Casos-Clinicos.pdf',title:'Caso Clínico: ITU-AC em paciente com AVC',summary:'Paciente de 68 anos internado em UTI após AVC isquêmico desenvolve ITU-AC por Escherichia coli. Diagnóstico, abordagem assistencial e prevenção.',badge:'badge-orange',badgeText:'Caso Clínico'},
  {id:'l7',cat:'artigo',icon:'🔬',title:'Sepsis-3: Nova Definição de Sepse',summary:'Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock. JAMA, 2016.',badge:'badge-purple',badgeText:'Artigo Científico'},
  {id:'l8',cat:'artigo',icon:'🔬',title:'Surviving Sepsis Campaign 2021',summary:'Evans L et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021.',badge:'badge-purple',badgeText:'Artigo Científico'},
  {id:'l9',cat:'referencia',icon:'📚',title:'Referências Bibliográficas',summary:'15 referências científicas citadas no conteúdo, além de outros referenciais basilares: Anvisa, Organização Mundial da Saúde, e artigos internacionais.',badge:'badge-red2',badgeText:'Referência'},
];

const refLink = url => { const u = url.replace(/&/g, '&amp;'); return `<a href="${u}" target="_blank" rel="noopener">${u}</a>`; };

const NT_03_2026 = 'https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/notas-tecnicas/notas-tecnicas-vigentes/nota-tecnica-03-2026-criterios-de-iras-02-01-2026.pdf';
const CADERNO_2 = 'https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/publicacoes/caderno-2-criterios-diagnosticos-de-infeccao-relacionada-a-assistencia-a-saude.pdf/view';

const referenceGroups = [
  {title:'Tipos de Infecções: PAV / ITU-AC / ISC / IPCS', numbered:true, items:[
    `BRASIL. Agência Nacional de Vigilância Sanitária - ANVISA. <strong>Nota técnica GVIMS/GGTES nº 03/2026: critérios diagnósticos das infecções relacionadas à assistência à saúde (IRAS)</strong>. Brasília, DF: ANVISA, 2026. Versão republicada em 14 de julho de 2026. Disponível em: ${refLink(NT_03_2026)}. Acesso em: 21 out. 2026.`,
    `WORLD HEALTH ORGANIZATION (WHO). <strong>Surveillance of health care-associated infections at national and facility levels: practical handbook</strong>. Geneva: World Health Organization, 2024. Disponível em: ${refLink('https://www.who.int/publications/i/item/9789240101456')}. Acesso em: 21 out. 2026.`,
    `BRASIL. Agência Nacional de Vigilância Sanitária - ANVISA. <strong>Critérios diagnósticos de infecção relacionada à assistência à saúde</strong>. Série Segurança do Paciente e Qualidade em Serviços de Saúde, Caderno 2. Brasília, DF: ANVISA, 2017. Disponível em: ${refLink(CADERNO_2)}. Acesso em: 21 out. 2026.`,
    `ALLENDE, J. M. B. Síndrome febril en el paciente hospitalizado. <strong>Medicine: Programa de Formación Médica Continuada Acreditado</strong>, v. 12, n. 92, p. 5405-5413, dez. 2019. DOI: ${refLink('https://doi.org/10.1016/j.med.2019.12.003')}. Acesso em: 11 out. 2026.`,
    `GIANG, C.; CALVERT, J.; RAHMANI, K.; BARNES, G.; SIEFKAS, A.; GREEN-SAXENA, A.; <em>et al</em>. Predicting ventilator-associated pneumonia with machine learning. <strong>Medicine</strong> (Baltimore), v. 100, n. 23, e26246, 11 jun. 2021. Doi: ${refLink('https://doi.org/10.1097/MD.0000000000026246')}. Disponível em: ${refLink('https://pmc.ncbi.nlm.nih.gov/articles/PMC8202554/')}. Acesso em: 21 out. 2026.`,
    `O’GRADY, N. P.; BARIE, P. S.; BARTLETT, J. G.; BLECK, T.; CARROLL, K.; CALIL, A. C.; <em>et al</em>. Guidelines for evaluation of new fever in critically ill adult patients: 2008 update from the American College of Critical Care Medicine and the Infectious Diseases Society of America. <strong>Critical Care Medicine</strong>, v. 36, n. 4, p. 1330–1349, 2008. Doi: ${refLink('https://doi.org/10.1097/CCM.0b013e318169eda9')}. Disponível em: ${refLink('https://www.ovid.com/jnls/ccmjournal/fulltext/10.1097/ccm.0b013e318169eda9~guidelines-for-evaluation-of-new-fever-in-critically-ill')}. Acesso em: 21 out. 2026.`,
    `RUSSELL, C. D.; KOCH, O.; LAURENSON, I. F.; O’SHEA, D. T.; SUTHERLAND, R.; MACKINTOSH, C. L. Diagnosis and features of hospital-acquired pneumonia: a retrospective cohort study. <strong>Journal of Hospital Infection</strong>, v. 92, n. 3, p. 273-279, 2016. Doi: 10.1016/j.jhin.2015.11.013. Disponível em: ${refLink('https://www.journalofhospitalinfection.com/article/S0195-6701(15)00493-4/fulltext')}. Acesso em: 14 out. 2026.`,
    `CRAVEN, D. E.; HJALMARSON, K. I. Ventilator-associated tracheobronchitis and pneumonia: thinking outside the box. <strong>Clinical Infectious Diseases</strong>, v. 51, supl. 1, p. S59-S66, 2010. Doi: 10.1086/653051. Disponível em: ${refLink('https://academic.oup.com/cid/article-abstract/51/Supplement_1/S59/420477?redirectedFrom=fulltext')}. Acesso em: 14 out. 2026.`,
    `BOZORGMEHR, R.; BAHRANI, V.; FATEMI, A. Ventilator-Associated Pneumonia and Its Responsible Germs; an Epidemiological Study. <strong>Emergency</strong>, v. 5, n. 1, e26, 2017. Disponível em: ${refLink('https://pmc.ncbi.nlm.nih.gov/articles/PMC5325895/')}. Acesso em: 22 out. 2026.`,
    `FALLY, M.; HASEEB, F.; KOUTA, A.; HANSEL, J.; ROBEY, R. C.; WILLIAMS, T.; <em>et al</em>. Unravelling the complexity of ventilator-associated pneumonia: a systematic methodological literature review of diagnostic criteria and definitions used in clinical research. <strong>Critical Care</strong>, v. 28, art. 214, 2024. Doi: ${refLink('https://doi.org/10.1186/s13054-024-04991-3')}. Disponível em: ${refLink('https://link.springer.com/article/10.1186/s13054-024-04991-3')}. Acesso em: 22 out. 2026.`,
    `ROSBOLT, M. B.; STERLING, E. S.; FAHY, B. G. The utility of the clinical pulmonary infection score. <strong>Journal of Intensive Care Medicine</strong>, v. 24, n. 1, p. 26-34, 2009. Doi: ${refLink('https://doi.org/10.1177/0885066608327097')}. Disponível em: ${refLink('https://pubmed.ncbi.nlm.nih.gov/19019839/')}. Acesso em: 22 out. 2026.`,
    `VAZQUEZ, R.; GHEORGHE, C.; RAMOS, F.; DADU, R.; AMOATENG-ADJEPONG, Y.; MANTHOUS, C. A. Gurgling breath sounds may predict hospital-acquired pneumonia. <strong>Chest</strong>, v. 138, n. 2, p. 284-288, 2010. Doi: ${refLink('https://doi.org/10.1378/chest.09-2713')}. Disponível em: ${refLink('https://journal.chestnet.org/article/S0012-3692(10)60408-4/abstract')}. Acesso em: 22 out. 2026.`,
    `CABRERA, R. A.; LAGUNA, H. G.; VILLAGÓMEZ, O. A. J.; MÉNDEZ, R. R.; GUZMÁN, G. R. Nosocomial pneumonia: a common problem that deserves higher attention. <strong>Medicina Interna de México</strong>, v. 25, n. 1, p. 31-37, 2009. Disponível em: ${refLink('https://www.medigraphic.com/cgi-bin/new/resumenI.cgi?IDARTICULO=25140')}. Acesso em: 22 out. 2026.`,
    `HADANO, Y.; INOUE, T. Unraveling the mystery of fever source: the vital role of physical examination in hospitalized patients with emphasis on peripheral line-associated bloodstream infections. <strong>Cureus</strong>, v. 15, n. 7, e42301, 2023. Doi: ${refLink('https://doi.org/10.7759/cureus.42301')}. Disponível em: ${refLink('https://www.cureus.com/articles/169916-unraveling-the-mystery-of-fever-source-the-vital-role-of-physical-examination-in-hospitalized-patients-with-emphasis-on-peripheral-line-associated-bloodstream-infections')}. Acesso em: 22 out. 2026.`,
    `CENTERS FOR DISEASE CONTROL AND PREVENTION (CDC). <strong>National Healthcare Safety Network (NHSN) Patient Safety Component Manual</strong>. Atlanta: CDC, jan. 2026. Disponível em: ${refLink('https://portugues.cdc.gov/nhsn/pdfs/pscmanual/pscmanual_current.pdf')}. Acesso em: 24 out. 2026.`,
  ]},
  {title:'Guia de Identificação: Fluxograma / Checklist', items:[
    `BRASIL. Agência Nacional de Vigilância Sanitária - ANVISA. <strong>Critérios diagnósticos de infecção relacionada à assistência à saúde</strong>. Série Segurança do Paciente e Qualidade em Serviços de Saúde, Caderno 2. Brasília, DF: ANVISA, 2017. Disponível em: ${refLink(CADERNO_2)}. Acesso em: 19 out. 2026.`,
    `BRASIL. Agência Nacional de Vigilância Sanitária - ANVISA. <strong>Nota técnica GVIMS/GGTES nº 03/2026: critérios diagnósticos das infecções relacionadas à assistência à saúde (IRAS)</strong>. Brasília, DF: ANVISA, 2026. Versão republicada em 14 de julho de 2026. Disponível em: ${refLink(NT_03_2026)}. Acesso em: 21 out. 2026.`,
    `CONTERNO, L. O.; MORAES, F. Y.; SILVA FILHO, C. R. Implementação de uma diretriz para pneumonia adquirida na comunidade em um hospital público no Brasil. <strong>Jornal Brasileiro de Pneumologia</strong>, v. 37, n. 2, 2011. Disponível em: ${refLink('https://www.scielo.br/j/jbpneu/a/HHXPG97dXcRFp6PdH8bLvsx/?lang=pt&utm_')}. Acesso em: 19 out. 2026.`,
    `SINGER, M.; DEUTSCHMAN, C. S.; SEYMOUR, C. W.; SHANKAR-HARI, M.; ANNANE, D.; BAUER, M.; <em>et al</em>. The third international consensus definitions for sepsis and septic shock (Sepsis-3). <strong>JAMA</strong>, v. 315, n. 8, p. 801-810, 2016. DOI: ${refLink('https://doi.org/10.1001/jama.2016.0287')}. Disponível em: ${refLink('https://pmc.ncbi.nlm.nih.gov/articles/PMC4968574/')}. Acesso em: 19 out. 2026.`,
    `SEYMOUR, C. W.; LIU, V. X.; IWASHYNA, T. J.; BRUNKHORST, F. M.; REA, T. D.; SCHERAG, A.; <em>et al</em>. Assessment of clinical criteria for sepsis: for the Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). <strong>JAMA</strong>, v. 315, n. 8, p. 762-774, 2016. DOI: ${refLink('https://doi.org/10.1001/jama.2016.0288')}. Disponível em: ${refLink('https://pmc.ncbi.nlm.nih.gov/articles/PMC5433435/')}. Acesso em: 19 out. 2026.`,
  ]},
  {title:'Biblioteca Educacional: Boas práticas / Protocolo / Casos clínicos', items:[
    `BRASIL. Agência Nacional de Vigilância Sanitária – ANVISA. <strong>Higienização das mãos</strong>: quando e como fazer. Brasília, DF: ANVISA, 2021. Disponível em: ${refLink('https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/cartazes/hm_quandoecomo.pdf')}. Acesso em: 1 nov. 2026.`,
    `BRASIL. Agência Nacional de Vigilância Sanitária – ANVISA. <strong>Uso de luvas</strong>: folheto informativo. 2009. [revisado em 2 set. 2022]. 4 p. Disponível em: ${refLink('https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/prevencao-e-controle-de-infeccao-e-resistencia-microbiana/UsodeLuvasFolhetoInformativo.pdf')}. Acesso em: 1 nov. 2026.`,
    `BRASIL. Agência Nacional de Vigilância Sanitária – ANVISA. Nota Técnica GVIMS/GGTES/DIRE3/ANVISA nº 11/2025. <strong>Orientações para implementação de protocolos de prevenção e controle de infecções relacionadas à assistência à saúde</strong>. Brasília, DF: ANVISA, 2025. Disponível em: ${refLink('https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/notas-tecnicas/notas-tecnicas-vigentes/nota-tecnica-11_2025-implementacao-protocolos-de-iras-gvims.pdf?utm_')}. Acesso em: 29 out. 2026.`,
    `BRASIL. Agência Nacional de Vigilância Sanitária – ANVISA. <strong>Prevenção de pneumonia associada à ventilação mecânica. Protocolo de prevenção de PAV</strong>. Brasília, DF: ANVISA, 2026. Versão publicada em 28 de janeiro de 2026. Disponível em: ${refLink('https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/prevencao-e-controle-de-infeccao-e-resistencia-microbiana/prevencao-das-principais-iras/pneumonia-associada-a-ventilacao-mecanica/protocolo-4-prevencoo-de-pav-final.pdf?utm_')}. Acesso em: 29 out. 2026.`,
    `BRASIL. Agência Nacional de Vigilância Sanitária - ANVISA. <strong>Protocolo para a Prevenção de Infecção do Trato Urinário Relacionada ao Uso de Cateter Vesical de Demora (ITU-AC)</strong>. Brasília, DF: ANVISA. Versão 1, 2025. Publicado em 28 de janeiro de 2026. Disponível em: ${refLink('https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/prevencao-e-controle-de-infeccao-e-resistencia-microbiana/prevencao-das-principais-iras/infeccao-do-trato-urinario/protocolo-3-prevencao-de-itu-final.pdf?utm_')}. Acesso em: 29 out. 2026.`,
    `BRASIL. Agência Nacional de Vigilância Sanitária - ANVISA. <strong>Nota técnica GVIMS/GGTES nº 03/2026: critérios diagnósticos das infecções relacionadas à assistência à saúde (IRAS)</strong>. Brasília, DF: ANVISA, 2026. Versão republicada em 14 de julho de 2026. Disponível em: ${refLink(NT_03_2026)}. Acesso em: 29 out. 2026.`,
    `HOSPITAL DE CLÍNICAS DA UNIVERSIDADE FEDERAL DO TRIÂNGULO MINEIRO – HC-UFTM. Unidade de Vigilância em Saúde. <strong>Manejo clínico gerenciado da sepse e do choque séptico no paciente adulto</strong>. Versão 4. Uberaba: HU Brasil, 2026. 20 p. Disponível em: ${refLink('https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-sudeste/hc-uftm/documentos/protocolos-assistenciais/prt-hc-uftm-uvs-004-manejo-clinico-gerenciado-da-sepse-e-do-choque-septico-no-paciente-adulto-versao-4.pdf')}. Acesso em: 1 nov. 2026.`,
    `PRESCOTT, H. C.; <em>et al</em>. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. <strong>Critical Care Medicine</strong>, v. 54, n. 4, p. 725-812, 2026. Doi: 10.1097/CCM.0000000000007075. Disponível em: ${refLink('https://journals.lww.com/ccmjournal/fulltext/10.1097/ccm.0000000000007075~surviving-sepsis-campaign-international-guidelines-for')}. Acesso em: 29 out. 2026.`,
    `WORLD HEALTH ORGANIZATION – WHO. <strong>Guidelines on the Clinical Management of Sepsis</strong>. Geneva: WHO, 2024. Disponível em: ${refLink('https://www.who.int/news/item/30-01-2024-guidelines-on-the-clinical-management-of-sepsis?utm_')}. Acesso em: 29 out. 2026.`,
  ]},
].map(g => ({...g, items: g.items.map((html, i) => ({n:i+1, html}))}));

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
      <div class="inf-card-img" style="background:${inf.color}"><img src="${inf.img}" alt="${inf.name}"></div>
      <div class="inf-card-body">
        <h4>${inf.name} – ${inf.sigla}</h4>
        <p>${inf.summary}</p>
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
  if(q) list = list.filter(i => i.name.toLowerCase().includes(q) || i.sigla.toLowerCase().includes(q) || i.summary.toLowerCase().includes(q));
  renderInfections(list);
}

function openDetail(id) {
  const inf = infections.find(i => i.id === id);
  if(!inf) return;
  const aspectIcons = {info:'circle-info',warning:'triangle-exclamation',danger:'circle-exclamation',success:'brain'};
  document.getElementById('detailTitle').textContent = inf.sigla;
  document.getElementById('detailBadge').textContent = inf.badgeText;
  document.getElementById('detailContent').innerHTML = `
    <div class="iras-question">
      <span>${inf.name}</span>
      <h3>${inf.question}</h3>
    </div>
    <div class="iras-alert-label"><i class="fas fa-bell"></i> Identificando ${inf.sigla} na assistência ao paciente — Evidências de alerta potencial</div>
    <div class="iras-box iras-criteria">
      <div class="iras-box-head"><i class="fas fa-user-check"></i> ${inf.criteriaTitle}</div>
      <div class="iras-box-body">${inf.criteria}</div>
    </div>
    <div class="iras-box iras-signs">
      <div class="iras-box-head"><i class="fas fa-stethoscope"></i> ${inf.signsTitle}</div>
      <div class="iras-box-body">${inf.signs}</div>
    </div>
    <div class="iras-box iras-aspects">
      <div class="iras-box-head"><i class="fas fa-lightbulb"></i> Aspectos importantes</div>
      <div class="iras-box-body">
        ${inf.aspects.map(a=>`
          <div class="iras-aspect ${a.type}">
            <h5><i class="fas fa-${aspectIcons[a.type]}"></i> ${a.title}</h5>
            ${a.html}
          </div>`).join('')}
      </div>
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
  document.getElementById('libraryList').innerHTML = list.map(item => {
    const action = item.cat==='referencia' ? 'showReferences()'
      : item.pdf ? `openPdfModal('${item.id}')`
      : `openImgModal('${item.icon}','${item.title}')`;
    const icon = item.img
      ? `<div class="lib-card-icon has-img"><img src="${encodeURI(item.img)}" alt="" loading="lazy"></div>`
      : `<div class="lib-card-icon">${item.icon}</div>`;
    return `
    <div class="lib-card" tabindex="0" onclick="${action}"
         onkeydown="if(event.key==='Enter')${action}">
      ${icon}
      <div class="lib-card-body">
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
        <span class="lib-badge ${item.badge}">${item.badgeText}</span>
        ${item.pdf ? '<span class="lib-badge badge-pdf"><i class="fas fa-file-lines"></i> PDF</span>' : ''}
      </div>
    </div>`;
  }).join('');
}

function renderReferences(groups) {
  document.getElementById('libraryList').innerHTML = `
    <div class="section-title"><i class="fas fa-book"></i> Referências bibliográficas</div>
    ${groups.map(g => `
    <h4 class="ref-group">${g.title}</h4>
    ${g.items.map(r => `
    <div class="ref-item">
      ${g.numbered ? `<span class="ref-num">${r.n}</span>` : '<span class="ref-dot" aria-hidden="true"></span>'}
      <p>${r.html}</p>
    </div>`).join('')}`).join('') || '<p class="ref-empty">Nenhuma referência encontrada.</p>'}`;
}

function showReferences() {
  setLibFilter(document.getElementById('libChipRef'), 'referencia');
  window.scrollTo(0,0);
}

function setLibFilter(el, cat) {
  document.querySelectorAll('#page-library .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  currentLibFilter = cat;
  applyLibFilter();
}

function applyLibFilter() {
  const q = (document.getElementById('libSearch').value || '').toLowerCase();
  if(currentLibFilter === 'referencia') {
    const matches = r => !q || r.html.replace(/<[^>]+>/g,'').toLowerCase().includes(q);
    renderReferences(referenceGroups
      .map(g => ({...g, items: g.items.filter(matches)}))
      .filter(g => g.items.length));
    return;
  }
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

/* ---------- Visualizador de PDF (pdf.js, com fallback para iframe) ---------- */
const PDFJS_BASE = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
const PDF_ZOOM_MIN = 0.5, PDF_ZOOM_MAX = 3, PDF_ZOOM_STEP = 0.25;
let pdfjsPromise = null;
let pdfSession = 0;
let pdfDoc = null;
let pdfPages = [];
let pdfZoom = 1;
let pdfObserver = null;
let pdfRenderTasks = new Set();
let pdfLayoutWidth = 0;
let pdfResizeTimer = null;
let pdfPendingPage = 1; // página inicial a exibir ao abrir o documento

function loadPdfJs() {
  if(window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  if(!pdfjsPromise) {
    pdfjsPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = PDFJS_BASE + 'pdf.min.js';
      s.onload = () => {
        if(!window.pdfjsLib) { pdfjsPromise = null; reject(new Error('pdf.js indisponível')); return; }
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_BASE + 'pdf.worker.min.js';
        resolve(window.pdfjsLib);
      };
      s.onerror = () => { pdfjsPromise = null; s.remove(); reject(new Error('pdf.js indisponível')); };
      document.head.appendChild(s);
    });
  }
  return pdfjsPromise;
}

function openPdfModal(id) {
  const item = libraryItems.find(i => i.id === id);
  if(!item || !item.pdf) return;
  const url = encodeURI(item.pdf);
  const modal = document.getElementById('pdfModal');
  const body = document.getElementById('pdfModalBody');
  document.getElementById('pdfModalTitle').textContent = item.title;
  const dl = document.getElementById('pdfDownloadLink');
  dl.href = url;
  dl.setAttribute('download', item.pdfName || item.pdf.split('/').pop());
  document.getElementById('pdfOpenLink').href = url;

  cleanupPdf();
  const session = ++pdfSession;
  pdfPendingPage = item.pdfPage || 1;
  pdfZoom = 1;
  updatePdfZoomLabel();
  modal.classList.remove('pdf-fallback');
  body.innerHTML = '<div class="pdf-status"><i class="fas fa-spinner fa-spin"></i> Carregando documento...</div>';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  loadPdfJs()
    .then(lib => lib.getDocument(url).promise)
    .then(async doc => {
      if(session !== pdfSession) { doc.destroy(); return; }
      pdfDoc = doc;
      const pages = [];
      for(let n = 1; n <= doc.numPages; n++) pages.push(await doc.getPage(n));
      if(session !== pdfSession) return;
      pdfPages = pages;
      layoutPdfPages();
    })
    .catch(() => {
      if(session !== pdfSession) return;
      showPdfFallback(url, item.title);
    });
}

function showPdfFallback(url, title) {
  document.getElementById('pdfModal').classList.add('pdf-fallback');
  const body = document.getElementById('pdfModalBody');
  body.innerHTML = `
    <iframe class="pdf-frame" src="${url}" title="${title}"></iframe>
    <p class="pdf-fallback-note">Se o documento não aparecer, use <strong>Abrir</strong> ou <strong>Baixar PDF</strong> abaixo.</p>`;
}

function cancelPdfRenders() {
  pdfRenderTasks.forEach(t => { try { t.cancel(); } catch(e) {} });
  pdfRenderTasks.clear();
  if(pdfObserver) { pdfObserver.disconnect(); pdfObserver = null; }
}

function layoutPdfPages() {
  const body = document.getElementById('pdfModalBody');
  if(!pdfPages.length) return;
  cancelPdfRenders();
  const scrollRatio = body.scrollHeight ? body.scrollTop / body.scrollHeight : 0;
  pdfLayoutWidth = body.clientWidth;
  const baseWidth = Math.max(200, pdfLayoutWidth - 24);
  const pageWidth = Math.round(baseWidth * pdfZoom);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  body.innerHTML = '';
  pdfObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      pdfObserver.unobserve(entry.target);
      renderPdfPage(entry.target, dpr);
    });
  }, {root: body, rootMargin: '400px 0px'});

  pdfPages.forEach((page, i) => {
    const vp1 = page.getViewport({scale: 1});
    const wrap = document.createElement('div');
    wrap.className = 'pdf-page';
    wrap.style.width = pageWidth + 'px';
    wrap.style.height = Math.round(pageWidth * vp1.height / vp1.width) + 'px';
    wrap.dataset.index = i;
    wrap.dataset.scale = pageWidth / vp1.width;
    wrap.setAttribute('aria-label', `Página ${i + 1} de ${pdfPages.length}`);
    body.appendChild(wrap);
    pdfObserver.observe(wrap);
  });
  const startWrap = pdfPendingPage > 1 && body.children[pdfPendingPage - 1];
  if(startWrap) {
    body.scrollTop = startWrap.getBoundingClientRect().top - body.getBoundingClientRect().top - 12;
  } else {
    body.scrollTop = scrollRatio * body.scrollHeight;
  }
  pdfPendingPage = 1;
}

function renderPdfPage(wrap, dpr) {
  const page = pdfPages[+wrap.dataset.index];
  if(!page) return;
  let scale = +wrap.dataset.scale * dpr;
  const base = page.getViewport({scale});
  const MAX_PIXELS = 16e6; // limite de canvas em navegadores móveis (iOS)
  if(base.width * base.height > MAX_PIXELS) scale *= Math.sqrt(MAX_PIXELS / (base.width * base.height));
  const viewport = page.getViewport({scale});
  const canvas = document.createElement('canvas');
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);
  const task = page.render({canvasContext: canvas.getContext('2d'), viewport});
  pdfRenderTasks.add(task);
  task.promise
    .then(() => { if(wrap.isConnected) wrap.appendChild(canvas); })
    .catch(() => {})
    .finally(() => pdfRenderTasks.delete(task));
}

function zoomPdf(dir) {
  if(!pdfPages.length) return;
  const next = dir === 0 ? 1 : pdfZoom + dir * PDF_ZOOM_STEP;
  pdfZoom = Math.min(PDF_ZOOM_MAX, Math.max(PDF_ZOOM_MIN, next));
  updatePdfZoomLabel();
  layoutPdfPages();
}

function updatePdfZoomLabel() {
  document.getElementById('pdfZoomLabel').textContent = Math.round(pdfZoom * 100) + '%';
}

function cleanupPdf() {
  cancelPdfRenders();
  pdfPages = [];
  if(pdfDoc) { pdfDoc.destroy(); pdfDoc = null; }
}

function closePdfModal() {
  const modal = document.getElementById('pdfModal');
  if(!modal.classList.contains('open')) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  pdfSession++;
  cleanupPdf();
  document.getElementById('pdfModalBody').innerHTML = '';
}

window.addEventListener('resize', () => {
  if(!pdfPages.length) return;
  clearTimeout(pdfResizeTimer);
  pdfResizeTimer = setTimeout(() => {
    if(document.getElementById('pdfModalBody').clientWidth !== pdfLayoutWidth) layoutPdfPages();
  }, 200);
});

window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  btn.classList.toggle('visible', window.scrollY > 300);
});

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') {
    closePdfModal();
    closeImgModal();
    closeDetail();
    closeLock();
  }
});

renderInfections(infections);
renderGuide();
renderLibrary(libraryItems);
renderChecklist();
