const infections = [
  {id:'pav',cat:'respiratoria',name:'Pneumonia Associada à Ventilação Mecânica',sigla:'PAV',icon:'🫁',color:'#E3F2FD',badge:'badge-blue',badgeText:'IRAS • PAV',
   question:'Estou diante de uma Pneumonia Associada à Ventilação Mecânica – PAV?',
   summary:'Pneumonia em paciente em uso de ventilação mecânica por mais de dois dias consecutivos.',
   criteriaTitle:'O paciente se enquadra nos critérios definidores de PAV?',
   criteria:`
     <h5>Critérios iniciais para a identificação<sup>(1)</sup>:</h5>
     <p>Trata-se de um paciente <strong>com pneumonia</strong>, que seja adulto ou criança acima de 1 ano (que não seja imunodeprimido, e que não tenha doença cardíaca ou pulmonar de base) em <strong>uso de Ventilação Mecânica (VM)</strong> por um período maior que dois dias consecutivos e que, mediante a infecção, o paciente estava em VM ou a VM havia sido removida no dia anterior.</p>
     <h5>O que é o Ventilador mecânico (VM):</h5>
     <p>Dispositivo utilizado para auxiliar ou controlar a respiração de forma contínua, por uma pressão positiva que destina oxigênio para as vias aéreas, de forma:</p>
     <ul>
       <li><strong>Invasiva</strong>: através de traqueostomia (abertura cirúrgica direto na traqueia com uso de uma cânula ligada à um ventilador) ou por intubação endotraqueal (uso de um tubo respiratório da boca à traqueia);</li>
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
     <p class="obs"><strong>Observação</strong>: Contando que, os indícios radiológicos / laboratoriais / clínicos, ocorreram no período de janela de infecção (intervalo temporal de 7 dias durante os quais são identificadas as evidências acima)<sup>(1,2,3)</sup>.</p>`,
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

  {id:'itu-ac',cat:'urinaria',name:'Infecção de Trato Urinário Associada à Cateter Vesical de Demora',sigla:'ITU-AC',icon:'🫘',color:'#E8F5E9',badge:'badge-green2',badgeText:'IRAS • ITU-AC',
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
     <h5>Evidências clínicas / laboratoriais:</h5>
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
       <p>Os <strong>sintomas clínicos</strong> gerais de uma ITU incluem:</p>
       <ul>
         <li>Polaciúria (micção frequente)</li>
         <li>Urgência miccional (vontade súbita e forte de urinar)</li>
         <li>Disúria (sensação de ardor ao urinar)</li>
         <li>Dor pélvica<sup>(2)</sup>.</li>
       </ul>`},
     {title:'Cuidado',type:'danger',html:`
       <p>Cerca de metade dos casos de <strong>febre</strong> no paciente hospitalizado ocorrem devido à IRAS, incluindo as tão frequentes infecções urinárias<sup>(4)</sup>;</p>`},
     {title:'Lembre-se',type:'success',html:`
       <p>Se não tratada, a ITU pode levar a <strong>complicações graves</strong>, como sepse ou falência de órgãos<sup>(2)</sup>.</p>`},
   ]},

  {id:'isc',cat:'cirurgica',name:'Infecção de Sítio Cirúrgico',sigla:'ISC',icon:'🩹',color:'#FCE4EC',badge:'badge-red2',badgeText:'IRAS • ISC',
   question:'Estou diante de uma Infecção de Sítio Cirúrgico – ISC?',
   summary:'Processo infeccioso relacionado a procedimento cirúrgico, em pacientes internados ou ambulatoriais.',
   criteriaTitle:'O paciente se enquadra nos critérios definidores de ISC?',
   criteria:`
     <h5>Critérios iniciais para a identificação<sup>(1)</sup>:</h5>
     <p>As <strong>infecções de Sítio Cirúrgico (ISC)</strong> correspondem a processos infecciosos relacionados à <strong>procedimentos cirúrgicos</strong> em pacientes internados ou ambulatoriais, sendo classificadas quanto à local e profundidade, conforme os critérios de sítios específicos:</p>
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
       <p>Uma intervenção cirúrgica pressupõe uma agressão ao paciente, que pode desenvolver uma síndrome de resposta inflamatória sistêmica e, consequentemente, febre. Isto é consequência do <strong>traumatismo cirúrgico</strong>, e costuma aparecer mais nas primeiras 24-48 horas após a intervenção, mas não representa um processo infeccioso de fato, bem como não demanda tratamento. Além disso, nas primeiras horas após a cirurgia pode haver hipertermia decorrente dos medicamentos anestésicos, sem correlação com microrganismos<sup>(4)</sup>.</p>`},
     {title:'Cuidado',type:'danger',html:`
       <p>De modo geral, ISCs tendem a produzir <strong>vermelhidão, edema, dor, sensibilidade local e drenagem de pus ou líquido no local da incisão</strong>. No entanto, a presença de uma inflamação mínima e drenagem de secreção limitada aos pontos de sutura, não podem ser considerados com ISC incisional, haja vista que se trata de uma resposta esperada do organismo mediante um processo cirúrgico<sup>(1,2)</sup>.</p>`},
     {title:'Lembre-se',type:'success',html:`
       <p>Para detecção de ISC, é fundamental que haja <strong>monitoramento e vigilância</strong> dos quadros clínicos, considerando o procedimento realizado:</p>
       <ul><li><strong>90 dias</strong> para implante de prótese mamária, artroplastia primária de quadril e joelho, revascularização do miocárdio, derivação interna neurológica, cirurgia de catarata. E, <strong>30 dias</strong> para cirurgia cesariana<sup>(1)</sup>.</li></ul>`},
   ]},

  {id:'ipcs',cat:'sanguinea',name:'Infecção Primária de Corrente Sanguínea',sigla:'IPCS',icon:'🩸',color:'#F3E5F5',badge:'badge-purple',badgeText:'IRAS • IPCS',
   question:'Estou diante de uma Infecção Primária de Corrente Sanguínea – IPCS?',
   summary:'Microrganismo na corrente sanguínea sem relação com outro foco primário de infecção.',
   criteriaTitle:'O paciente se enquadra nos critérios definidores de IPCS?',
   criteria:`
     <h5>Critérios iniciais para a identificação<sup>(1)</sup>:</h5>
     <p>A <strong>presença de um ou mais microrganismos (bactérias, vírus, fungos ou protozoários) na corrente sanguínea</strong>, cuja origem não está relacionada a nenhum outro foco primário de infecção (foco primário de outra IRAS). Nesta situação, o foco primário é a própria corrente sanguínea (ponto de partida/surgimento) e, por isso, a infecção é denominada de Infecção Primária de Corrente Sanguínea (IPCS).</p>
     <h5>O que é um Cateter Venoso Central (CVC):</h5>
     <p><strong>Dispositivo intravascular</strong> utilizado para infusão, coleta de amostra sanguínea ou monitoramento hemodinâmico, cuja terminação esteja posicionada próxima ao coração ou em um grande vaso (são considerados grandes vasos: aorta, artéria pulmonar, veias cavas, veias braquicefálicas, veias jugulares internas, veias subclávias, veias ilíacas externa e comum, veias femorais);</p>
     <h5>Infecção Primária de Corrente Sanguínea Laboratorialmente Confirmada Associada a Cateter Central (IPCSL-CVC)</h5>
     <p>Paciente em uso de cateter central por um período maior que 2 dias consecutivos (a partir do D3, sendo o dia da inserção considerado como D1, independentemente do horário de inserção) e que, na data da infecção, o paciente estava em uso do dispositivo ou este havia sido removido no dia anterior. Ademais, a infecção foi confirmada laboratorialmente, através da <strong>identificação de microrganismo bacteriano ou fúngico patogênico</strong> em uma ou mais hemoculturas<sup>(1)</sup>.</p>`,
   signsTitle:'Há sinais clínicos e laboratoriais que sugerem IPCS?',
   signs:`
     <h5>Evidências laboratoriais / clínicas:</h5>
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
     <ul><li><strong>Apresenta microrganismos contaminantes de pele</strong> (comensais 1a,1b), por exemplo: Corynebacterium spp. (exclui C. diphtheriae), Bacillus spp. (exclui B. anthracis), Propionibacterium spp., Staphylococcus coagulase negativo, Streptococcus do grupo viridans, Aerococcus spp. e Micrococcus spp, <strong>identificados em DUAS ou MAIS hemoculturas</strong>, coletadas em momentos distintos, no mesmo dia ou no máximo no dia seguinte;</li></ul>
     <div class="plus">+</div>
     <ul><li>O microrganismo identificado não está relacionado a outro foco infeccioso.</li></ul>
     <div class="plus">+</div>
     <p class="obs">Os sinais/sintomas e o resultado da hemocultura ocorreram no <strong>período de janela da Infecção</strong><sup>(1)</sup>.</p>`,
   aspects:[
     {title:'Sobre IPCS',type:'info',html:`
       <p>As infecções da corrente sanguínea causam <strong>febre (&gt;38ºC) como um dos sinais iniciais</strong> e principais, que antecede agravamentos severos, como disfunção orgânica e choque séptico<sup>(2,4,6,14)</sup>.</p>`},
     {title:'Atenção',type:'warning',html:`
       <ul>
         <li>A inserção e o manuseio frequentes e inseguros de dispositivos intravasculares assim como o uso de equipamentos contaminados, aumentam consideravelmente o risco para ocorrência de infecção!<sup>(2)</sup></li>
         <li>Pacientes com início abrupto de sinais e sintomas de sepse sem fatores de risco, especialmente sem qualquer foco local de infecção, levantam suspeitas importantes de infecção associada à um dispositivo intravascular, e este pode já estar apresentando falhas na funcionalidade e até sinais flogísticos produzidos<sup>(6)</sup>.</li>
       </ul>`},
     {title:'Cuidado',type:'danger',html:`
       <p>A gravidade clínica na admissão hospitalar, e a imunossupressão do paciente, elevam os riscos para IPCS, por isso a importância da cautela rigorosa na avaliação inicial e contínua do paciente<sup>(2)</sup>.</p>`},
     {title:'Lembre-se',type:'success',html:`
       <p>Os profissionais de saúde devem priorizar um exame físico direcionado, mesmo em ambientes com grande fluxo de pacientes. É crucial inspecionar e avaliar ativamente os locais de inserção do cateter para prevenir complicações adicionais<sup>(6,14)</sup>.</p>`},
   ]},
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
