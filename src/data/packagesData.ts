import { Plan, CourseModule, CourseBonus, Testimonial, FaqItem, SimulatorOption } from '../types';

export const PLANS: Plan[] = [
  {
    id: 'bronze',
    name: 'PACOTE BRONZE',
    tagline: 'O ponto de partida para transformar sua rotina!',
    badge: 'Iniciante',
    badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50',
    themeColor: 'bronze',
    price: 97.00,
    installments: {
      count: 12,
      value: 9.68,
    },
    accessDuration: 'Acesso por 3 Meses',
    accessDurationMonths: 3,
    targetAudience: 'Ideal para quem quer conhecer o poder da IA na educação e já começar a aplicar na prática.',
    modulesIncluded: [
      'Módulo 1: Fundamentos da IA',
      'Módulo 2: Provas e Avaliações (Básico)',
      'Módulo 3: Atividades (Básico)',
      'Módulo 4: Planejamento de Aulas (Básico)',
    ],
    features: [
      { text: 'Acesso imediato à plataforma' },
      { text: '4 Módulos Práticos Essenciais' },
      { text: 'Acesso ao Grupo de Suporte WhatsApp (Tire suas dúvidas)' },
      { text: 'Acesso durante 3 meses completos' },
    ],
    bonuses: [
      'Modelo de provas (editáveis)',
      'Banco de atividades (com gabarito)',
      'Acesso a materiais no Canva',
      'Comunidade exclusiva de professores',
    ],
    whatsappSupport: 'Acesso ao Grupo de Suporte WhatsApp',
    hasCertificate: false,
    ctaText: 'GARANTIR PACOTE BRONZE',
  },
  {
    id: 'prata',
    name: 'PACOTE PRATA',
    tagline: 'O equilíbrio ideal entre conteúdo, prática e resultados!',
    badge: 'Custo-Benefício',
    badgeColor: 'bg-slate-700/60 text-slate-200 border-slate-500/50',
    themeColor: 'silver',
    price: 177.00,
    installments: {
      count: 12,
      value: 17.66,
    },
    accessDuration: 'Acesso por 6 Meses',
    accessDurationMonths: 6,
    targetAudience: 'Para quem quer ir além e criar materiais completos, de forma prática e rápida.',
    modulesIncluded: [
      'Módulo 1: Fundamentos da IA',
      'Módulo 2: Provas e Avaliações (Básico)',
      'Módulo 3: Atividades (Básico)',
      'Módulo 4: Planejamento de Aulas (Básico)',
      'Módulo 5: Material Visual (Canva + IA)',
      'Módulo 6: IA no Dia a Dia do Professor',
    ],
    features: [
      { text: 'Acesso imediato por 6 meses' },
      { text: '6 Módulos Práticos Completos' },
      { text: 'Aulas de Canva + IA para materiais visuais' },
      { text: 'Módulo exclusivo de IA na rotina diária' },
      { text: 'Suporte no WhatsApp e Comunidade' },
      { text: 'Certificado de Conclusão incluído', highlight: true },
    ],
    bonuses: [
      '100 Prompts prontos para professores',
      'Modelos de provas (editáveis)',
      'Acesso a materiais no Canva',
      'Comunidade exclusiva',
      'Certificado de conclusão oficial',
    ],
    whatsappSupport: 'Suporte via WhatsApp e Comunidade',
    hasCertificate: true,
    certificateDetails: 'Certificado de Conclusão incluso',
    ctaText: 'GARANTIR PACOTE PRATA',
  },
  {
    id: 'ouro',
    name: 'PACOTE OURO',
    tagline: 'A formação completa para o professor do futuro!',
    badge: '👑 MAIS COMPLETO & VENDIDO',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-lg shadow-amber-500/20',
    themeColor: 'gold',
    oldPrice: 397.00,
    price: 297.00,
    installments: {
      count: 12,
      value: 29.64,
    },
    accessDuration: 'Acesso Completo Imediato + Atualizações',
    accessDurationMonths: 12,
    isPopular: true,
    targetAudience: 'Tudo o que você precisa para dominar a IA e criar materiais incríveis, com suporte VIP e benefícios exclusivos.',
    modulesIncluded: [
      'Módulo 1: Fundamentos da IA Avançado',
      'Módulo 2: Provas e Avaliações Completas',
      'Módulo 3: Atividades e Situações-Problema',
      'Módulo 4: Plano de Aulas e Sequências Didáticas BNCC',
      'Módulo 5: Trabalhos e Projetos Interdisciplinares',
      'Módulo 6: Material Visual Profissional (Canva + IA)',
    ],
    features: [
      { text: 'Acesso Completo com Atualizações Gratuitas', highlight: true },
      { text: 'Todos os 6 Módulos Aprofundados' },
      { text: 'Módulo Exclusivo: Trabalhos e Projetos Interdisciplinares', highlight: true },
      { text: 'Canva + IA Avançado (jogos, slides, fichas de impressão)', highlight: true },
      { text: 'Suporte Exclusivo e Direto com Mentores' },
      { text: 'Certificado Oficial com Carga Horária (válido p/ progressão)', highlight: true },
    ],
    bonuses: [
      '100+ Prompts Prontos por disciplina e objetivo (BNCC)',
      'Modelos de Provas Editáveis em Word e PDF',
      'Banco de Atividades Completo com Gabarito Comentado',
      'Guia de Ferramentas de IA (as melhores e 100% gratuitas)',
      'Acesso à Comunidade VIP de Professores',
      'Atualizações Gratuitas de Novos Conteúdos',
      'Certificado de Conclusão com Carga Horária',
    ],
    whatsappSupport: 'Suporte Exclusivo & Atendimento Prioritário',
    hasCertificate: true,
    certificateDetails: 'Certificado de Conclusão com Carga Horária (horas de formação)',
    ctaText: 'GARANTIR PACOTE OURO COM R$ 100 OFF',
  },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: 'Fundamentos da IA Aplicada',
    subtitle: 'Desmistificando a Inteligência Artificial para a Sala de Aula',
    badge: 'Módulo 1',
    icon: 'Brain',
    topics: [
      'O que é IA, como funciona e por que ela é sua aliada número 1',
      'ChatGPT, Claude, Gemini e outras ferramentas gratuitas essenciais',
      'A anatomia do prompt perfeito para educadores (sem respostas robóticas)',
      'Como evitar alucinações e respostas genéricas com comandos de precisão',
    ],
    practicalOutcome: 'Você aprenderá a dialogar com as ferramentas com naturalidade, obtendo respostas de alto nível em menos de 1 minuto.',
    includedIn: ['bronze', 'prata', 'ouro'],
  },
  {
    id: 2,
    title: 'Provas e Avaliações Inteligentes',
    subtitle: 'Elaboração Rápida com Gabaritos e Critérios Claros',
    badge: 'Módulo 2',
    icon: 'FileCheck',
    topics: [
      'Criação de questões objetivas (múltipla escolha) com distratores verossímeis',
      'Questões discursivas com critérios analíticos de pontuação',
      'Geração de gabaritos comentados com explicação pedagógica detalhada',
      'Calibração de níveis de dificuldade: Fácil, Médio e Desafiador',
    ],
    practicalOutcome: 'Crie uma prova bimestral completa com 10 questões originais, gabarito e critérios de correção em menos de 10 minutos.',
    includedIn: ['bronze', 'prata', 'ouro'],
  },
  {
    id: 3,
    title: 'Atividades e Exercícios Engajadores',
    subtitle: 'Exercícios Práticos, Situações-Problema e Revisões',
    badge: 'Módulo 3',
    icon: 'PenTool',
    topics: [
      'Listas de exercícios e explicações didáticas com analogias reais',
      'Situações-problema e estudos de caso contextualizados com o mundo dos alunos',
      'Jogos de perguntas para dinâmicas de revisão pré-prova',
      'Adaptação de um mesmo conteúdo para turmas heterogêneas e reforço escolar',
    ],
    practicalOutcome: 'Adapte atividades para diferentes ritmos de aprendizagem sem precisar criar 3 materiais diferentes do zero.',
    includedIn: ['bronze', 'prata', 'ouro'],
  },
  {
    id: 4,
    title: 'Planejamento de Aulas & BNCC',
    subtitle: 'Sequências Didáticas e Metodologias Ativas',
    badge: 'Módulo 4',
    icon: 'Calendar',
    topics: [
      'Roteiros de aula estruturados e sequências didáticas passo a passo',
      'Alinhamento com competências e habilidades da BNCC',
      'Sugestões de metodologias ativas: sala de aula invertida, gamificação e debates',
      'Atividades interdisciplinares que conectam matérias diferentes',
    ],
    practicalOutcome: 'Monte o planejamento semanal ou mensal das suas disciplinas em uma única tarde, com roteiros criativos.',
    includedIn: ['bronze', 'prata', 'ouro'],
  },
  {
    id: 5,
    title: 'Trabalhos, Projetos e Pesquisas',
    subtitle: 'Projetos Interdisciplinares e Rubricas de Avaliação',
    badge: 'Módulo 5',
    icon: 'FolderKanban',
    topics: [
      'Projetos investigativos interdisciplinares baseados em desafios reais',
      'Textos de apoio, fichas de leitura e resumos orientados',
      'Roteiros para apresentações orais, feiras de ciências e podcasts escolares',
      'Rubricas transparentes de avaliação para trabalhos em grupo',
    ],
    practicalOutcome: 'Desenvolva projetos escolares que encantam a coordenação, os pais e colocam os alunos no centro do aprendizado.',
    includedIn: ['ouro'],
  },
  {
    id: 6,
    title: 'Material Visual Profissional (Canva + IA)',
    subtitle: 'Design Educativo Sem Ser Designer',
    badge: 'Módulo 6',
    icon: 'Palette',
    topics: [
      'Criação de capas, cartazes temáticos e fichas ilustradas',
      'Geração de imagens educativas gratuitas com comandos de IA',
      'Jogos educativos impressos (dominós pedagógicos, quizzes, flashcards)',
      'Slides modernos para aulas visuais e dinâmicas',
      'Exportação em alta resolução pronta para impressão ou envio digital',
    ],
    practicalOutcome: 'Transforme textos e listas em cartazes, apresentações e materiais coloridos no Canva em questão de minutos.',
    includedIn: ['prata', 'ouro'],
  },
];

export const COURSE_BONUSES: CourseBonus[] = [
  {
    id: 1,
    title: '100+ Prompts Prontos para Professores',
    subtitle: 'Divididos por Disciplina e Objetivo Pedagógico',
    value: 'R$ 97,00',
    tag: 'Prata & Ouro',
    description: 'Copie e cole comandos testados para Matemática, Português, História, Ciências, Geografia, Língua Estrangeira e Artes. Nunca mais olhe para uma tela em branco.',
    includedIn: ['prata', 'ouro'],
  },
  {
    id: 2,
    title: 'Modelos de Provas Editáveis (Word e PDF)',
    subtitle: 'Layouts Profissionais e Padronizados',
    value: 'R$ 67,00',
    tag: 'Todos os Planos',
    description: 'Modelos pré-formatados com cabeçalho, instruções, campos de nota e diagramação limpa prontos para preencher e imprimir.',
    includedIn: ['bronze', 'prata', 'ouro'],
  },
  {
    id: 3,
    title: 'Banco de Atividades com Gabarito',
    subtitle: 'Acervo de Exercícios Prontos',
    value: 'R$ 87,00',
    tag: 'Todos os Planos',
    description: 'Centenas de exercícios classificados por tema e ano escolar para usar imediatamente nas suas aulas.',
    includedIn: ['bronze', 'prata', 'ouro'],
  },
  {
    id: 4,
    title: 'Acesso a Materiais Editáveis no Canva',
    subtitle: 'Templates de Slides, Cartazes e Fichas',
    value: 'R$ 97,00',
    tag: 'Todos os Planos',
    description: 'Templates prontos no Canva para você apenas alterar o tema e imprimir ou projetar em sala de aula.',
    includedIn: ['bronze', 'prata', 'ouro'],
  },
  {
    id: 5,
    title: 'Comunidade Exclusiva de Educadores',
    subtitle: 'Rede de Apoio e Troca de Atividades',
    value: 'Inestimável',
    tag: 'Todos os Planos',
    description: 'Conecte-se com professores inovadores de todo o Brasil que compartilham experiências, materiais e ideias validadas.',
    includedIn: ['bronze', 'prata', 'ouro'],
  },
  {
    id: 6,
    title: 'Guia de Ferramentas de IA Gratuitas',
    subtitle: 'As Melhores Opções Sem Pagar Assinatura',
    value: 'R$ 47,00',
    tag: 'Exclusivo Pacote Ouro',
    description: 'Curadoria completa das melhores IAs gratuitas para correção de texto, criação de slides, síntese de voz e geradores visuais.',
    includedIn: ['ouro'],
  },
  {
    id: 7,
    title: 'Certificado de Conclusão com Carga Horária',
    subtitle: 'Reconhecimento Oficial de Horas Formativas',
    value: 'R$ 80,00',
    tag: 'Prata & Ouro',
    description: 'Certificado digital com código de autenticidade e carga horária para horas complementares e progressão no plano de carreira docente.',
    includedIn: ['prata', 'ouro'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Profª. Mariana Siqueira',
    role: 'Professora de Língua Portuguesa',
    subject: 'Ensino Fundamental II e Médio',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    text: 'Eu passava meus domingos corrigindo e montando provas do zero. Com a mentoria, aprendi comandos precisos e criei uma avaliação bimestral inteira com gabarito em 15 minutos! Minha qualidade de vida mudou totalmente.',
    hoursSaved: 'Economiza 8h por semana',
    rating: 5,
    highlight: 'Meus domingos voltaram a ser da minha família!',
  },
  {
    id: 2,
    name: 'Prof. Carlos Eduardo Mendes',
    role: 'Professor de História e Sociologia',
    subject: 'Rede Pública e Particular',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    text: 'Tinha receio de que a IA deixasse as aulas mecânicas ou superficiais. A mentoria me ensinou exatamente o contrário: a IA virou minha assistente para criar situações-problema históricas que prenderam a atenção dos alunos como nunca.',
    hoursSaved: 'Economiza 10h por semana',
    rating: 5,
    highlight: 'Alunos muito mais participativos nas aulas',
  },
  {
    id: 3,
    name: 'Profª. Renata Alencar',
    role: 'Professora Pedagoga',
    subject: 'Ensino Fundamental I (Anos Iniciais)',
    avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&auto=format&fit=crop&q=80',
    text: 'O módulo de Canva + IA foi um divisor de águas! Produzo jogos pedagógicos, cartazes ilustrados e fichas de leitura lindas sem depender de ninguém. O suporte no WhatsApp foi super atencioso com as minhas dúvidas.',
    hoursSaved: 'Economiza 6h por semana',
    rating: 5,
    highlight: 'Materiais visuais lindos que encantam a coordenação',
  },
  {
    id: 4,
    name: 'Prof. Fernando Bastos',
    role: 'Professor de Ciências e Biologia',
    subject: 'Ensino Fundamental II',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    text: 'O banco de prompts e os modelos de sequências didáticas valem muito mais do que o preço do curso. O método é direto ao ponto, sem enrolação teórica, feito por quem entende de sala de aula.',
    hoursSaved: 'Economiza 12h por semana',
    rating: 5,
    highlight: 'Didático, prático e 100% aplicável',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Eu não entendo quase nada de informática. Vou conseguir acompanhar?',
    answer: 'Sim, com certeza! O treinamento foi estruturado com uma linguagem simples, acolhedora e passo a passo. Você não precisa saber programação nem ter experiência anterior. Mostramos na tela exatamente onde clicar e o que digitar.',
  },
  {
    question: 'As ferramentas de IA ensinadas na mentoria são gratuitas?',
    answer: 'Sim! Mais de 95% do treinamento foca em ferramentas e recursos com versões 100% gratuitas (como a versão gratuita do ChatGPT, Gemini, Canva Gratuito e outras soluções sem custo). Você não precisará gastar com mensalidades caras para colocar tudo em prática.',
  },
  {
    question: 'A mentoria serve para a minha disciplina e série de atuação?',
    answer: 'Sim. As técnicas de engenharia pedagógica de prompts funcionam para todas as áreas: Humanas (História, Geografia, Filosofia, Sociologia), Linguagens (Português, Redação, Inglês, Espanhol), Exatas (Matemática, Física, Química) e Biológicas, abrangendo desde a Educação Infantil e Fundamental até o Ensino Médio, Superior e Cursos Técnicos.',
  },
  {
    question: 'Como e quando recebo o acesso ao curso e aos bônus?',
    answer: 'O acesso é imediato! Assim que o seu pagamento for aprovado (no cartão ou PIX a confirmação ocorre em segundos), você receberá um e-mail com seus dados de login para entrar na área de membros e acessar todas as aulas e materiais disponíveis.',
  },
  {
    question: 'Qual a diferença entre os pacotes Bronze, Prata e Ouro?',
    answer: 'O Pacote Bronze é ideal para quem quer os 4 módulos essenciais com 3 meses de acesso. O Pacote Prata adiciona os módulos de Material Visual (Canva + IA) e IA no Dia a Dia, 6 meses de acesso e Certificado. O Pacote Ouro é o mais completo: inclui todos os módulos avançados, trabalhos interdisciplinares, 100+ prompts prontos, modelos editáveis em Word/PDF, comunidade VIP, suporte prioritário e atualizações gratuitas com acesso estendido.',
  },
  {
    question: 'O certificado é reconhecido?',
    answer: 'Sim! Nos pacotes Prata e Ouro você recebe um Certificado de Conclusão com carga horária devidamente discriminada, válido para comprovação de horas complementares, valorização do currículo e progressão docente conforme as normas de cada instituição.',
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer: 'Você tem 7 dias de garantia incondicional de risco zero. Entre na plataforma, assista às aulas, baixe os bônus e experimente o método. Se por qualquer motivo você não gostar ou achar que não é para você, basta nos enviar um e-mail ou mensagem no WhatsApp que reembolsaremos 100% do seu dinheiro.',
  },
  {
    question: 'Como funciona o suporte para tirar dúvidas?',
    answer: 'Todos os planos contam com acesso ao Grupo de Suporte no WhatsApp e à Comunidade exclusiva de Professores, onde você pode postar suas dúvidas diárias e receber auxílio direto para destravar suas criações.',
  },
];

export const SIMULATOR_PRESETS: SimulatorOption[] = [
  {
    subject: 'História',
    grade: '8º Ano - Ensino Fundamental',
    objective: 'Prova com 3 Questões + Gabarito Pedagógico',
    promptExample: 'Atue como professor especialista em História. Crie 3 questões de múltipla escolha sobre a Revolução Industrial para o 8º ano com 4 alternativas cada (uma correta e três distratores fundamentados em concepções comuns dos alunos). Ao final, forneça o gabarito comentado justificando por que a correta é verdadeira e por que os distratores estão errados.',
    resultTitle: 'Avaliação: A Revolução Industrial e as Transformações Sociais',
    resultOutput: `QUESTÃO 1: Durante a Primeira Revolução Industrial na Inglaterra, a introdução das máquinas a vapor nas fábricas têxteis provocou intensas transformações nas relações de trabalho. Assinale a alternativa que descreve corretamente essa mudança:

A) Os artesãos mantiveram o controle sobre o ritmo de produção em suas oficinas familiares.
B) Os trabalhadores passaram a se submeter a rigorosas jornadas de trabalho fabril sob o controle do relógio e da gerência. [CORRETA]
C) A legislação trabalhista inglesa concedeu imediatamente férias remuneradas e jornada máxima de 8 horas diárias.
D) Houve diminuição drástica do êxodo rural, com a população retornando aos campos ingleses.

GABARITO COMENTADO:
• Letra B (Correta): A máquina impôs a disciplina temporal fabril, retirando a autonomia do antigo artífice.
• Distrator A: Errado, a fábrica concentrou e fragmentou o processo produtivo.
• Distrator C: Errado, as primeiras leis trabalhistas de proteção levaram décadas para surgir.
• Distrator D: Errado, ocorreu intensificação do êxodo rural (cercamento dos campos).`,
    timeSaved: 'Reduz de 45 minutos para 40 segundos',
  },
  {
    subject: 'Português',
    grade: '6º Ano - Ensino Fundamental',
    objective: 'Sequência Didática BNCC (Gênero Notícia)',
    promptExample: 'Crie uma sequência didática de 2 aulas de 50 minutos para o 6º ano sobre o gênero textual "Notícia", alinhada à habilidade EF69LP03 da BNCC. Inclua atividade prática em grupo simulando uma redação de jornal escolar e rubrica simples de autoavaliação.',
    resultTitle: 'Sequência Didática: Noticiando o Mundo ao Redor (EF69LP03)',
    resultOutput: `AULA 1 (50 min): Estrutura da Notícia (O quê, Quem, Quando, Onde, Como e Por quê).
1. Sensibilização (10 min): Análise comparativa de duas manchetes reais de esportes e ciências.
2. Exploração guiada (25 min): Desmontagem do "Lead" em tarjetas coloridas na lousa.
3. Síntese (15 min): Quiz rápido com mini-desafios de identificação dos 6 elementos centrais.

AULA 2 (50 min): Prática Produtiva "Redação Mirim".
1. Atividade em duplas (30 min): Redigir uma notícia de 1 parágrafo sobre um acontecimento fictício da escola (ex: inauguração da horta).
2. Varal de Notícias (20 min): Troca de textos entre duplas com uso de checklist de conferência entre pares.`,
    timeSaved: 'Reduz de 1h30 para 35 segundos',
  },
  {
    subject: 'Matemática',
    grade: '7º Ano - Ensino Fundamental',
    objective: 'Situação-Problema do Cotidiano (Porcentagem)',
    promptExample: 'Crie uma atividade contextualizada de Matemática sobre porcentagem para o 7º ano utilizando a temática de compras em um supermercado no formato de história em quadrinhos mental. Inclua 2 níveis de desafio: básico e avançado para os alunos que terminarem primeiro.',
    resultTitle: 'Desafio Prático: O Dilema das Ofertas no Supermercado',
    resultOutput: `CENÁRIO: A família de Lucas foi ao supermercado fazer as compras do mês. Ao chegar na prateleira de azeite e arroz, encontrou duas promoções:
• Promoção 1: "Leve 3 e pague 2"
• Promoção 2: "Compre 1 e leve o segundo com 50% de desconto"

DESAFIO BÁSICO:
Se o pacote de arroz custa R$ 20,00:
a) Qual o valor total pago levando 3 pacotes na Promoção 1? Qual o desconto percentual real por unidade?
b) Qual o valor total pago levando 2 pacotes na Promoção 2?

DESAFIO EXTRA (Para quem terminar primeiro):
Se Lucas precisa de exatamente 6 pacotes, qual das duas promoções proporcionará a maior economia em reais? Demonstre o cálculo.`,
    timeSaved: 'Reduz de 40 minutos para 20 segundos',
  },
  {
    subject: 'Ciências / Biologia',
    grade: '9º Ano - Ensino Fundamental',
    objective: 'Roteiro de Atividade Lúdica / Investigação Científica',
    promptExample: 'Desenvolva um roteiro de aula investigativa sobre o Sistema Imunológico e Vacinas para o 9º ano com analogia de defesa medieval (castelo, arqueiros, espiões e muralhas). Inclua perguntas disparadoras para guiar a discussão.',
    resultTitle: 'Missão Científica: O Grande Cerco ao Castelo Celular',
    resultOutput: `ANALOGIA PEDAGÓGICA:
• Pele e Mucosas = A grande muralha de pedra exterior (imunidade inata física).
• Macrófagos = Os sentinelas que patrulham os portões engolindo invasores.
• Anticorpos = Flechas teleguiadas produzidas pelos armeiros (Linfócitos B).
• Vacina = O treinamento militar prévio com bonecos de treino para reconhecer o estandarte do inimigo.

PERGUNTAS DISPARADORAS:
1. Por que um exército que já viu o estandarte inimigo reage 10x mais rápido do que um pego de surpresa?
2. O que acontece com o castelo se as sentinelas começarem a atacar os próprios cidadãos (doenças autoimunes)?`,
    timeSaved: 'Reduz de 50 minutos para 25 segundos',
  },
];
