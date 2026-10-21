import { Chapter, DayChallenge } from '../types';

export const BOOK_METADATA = {
  title: 'O Poder do Sorriso',
  subtitle: 'Como Levar Mais Alegria, Leveza e Positividade Para a Sua Vida',
  author: 'Equipe Editorial & Desenvolvimento Humano',
  edition: '1ª Edição Digital — 2026',
  totalEstimatedMinutes: 52,
  isbn: '978-65-00-98421-2',
  year: 2026,
};

export const CHAPTERS: Chapter[] = [
  {
    id: 'intro',
    number: 'Introdução',
    title: 'Um Sorriso Pode Mudar o Seu Dia',
    subtitle: 'O café derramado, a lei de Murphy matinal e a decisão secreta que muda tudo',
    estimatedMinutes: 4,
    epigraph: {
      phrase: 'A paz começa com um sorriso.',
      author: 'Madre Teresa de Calcutá',
      humorousComment: 'E geralmente é testada cinco minutos depois, quando alguém corta a sua frente no trânsito sem dar seta.',
    },
    introDropCap: 'E',
    sections: [
      {
        paragraphs: [
          'Eram exatamente 07h42 de uma terça-feira cinzenta quando o universo decidiu conspirar contra o que restava da minha dignidade. Eu vestia minha camisa mais impecável — aquela branca de algodão egípcio comprada em três parcelas sem juros para uma reunião decisiva. Na mão direita, uma caneca fumegante de café fresco; na esquerda, a pasta de trabalho, a chave de casa entre os dentes e o celular tocando desesperadamente dentro do bolso.',
          'Você conhece o final dessa história: um passo em falso no capacho da sala, uma gravidade impiedosa e uma mancha marrom do tamanho do continente africano espalhando-se exatamente sobre o meu peito. Nesse exato instante, o despertador do vizinho tocou pela quarta vez e uma chuva torrencial começou a despencar lá fora.',
          'Em situações assim, nosso cérebro primitivo nos oferece duas opções padrão: sentar no chão e chorar em posição fetal lamentando nossa existência, ou berrar com a parede culpando o alinhamento planetário. Mas naquela manhã, cansado de transformar pequenos tropeços em tragédias shakespearianas, algo inusitado aconteceu: eu olhei para o espelho, vi aquele desenho abstrato de cafeína na camisa e soltei uma gargalhada genuína.',
          'Não era uma risada de quem enlouqueceu, mas a risada libertadora de quem percebeu a comicidade da cena. O mundo não estava acabando; era apenas uma camisa manchada. Troquei por uma camiseta básica, cheguei à reunião, contei a história com um sorriso sincero e quebrei toda a tensão da sala. A reunião foi um sucesso.',
        ],
        callouts: [
          {
            type: 'humor',
            title: 'Sorria, mas não perca o juízo!',
            content: 'Rir de si mesmo quando o café cai na roupa queima exatamente zero calorias, mas poupa aproximadamente três semanas de rugas de preocupação desnecessária.',
          },
        ],
      },
      {
        heading: 'A proposta deste livro: Leveza sem ilusão',
        paragraphs: [
          'Este livro não foi escrito para dizer a você que o mundo é um parque de diversões cor-de-rosa onde todos os problemas desaparecem com um estalar de dedos. Todos nós temos contas vencendo, prazos apertados, dores nas costas, parentes difíceis e dias em que a vontade é sumir do mapa. A dor e a frustração fazem parte do contrato de estarmos vivos.',
          'No entanto, existe uma diferença monumental entre reconhecer uma tempestade e escolher deitar-se na lama para se afogar nela. O sorriso não é uma máscara para fingir que a tristeza não existe; é uma âncora de lucidez. É a capacidade de olhar para a confusão da vida cotidiana e dizer: "Você é dura, rotina, mas eu ainda sou o capitão do meu bom humor".',
          'Ao longo destas páginas, você encontrará ferramentas práticas, reflexões científicas sem jargões enfadonhos, histórias engraçadas dos nossos tropeços diários e um método passo a passo para resgatar o entusiasmo pelas coisas simples. Pegue uma xícara (com cuidado desta vez!) e venha comigo.',
        ],
        callouts: [
          {
            type: 'tip',
            title: 'Dica prática do dia',
            content: 'Sempre que um pequeno imprevisto acontecer hoje, antes de resmungar, faça uma pausa de três segundos e pergunte-se: "Isso terá alguma importância daqui a cinco anos?". Se a resposta for não, permita-se pelo menos um meio sorriso de alívio.',
          },
        ],
      },
    ],
  },
  {
    id: 'cap1',
    number: 'Capítulo 1',
    title: 'O Poder de um Simples Sorriso',
    subtitle: 'A neurociência do riso, o contágio social e por que sua cara amarrada custa caro',
    estimatedMinutes: 5,
    epigraph: {
      phrase: 'O riso é a distância mais curta entre duas pessoas.',
      author: 'Victor Borge',
      humorousComment: 'E também o jeito mais elegante de desarmar alguém que estava pronto para brigar por vaga no estacionamento.',
    },
    introDropCap: 'Q',
    sections: [
      {
        paragraphs: [
          'Quando você sorri, o que realmente acontece no seu corpo? Muito mais do que um movimento estético que envolve a contração do músculo zigomático maior e do orbicular do olho. A ciência contemporânea tem demonstrado que o cérebro humano é um órgão de retroalimentação fascinante.',
          'Nos anos 1980, o psicólogo Fritz Strack e seus colegas conduziram um experimento clássico sobre a hipótese do feedback facial: participantes que seguravam uma caneta entre os dentes (forçando os músculos do sorriso) achavam tirinhas de quadrinhos significativamente mais engraçadas do que aqueles que seguravam a caneta entre os lábios (forçando uma expressão carrancuda). Embora a neurociência moderna tenha refinado essas conclusões, um fato permanece inegável: o corpo e a mente conversam em via de mão dupla.',
          'Sorrir intencionalmente não resolve uma hipoteca atrasada, mas envia uma mensagem de segurança fisiológica ao sistema nervoso autônomo. Ocorre a liberação gradual de endorfinas, dopamina e serotonina, enquanto os níveis de cortisol (o hormônio do estresse crônico) tendem a desacelerar. O corpo entende: "Não estamos sendo perseguidos por um tigre-dentes-de-sabre; podemos relaxar os ombros".',
        ],
        callouts: [
          {
            type: 'reframing',
            title: 'Reenquadramento Cognitivo',
            content: 'Pensamento automático: "Eu só posso sorrir quando tudo estiver 100% resolvido na minha vida." -> Perspectiva construtiva: "Se eu esperar a vida ficar perfeita para sorrir, vou morrer com a cara amarrada. O sorriso é o combustível para a jornada, não o troféu de chegada."',
          },
        ],
      },
      {
        heading: 'O superpoder do contágio emocional',
        paragraphs: [
          'Você já reparou no que acontece quando entra em um elevador silencioso, olha para o porteiro ou para um desconhecido e oferece um "bom dia" acompanhado de um sorriso aberto e sincero? Graças aos nossos neurônios-espelho, a reação instintiva da outra pessoa é quase sempre espelhar o mesmo gesto.',
          'Em um mundo cada vez mais acelerado, hiperconectado e simultaneamente solitário, o sorriso virou uma espécie de moeda rara. Ele comunica três coisas primordiais em uma fração de segundo: "Eu vejo você", "Você está seguro perto de mim" e "Não precisamos nos tratar como rivais".',
          'Experimente passar uma semana prestando atenção em quantas vezes você caminha olhando para o chão ou com a testa franzida como se estivesse decifrando o enigma da física quântica. Desarmar o semblante é um ato de generosidade com quem cruza o seu caminho — e o maior beneficiado é você mesmo.',
        ],
        bulletPoints: [
          {
            title: 'Alívio da tensão muscular',
            description: 'Solta a mandíbula (onde a maioria de nós guarda o estresse acumulado das reuniões de segunda-feira).',
          },
          {
            title: 'Aumento da receptividade',
            description: 'Pessoas bem-humoradas são percebidas como 40% mais confiáveis e cooperativas no ambiente profissional.',
          },
          {
            title: 'Quebra do ciclo de ruminação',
            description: 'É biologicamente difícil manter uma espiral de raiva destrutiva no exato segundo em que você sorri de verdade.',
          },
        ],
        callouts: [
          {
            type: 'exercise',
            title: 'Exercício de Reflexão: O Teste do Espelho Matinal',
            content: 'Amanhã, ao escovar os dentes, olhe fixamente nos seus próprios olhos no espelho por dez segundos e dê o seu melhor sorriso. Não um sorriso forçado de comercial de margarina, mas aquele sorriso cúmplice de quem diz: "Tamo junto nessa aventura, meu amigo". Sinta a mudança sutil de energia antes de sair do banheiro.',
          },
        ],
      },
    ],
  },
  {
    id: 'cap2',
    number: 'Capítulo 2',
    title: 'Como Sobreviver à Rotina Sem Perder o Bom Humor',
    subtitle: 'Despertadores cruéis, reuniões que poderiam ser um e-mail e filas de supermercado',
    estimatedMinutes: 6,
    epigraph: {
      phrase: 'Se você pensa que é muito iluminado, tente passar uma semana com sua família ou uma hora no trânsito das seis da tarde.',
      author: 'Adaptado de Ram Dass',
      humorousComment: 'Principalmente quando o carro da frente demora dez segundos para arrancar após o sinal abrir.',
    },
    introDropCap: 'A',
    sections: [
      {
        paragraphs: [
          'A rotina moderna tem o péssimo hábito de se parecer com uma esteira ergométrica programada na velocidade máxima: a gente corre, sua a camisa, cansa as pernas e tem a sensação constante de que não saiu do lugar.',
          'Tudo começa com o carrasco do século XXI: o alarme do celular. Aquele som estridente projetado para acordar tropas em combate. Em seguida vêm os boletos bancários que brotam por geração espontânea na caixa de entrada, a louça na pia que parece se reproduzir durante a noite e aquela mensagem no WhatsApp da equipe: "Alguém tem um minutinho rápido?". Todos nós sabemos que esse "minutinho" nunca dura menos de quarenta minutos de estresse puro.',
          'Como manter a sanidade e o bom humor nesse ecossistema de pressão? A resposta não está em fugir para uma praia deserta no Tibete para vender artesanato (embora a ideia seja tentadora às terças-feiras), mas em mudar os filtros com os quais processamos os pequenos atritos diários.',
        ],
        callouts: [
          {
            type: 'humor',
            title: 'Sorria, mas não perca o juízo!',
            content: 'A paciência é uma virtude que se adquire esperando a pessoa na sua frente no caixa eletrônico tentar imprimir o comprovante de uma operação que ela nem realizou.',
          },
        ],
      },
      {
        heading: 'As 4 Táticas de Sobrevivência Bem-Humorada',
        paragraphs: [
          'Se não podemos eliminar os compromissos, podemos ao menos transformar a maneira como reagimos a eles com estratégias testadas na trincheira da vida real:',
        ],
        bulletPoints: [
          {
            title: '1. O Botão Mental de "Trilha Sonora de Comédia"',
            description: 'Quando alguém começar a dar um show de histeria ou drama desproporcional por um problema minúsculo no trabalho, imagine no fundo da sua cabeça aquela trilha sonora clássica de circo ou do desenho animado dos Trapalhões. É impossível ter medo de uma tempestade quando você a enxerga como uma esquete humorística.',
          },
          {
            title: '2. A Regra do Carrinho Quebrado',
            description: 'No supermercado, você invariavelmente vai pegar aquele carrinho cuja rodinha dianteira puxa teimosamente para a esquerda. Você pode lutar contra ela com raiva, ou rir da sua própria coreografia desajeitada pelos corredores de biscoito.',
          },
          {
            title: '3. Micro-celebrações Invisíveis',
            description: 'Celebre pequenas vitórias secretas: encontrar o par da meia logo de manhã, fechar a tampa da marmita sem vazar molho na mochila ou conseguir atravessar a catraca do metrô no primeiro bipe.',
          },
          {
            title: '4. Trocar o "Por que comigo?" pelo "O que isso rende de história?"',
            description: 'Os piores dias da nossa vida geralmente se tornam as melhores e mais hilárias histórias que contamos em mesas de bar para os amigos alguns meses depois. Antecipe a risada!',
          },
        ],
        callouts: [
          {
            type: 'tip',
            title: 'Dica prática do dia',
            content: 'No trânsito engarrafado, não dispute centímetros com o carro ao lado. Coloque aquela música nostálgica da sua adolescência que você tem vergonha de admitir que gosta e cante no volante sem medo de ser feliz.',
          },
        ],
      },
    ],
  },
  {
    id: 'cap3',
    number: 'Capítulo 3',
    title: 'A Arte de Rir dos Pequenos Desastres da Vida',
    subtitle: 'Trapalhadas cotidianas, vergonhas alheias e a sabedoria da autocompaixão',
    estimatedMinutes: 5,
    epigraph: {
      phrase: 'O ser humano sofre tão terrivelmente no mundo que foi obrigado a inventar o riso.',
      author: 'Friedrich Nietzsche',
      humorousComment: 'E provavelmente Nietzsche pensou nisso logo depois de bater com o dedinho na quina da cômoda de madrugada.',
    },
    introDropCap: 'N',
    sections: [
      {
        paragraphs: [
          'Não há dor mais universal e democrática do que a dor do dedinho do pé colidindo a 10 km/h com o pé de ferro da mesa de centro às três da madrugada. Naquele milésimo de segundo que antecede o impacto e a chegada da informação ao córtex cerebral, você vê toda a história da humanidade passar diante dos seus olhos.',
          'Todos nós somos especialistas em pequenos vexames: acenar calorosamente para alguém na rua achando que era um amigo de infância e descobrir que era um desconhecido horrorizado; enviar um áudio de reclamação do chefe exatamente no grupo onde o chefe está; puxar a porta de vidro que tem uma placa enorme escrita "EMPURRE".',
          'A grande questão é: o que você faz com o seu constrangimento? Pessoas rígidas transformam esses episódios em munição para a autocobrança e a vergonha. Pessoas sábias entendem que a espécie humana é essencialmente trapalhona e desajeitada.',
        ],
      },
      {
        heading: 'Rir de si mesmo: O escudo definitivo',
        paragraphs: [
          'Quando você aprende a rir das suas próprias gafes antes de qualquer outra pessoa, você se torna invulnerável. Ninguém consegue usar o deboche ou a zombaria contra alguém que já está às gargalhadas da própria tolice.',
          'Importante ressaltar: rir de pequenos desastres não significa minimizar dores sérias. Luto, perdas financeiras graves, doenças e injustiças sociais exigem respeito, lamento e ação ética firme. Não confunda humor curativo com deboche cínico ou negação da dor alheia.',
          'A arte consiste em dosar: preserve a sua gravidade para o que realmente tem gravidade; todo o resto (o zíper emperrado, o bolo que solou, o corretor ortográfico que transformou uma mensagem inocente em um escândalo) merece apenas um sorriso de ombros largos.',
        ],
        callouts: [
          {
            type: 'exercise',
            title: 'Exercício de Reflexão: O Museu dos Vexames Pessoais',
            content: 'Lembre-se do maior papelão ou gafe que você já cometeu há mais de três anos. Perceba: você sobreviveu! O planeta continuou girando, ninguém mais lembra daquilo e hoje isso rende uma ótima história. Aplique esse mesmo desconto generoso para as bobeiras que você cometeu hoje.',
          },
        ],
      },
    ],
  },
  {
    id: 'cap4',
    number: 'Capítulo 4',
    title: 'Pensamento Positivo Sem Viver no Mundo da Fantasia',
    subtitle: 'Otimismo realista, inteligência emocional e a coragem de enxergar os fatos',
    estimatedMinutes: 5,
    epigraph: {
      phrase: 'O pessimista se queixa do vento; o otimista espera que ele mude; o realista ajusta as velas.',
      author: 'William Arthur Ward',
      humorousComment: 'E o sujeito bem-humorado aproveita o vento contra para soltar pipa enquanto o barco não se move.',
    },
    introDropCap: 'H',
    sections: [
      {
        paragraphs: [
          'Há uma praga moderna circulando nas redes sociais chamada "positividade tóxica". É aquela obrigação doentia de estar radiante 24 horas por dia, 7 dias por semana, postando frases motivacionais enquanto a casa está pegando fogo. É o sujeito que vê o pneu do carro furar no meio da rodovia deserta sob sol de 40 graus e diz: "Gratidão universo por essa oportunidade de aprendizado mecânico!".',
          'Vamos combinar uma coisa honesta: ter o pneu furado é horrível. Dói, cansa, custa caro e dá raiva. Fingir que não sente raiva não é iluminação espiritual; é recalque emocional que vai se transformar em gastrite ou dor de cabeça mais tarde.',
          'O verdadeiro otimismo — aquele que a psicologia positiva científica de Martin Seligman e Barbara Fredrickson estuda com rigor — não é a ausência de dor, mas a convicção de que você possui recursos internos e externos para atravessar o vendaval.',
        ],
        callouts: [
          {
            type: 'humor',
            title: 'Sorria, mas não perca o juízo!',
            content: 'Se alguém lhe disser "apenas pense positivo que seus boletos se pagarão sozinhos", sorria educadamente e esconda sua carteira, porque essa pessoa provavelmente quer lhe vender um curso duvidoso.',
          },
        ],
      },
      {
        heading: 'O tripé do otimismo realista',
        paragraphs: [
          'Para não cair na armadilha da ilusão nem no pântano do pessimismo crônico, apoie sua mente em três pilares firmes:',
        ],
        bulletPoints: [
          {
            title: '1. Temporalidade ("Isso vai passar")',
            description: 'O pessimista acredita que o problema é eterno. O otimista realista reconhece: dias ruins têm 24 horas como qualquer outro dia, e amanhã o tabuleiro se reorganiza.',
          },
          {
            title: '2. Especificidade ("Não está tudo perdido")',
            description: 'Quando erramos uma tarefa, a mente dramática grita: "Minha vida inteira é um fracasso!". O realista delimita: "Eu errei a planilha de custos de hoje; meu casamento, minha saúde e minhas amizades continuam intactos".',
          },
          {
            title: '3. Ação focada no que está sob seu controle',
            description: 'Você não controla o clima, a cotação do dólar ou o humor do seu chefe. Mas controla 100% da sua resposta emocional e do seu próximo passo.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            title: 'Dica prática do dia',
            content: 'Ao se deparar com uma notícia ruim ou um obstáculo, escreva duas colunas em um pedaço de papel: "Coisas que posso fazer a respeito agora" e "Coisas sobre as quais não tenho nenhum controle". Rasgue a segunda coluna e foque a sua energia exclusivamente na primeira.',
          },
        ],
      },
    ],
  },
  {
    id: 'cap5',
    number: 'Capítulo 5',
    title: 'Pequenos Hábitos, Grandes Mudanças',
    subtitle: 'Rituais de 2 minutos para oxigenar a mente e reencontrar a leveza diária',
    estimatedMinutes: 5,
    epigraph: {
      phrase: 'Nós somos o que fazemos repetidamente. A excelência, portanto, não é um ato, mas um hábito.',
      author: 'Will Durant (sobre Aristóteles)',
      humorousComment: 'E isso vale tanto para praticar meditação quanto para comer brigadeiro de panela escondido na cozinha.',
    },
    introDropCap: 'G',
    sections: [
      {
        paragraphs: [
          'Geralmente imaginamos que transformar nossa vida exige revoluções estrondosas: mudar de país, acordar às 4 da manhã para tomar banho gelado ou correr uma maratona descalço. Mas a felicidade sustentável não é construída em eventos olímpicos; ela se esconde nas dobras da simplicidade.',
          'Nosso humor diário é o resultado acumulado de microdecisões que tomamos sem perceber. Tomar um café sentado apreciando o aroma em vez de engoli-lo correndo na frente de uma tela cheia de e-mails já altera radicalmente o tônus simpático do corpo.',
          'Abaixo estão seis hábitos simples, sem custo e acessíveis para injetar ar fresco na sua rotina imediatamente:',
        ],
      },
      {
        heading: '6 Hábitos Antiestresse Para Praticar Hoje',
        bulletPoints: [
          {
            title: '1. A Micropausa do Suspiro Fisiológico',
            description: 'A cada 90 minutos de trabalho focado, inspire duas vezes seguidas pelo nariz (uma longa e uma curta complementar) e solte o ar suavemente pela boca. Duas repetições acalmam o ritmo cardíaco de forma imediata.',
          },
          {
            title: '2. A Caminhada Sem Destino Nem Fones',
            description: 'Caminhe 10 minutos ao redor do quarteirão observando árvores, cachorros passeando e o desenho das nuvens. Deixe o celular no bolso. Permita que seus olhos descansem do brilho das telas.',
          },
          {
            title: '3. A "Playlist do Bom Humor Involuntário"',
            description: 'Crie uma lista com 10 músicas que têm o poder de fazer você bater o pé no chão ou sorrir sem perceber. Use-a como remédio de emergência para dias cinzentos.',
          },
          {
            title: '4. Gratidão Pelas Banalidades Úteis',
            description: 'Em vez de agradecer apenas pelas grandes conquistas anuais, agradeça pelo chuveiro com água quente, pela internet funcionando ou pelo travesseiro macio no fim do dia.',
          },
          {
            title: '5. A Regra do Elogio Diário Espontâneo',
            description: 'Faça um elogio sincero e gratuito a alguém por dia. "Gostei da sua energia hoje", "Seu trabalho naquele projeto foi impecável". Fazer o outro sorrir gera um eco imediato dentro de nós.',
          },
          {
            title: '6. Cinco Minutos de Silêncio Sagrado',
            description: 'Antes de dormir, fique 5 minutos no escuro sem celular, sem notícias e sem planos. Apenas preste atenção na respiração e agradeça ao seu corpo por ter aguentado mais um dia de luta.',
          },
        ],
        callouts: [
          {
            type: 'exercise',
            title: 'Exercício de Reflexão: O Inventário das Miudezas',
            content: 'Cite agora, mentalmente ou anotando no seu caderno, três coisas completamente bobas que lhe deram prazer nas últimas 24 horas. Pode ser a mordida em um pão na chapa crocante, o cheiro de grama cortada ou aquela mensagem engraçada de um amigo.',
          },
        ],
      },
    ],
  },
  {
    id: 'cap6',
    number: 'Capítulo 6',
    title: 'O Sorriso nos Relacionamentos',
    subtitle: 'Empatia, humor afetuoso e como conviver em harmonia sem ser o chato da turma',
    estimatedMinutes: 6,
    epigraph: {
      phrase: 'Seja gentil, pois cada pessoa que você encontra está travando uma batalha difícil.',
      author: 'Ian Maclaren',
      humorousComment: 'E algumas estão travando essa batalha com a impressora do escritório, o que é duplamente traumatizante.',
    },
    introDropCap: 'Q',
    sections: [
      {
        paragraphs: [
          'Quase todos os nossos maiores momentos de êxtase — e também as nossas maiores dores de cabeça — envolvem outras pessoas. Viver em sociedade é a arte de negociar egos, manias, diferenças de ritmo e temperamentos em constante fricção.',
          'Existe um tipo de humor que afasta: o sarcasmo ácido que humilha, a piada maldosa que expõe o defeito do colega e o deboche que tenta diminuir o outro para parecer superior. Esse não é o humor do sorriso; é o humor da insegurança disfarçada de esperteza.',
          'O humor genuíno é caloroso. É aquele que inclui, que acolhe a vulnerabilidade de todos nós e que diz nas entrelinhas: "Nenhum de nós aqui sabe exatamente o que está fazendo, e tudo bem estarmos aprendendo juntos".',
        ],
      },
      {
        heading: 'Como usar a leveza como ponte nas relações',
        paragraphs: [
          'Quando você aborda uma conversa difícil ou um conflito de opiniões com gentileza prévia e semblante desarmado, a resistência do interlocutor despenca pela metade:',
        ],
        bulletPoints: [
          {
            title: 'Escuta Ativa com os Olhos',
            description: 'Não escute apenas esperando a sua vez de falar para rebater. Olhe nos olhos, acene e demonstre que a presença daquela pessoa importa naquele instante.',
          },
          {
            title: 'Desarmar Tensões Domésticas com Ternura',
            description: 'Em vez de iniciar a terceira guerra mundial porque a toalha molhada ficou sobre a cama, use o bom humor como primeiro aviso. A raiva desgasta o amor; o bom humor educa sem ferir.',
          },
          {
            title: 'A Graça de Compartilhar Risos',
            description: 'Casais e amigos que dão risada juntos das mesmas bobeiras têm laços afetivos comprovadamente mais duradouros e resilientes às crises da vida.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            title: 'Dica prática do dia',
            content: 'Ao chegar em casa hoje ou ao encontrar seu parceiro, filho ou amigo, resista à tentação imediata de descarregar a lista de reclamações do dia de trabalho. Abrace, sorria e pergunte com carinho: "O que de melhor aconteceu com você hoje?".',
          },
        ],
      },
    ],
  },
  {
    id: 'cap7',
    number: 'Capítulo 7',
    title: 'Como Manter a Leveza nos Dias Difíceis',
    subtitle: 'Quando o choro vem, quando o cansaço pesa e a coragem de pedir colo',
    estimatedMinutes: 6,
    epigraph: {
      phrase: 'Mesmo a noite mais escura terminará e o sol nascerá.',
      author: 'Victor Hugo',
      humorousComment: 'Mas enquanto ele não nasce, um cobertor aconchegante e um bom chá ajudam bastante a aguentar o frio.',
    },
    introDropCap: 'H',
    sections: [
      {
        paragraphs: [
          'Há dias em que a vida bate forte. Não com pequenas chatices cotidianas como café derramado, mas com golpes reais: o diagnóstico médico preocupante, o fim de um relacionamento de anos, a demissão inesperada, a saudade insuportável de quem já partiu.',
          'Nesses momentos, exigir de si mesmo um sorriso é uma violência emocional imperdoável. A tristeza tem função biológica e afetiva: ela nos recolhe, diminui o ritmo do nosso corpo e nos obriga a processar a perda e o significado das coisas.',
          'Chorar não é fraqueza; é a faxina interna da alma. As lágrimas contêm prolactina e hormônios adrenocorticotróficos que ajudam a eliminar toxinas geradas pelo estresse emocional intenso.',
        ],
        callouts: [
          {
            type: 'reframing',
            title: 'Acolhimento da Realidade',
            content: 'Você não precisa estar bem o tempo todo. Ninguém é feito de aço. Aceitar a própria tristeza e permitir-se descansar é o primeiro passo para que o sorriso genuíno possa florescer novamente no futuro.',
          },
        ],
      },
      {
        heading: 'Onde encontrar a leveza em meio à tempestade',
        paragraphs: [
          'Mesmo no olho do furacão, manter a leveza não significa rir da tragédia, mas recusar-se a endurecer o coração contra o mundo. Significa lembrar-se:',
        ],
        bulletPoints: [
          {
            title: 'Pedir ajuda é sinal de coragem',
            description: 'Fale com amigos de confiança, procure auxílio psicológico profissional e não carregue o peso do mundo sozinho nos ombros.',
          },
          {
            title: 'Reduzir as exigências ao mínimo essencial',
            description: 'Nos dias cinzentos, sua única obrigação é respirar, alimentar-se e manter-se seguro. Cancele compromissos não urgentes sem culpa.',
          },
          {
            title: 'Buscar as ilhas de consolo',
            description: 'Um filme aconchegante, um banho demorado, o carinho do seu animal de estimação ou a leitura de um bom livro são refúgios legítimos.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            title: 'Dica prática do dia',
            content: 'Se hoje é um dia terrivelmente pesado para você, não tente resolver toda a sua biografia. Resolva apenas a próxima hora. Diga a si mesmo: "Nas próximas 60 minutos, vou apenas descansar meu coração".',
          },
        ],
      },
    ],
  },
  {
    id: 'cap8',
    number: 'Capítulo 8',
    title: 'O Desafio dos 7 Dias do Sorriso',
    subtitle: 'Um plano prático de uma semana para reconfigurar seus circuitos mentais de alegria',
    estimatedMinutes: 7,
    epigraph: {
      phrase: 'Uma jornada de mil milhas começa com um único passo.',
      author: 'Lao Tsé',
      humorousComment: 'E de preferência com um calçado confortável, para não dar bolha no pé no primeiro quilômetro.',
    },
    introDropCap: 'C',
    sections: [
      {
        paragraphs: [
          'Chegou o momento de transformar a teoria e a inspiração em ação prática. Um hábito não se constrói apenas lendo palavras bonitas, mas exercitando a musculatura emocional no campo de batalha da rotina.',
          'Criamos o **Desafio dos 7 Dias do Sorriso**: sete pequenas missões diárias, simples, sem nenhum custo financeiro, mas com potencial gigantesco para reorientar a sua atenção para o lado mais luminoso e divertido da vida.',
          'Você pode registrar suas reflexões, aprendizados e sentimentos diretamente no diário interativo integrado deste e-book. Ao final da semana, você poderá exportar e guardar o seu registro pessoal em PDF como um lembrete do seu progresso.',
        ],
      },
    ],
  },
  {
    id: 'cap9',
    number: 'Capítulo 9',
    title: 'Sua Rotina Mais Leve: Um Plano Para Continuar',
    subtitle: 'Como desenhar manhãs, tardes e noites serenas mesmo quando o tempo é escasso',
    estimatedMinutes: 5,
    epigraph: {
      phrase: 'A simplicidade é o último grau de sofisticação.',
      author: 'Leonardo da Vinci',
      humorousComment: 'E também a única maneira de não surtar com uma agenda lotada de compromissos que você não queria ter marcado.',
    },
    introDropCap: 'P',
    sections: [
      {
        paragraphs: [
          'O maior perigo após ler um livro inspirador é o chamado "efeito foguete de festa junina": você sobe aos céus cheio de brilho e entusiasmo na segunda-feira, mas na quarta-feira despenca de volta na correria de sempre.',
          'Para que a leveza se torne um estilo de vida permanente e não apenas uma faísca passageira, você precisa de um plano flexível. Planos rígidos quebram no primeiro imprevisto; planos maleáveis dobram-se com o vento como o bambu.',
        ],
      },
      {
        heading: 'O Roteiro da Leveza em Três Tempos (Versão Flexível de 5 a 15 Minutos)',
        bulletPoints: [
          {
            title: '1. Manhã — O Ritual da Partida Gentil (5 a 10 min)',
            description: 'Nada de abrir redes sociais ou notícias trágicas nos primeiros 10 minutos após acordar. Beba um copo cheio de água, alongue os braços, olhe a luz do dia pela janela e defina a palavra de intenção do seu dia (ex.: "Paciência", "Humor", "Calma").',
          },
          {
            title: '2. Tarde — O Ponto de Equilíbrio (2 a 5 min)',
            description: 'No meio do expediente, faça uma pausa consciente. Levante da cadeira, respire fundo, dê uma risada de algum detalhe engraçado e tome água. Não deixe o estresse acumular até virar exaustão.',
          },
          {
            title: '3. Noite — A Desaceleração e a Gratidão (5 a 10 min)',
            description: 'Diminua as luzes da casa 1 hora antes de dormir. Anote no seu diário mental ou físico três coisas boas que aconteceram hoje, por mais simples que tenham sido. Entregue o dia com a certeza de que você fez o melhor que pôde com os recursos que tinha.',
          },
        ],
        callouts: [
          {
            type: 'humor',
            title: 'Sorria, mas não perca o juízo!',
            content: 'Se em algum dia a sua rotina perfeita for para o espaço e você acabar comendo pizza fria na frente da TV às 22h, não se culpe. Sorria, curta a pizza e recomece com tranquilidade no dia seguinte.',
          },
        ],
      },
    ],
  },
  {
    id: 'conclusion',
    number: 'Conclusão',
    title: 'A Vida Não Precisa Ser Perfeita Para Ter Momentos Felizes',
    subtitle: 'A beleza da imperfeição, a leveza possível e o seu sorriso como bússola',
    estimatedMinutes: 4,
    epigraph: {
      phrase: 'Há uma rachadura em tudo. É assim que a luz entra.',
      author: 'Leonard Cohen',
      humorousComment: 'E se a rachadura for na parede da sala, aproveite para pendurar um belo quadro por cima!',
    },
    introDropCap: 'S',
    sections: [
      {
        paragraphs: [
          'Se você chegou até aqui, uma coisa é certa: você não está em busca de fórmulas mágicas nem de mentiras açucaradas. Você sabe que a vida real continuará trazendo surpresas, desafios, prazos apertados e pessoas mal-humoradas pelo caminho.',
          'Mas algo sutil e profundo mudou dentro de você. Você agora sabe que o seu sorriso não depende da perfeição do mundo exterior. Ele nasce da sua decisão soberana de não levar a si mesmo e aos pequenos tropeços a ferro e fogo.',
          'A vida não precisa ser impecável para ser linda. As melhores gargalhadas acontecem quando as coisas dão ligeiramente errado e nós decidimos abraçar a nossa humanidade imperfeita. Quando aprendemos a rir das nossas fraquezas, nos tornamos livres de verdade.',
          'Que a partir de hoje você carregue o seu sorriso não como uma obrigação, mas como uma bússola de serenidade. Que você sorria para o espelho, para o porteiro, para o motorista de ônibus, para quem você ama e, principalmente, para si mesmo quando cometer um deslize.',
          'Afinal, a vida é uma passagem curta demais para ser vivida com a testa franzida. Sorria — o mundo fica infinitamente mais bonito quando você faz isso.',
        ],
      },
    ],
  },
  {
    id: 'bonus-reasons',
    number: 'Bônus Especial',
    title: '30 Pequenas Razões Cotidianas Para Sorrir',
    subtitle: 'Pequenos milagres comuns e delícias discretas que tornam a existência mágica',
    estimatedMinutes: 5,
    introDropCap: 'V',
    sections: [
      {
        paragraphs: [
          'Grandes felicidades são raras e espaçadas no calendário: a formatura, o casamento, aquela viagem dos sonhos. Mas a vida do dia a dia é tecida com miudezas. Para nunca mais dizer que não tem motivos para sorrir, guarde esta lista no bolso:',
        ],
      },
    ],
  },
  {
    id: 'references',
    number: 'Apêndice',
    title: 'Referências & Leituras Recomendadas',
    subtitle: 'Fundamentação científica, autores e obras para quem deseja se aprofundar',
    estimatedMinutes: 3,
    introDropCap: 'E',
    sections: [
      {
        paragraphs: [
          'Para garantir que as reflexões deste e-book combinem inspiração com credibilidade científica sólida, apoiamo-nos em estudos consolidados da psicologia e neurociência:',
        ],
        bulletPoints: [
          {
            title: 'Barbara Fredrickson (2001, 2009)',
            description: 'Teoria da Ampliação e Construção (Broaden-and-Build) das Emoções Positivas — comprova como o afeto positivo expande o repertório de pensamento-ação e gera recursos duradouros.',
          },
          {
            title: 'Daniel Kahneman (2011)',
            description: '"Rápido e Devagar: Duas Formas de Pensar" — arquitetura cognitiva do Sistema 1 e Sistema 2, mostrando como o humor e a facilidade cognitiva reduzem a ansiedade de decisão.',
          },
          {
            title: 'Martin Seligman (2002, 2011)',
            description: 'Modelo PERMA e Psicologia Positiva Autêntica — diferenciação crucial entre prazer hedônico raso e florescimento emocional com propósito.',
          },
          {
            title: 'Tara Kraft & Sarah Pressman (2012)',
            description: 'Psychological Science: "Grin and Bear It: The Influence of Manipulated Facial Expression on the Stress Response" — demonstração empírica da redução dos batimentos cardíacos após tarefas estressantes sob sorriso induzido.',
          },
          {
            title: 'Fritz Strack, Leonard Martin & Sabine Stepper (1988) & Reavaliações Contemporâneas',
            description: 'A hipótese do feedback facial e os limites das vias de retroalimentação somato-sensoriais no processamento emocional.',
          },
        ],
      },
    ],
  },
];

export const THIRTY_REASONS: string[] = [
  'Achar uma nota de vinte reais perdida no bolso de um casaco de inverno.',
  'O cheiro inebriante de café fresco passado na hora de manhã cedo.',
  'O barulho da chuva caindo no teto enquanto você está aquecido debaixo do edredom.',
  'A sensação libertadora de tirar os sapatos apertados após um longo dia de trabalho.',
  'Seu cachorro ou gato recebendo você na porta como se você fosse a criatura mais incrível do universo.',
  'Quando o semáforo que estava vermelho abre no exato segundo em que você ia desacelerar.',
  'O primeiro gole de água bem gelada em um dia escaldante de verão.',
  'A mordida na pontinha crocante do pão francês ainda quentinho da padaria.',
  'Receber uma mensagem despretensiosa de alguém dizendo: "Lembrei de você e vim ver como você está".',
  'Dar aquela gargalhada tão profunda que a barriga dói e não sai nem som.',
  'Achar um estacionamento vago e perfeito bem na frente de onde você precisava ir.',
  'Cantar a sua música favorita no chuveiro fingindo que está no Rock in Rio.',
  'A sensação gostosa de deitar em uma cama com lençóis limpos e cheirosos.',
  'Ver uma criança rindo descontroladamente por uma bobagem qualquer na fila do banco.',
  'Aquele momento em que você fecha todas as abas do navegador após concluir um trabalho difícil.',
  'Descobrir que a série maravilhosa que você adora tem uma nova temporada disponível.',
  'O aroma da terra molhada logo após a primeira pancada de chuva (o famoso petricor).',
  'Acordar assustado achando que é segunda-feira e perceber com alívio que ainda é sábado.',
  'Ganhar um abraço demorado e sincero que encaixa exatamente onde doía.',
  'Achar a tampa exata do pote plástico no primeiro teste dentro do armário.',
  'Ouvir por acaso no rádio uma canção que você amava na infância e não ouvia há anos.',
  'Comer aquela sobremesa que lembra a casa da sua avó com gosto de afeto.',
  'Quando um bebê olha para você no metrô e abre um sorriso de banguelo sem nenhum dente.',
  'Perceber que um problema que tirava seu sono há seis meses hoje não tem a menor importância.',
  'A sensação da brisa do mar batendo no rosto no final da tarde.',
  'Ajudar um estranho a carregar uma sacola pesada e receber um "Deus te abençoe" sincero.',
  'Terminar de ler um livro extraordinário e ficar alguns minutos abraçado com a capa.',
  'Quando a bateria do celular estava em 1% e você consegue plugar no carregador no último segundo.',
  'Lembrar de uma piada interna antiga que só você e seu melhor amigo entendem.',
  'Estar vivo, respirando, consciente e com mais um dia inteirinho pela frente para recomeçar.',
];

export const SEVEN_DAYS_CHALLENGE: DayChallenge[] = [
  {
    day: 1,
    title: 'Intenção Matinal e Desarmamento',
    theme: 'Comece a manhã com uma intenção positiva e um sorriso consciente',
    instruction:
      'Antes de tocar no celular, sente-se na cama por 60 segundos. Respire fundo três vezes e declare mentalmente: "Hoje eu escolho a leveza diante do que não posso controlar". Olhe no espelho e dê um sorriso de boas-vindas a si mesmo.',
    practicalExample:
      'Mesmo que o café derrame ou a pasta de dente caia na pia, não amaldiçoe o dia. Sorria e diga: "Isso é só um detalhe cômico da rotina".',
    promptQuestion: 'Como foi começar a manhã sem a correria do celular? O que você sentiu ao sorrir conscientemente no espelho?',
  },
  {
    day: 2,
    title: 'O Estímulo da Risada Genuína',
    theme: 'Faça algo que provoque uma gargalhada ou risada franca',
    instruction:
      'Reserve 15 minutos do seu dia para o riso descompromissado. Assista a uma cena hilária de comédia, ligue para aquele amigo engraçado ou relembre um mico homérico que você passou no passado.',
    practicalExample:
      'Procure vídeos de animais trapalhões, stand-up de qualidade ou leia tirinhas de humor inteligente. Permita-se rir alto sem vergonha.',
    promptQuestion: 'O que fez você rir hoje? Como a gargalhada alterou a sensação de tensão no seu corpo e nos seus pensamentos?',
  },
  {
    day: 3,
    title: 'O Gesto de Gentileza Invisível',
    theme: 'Pratique um ato gentil sem esperar elogio ou aplauso',
    instruction:
      'Realize um gesto carinhoso com alguém sem alarde: dê passagem no trânsito com um sorriso amigável, elogie sinceramente o garçom ou a faxineira, deixe um bilhetinho carinhoso para alguém.',
    practicalExample:
      'Olhe nos olhos da pessoa que lhe atende no balcão da padaria, chame-a pelo nome escrito no crachá e deseje um dia abençoado com um sorriso nos olhos.',
    promptQuestion: 'Qual foi o gesto de gentileza que você praticou? Como o outro reagiu e como isso fez você se sentir?',
  },
  {
    day: 4,
    title: 'Garimpeiro de Coisas Boas',
    theme: 'Encontre o extraordinário escondido em um dia absolutamente comum',
    instruction:
      'Durante as tarefas automáticas do dia, ative o "modo detetive de bênçãos". Encontre pelo menos cinco detalhes deliciosos que você costuma ignorar na rotina.',
    practicalExample:
      'O sabor do almoço, o ar-condicionado fresco, a cor das folhas de uma árvore na rua, a água quente escorrendo nas costas no banho.',
    promptQuestion: 'Quais foram as 5 pequenas coisas boas que você garimpou hoje? Qual delas mais surpreendeu o seu coração?',
  },
  {
    day: 5,
    title: 'Pausa Restauradora de Autocuidado',
    theme: 'Presenteie-se com uma pausa exclusiva para recarregar sua bateria',
    instruction:
      'Pare por 20 minutos durante a tarde ou noite exclusivamente para você. Sem obrigações, sem telas de trabalho, sem fazer favores para ninguém. Apenas descanse com carinho.',
    practicalExample:
      'Um chá quentinho em silêncio, ouvir sua música favorita de olhos fechados, ler um capítulo deste e-book em uma poltrona confortável ou um banho sem pressa.',
    promptQuestion: 'O que você fez durante o seu momento de autocuidado? Foi fácil ou difícil se permitir parar sem sentir culpa?',
  },
  {
    day: 6,
    title: 'Compartilhando a Leveza',
    theme: 'Espalhe bom humor e conecte-se de verdade com alguém querido',
    instruction:
      'Entre em contato com uma pessoa especial (familiar, amigo de infância ou colega querido) apenas para lembrá-la de um momento divertido que viveram juntos.',
    practicalExample:
      'Mande uma foto antiga engraçada, compartilhe uma piada carinhosa ou relembre uma viagem onde tudo deu errado e vocês morreram de rir.',
    promptQuestion: 'Com quem você compartilhou esse momento divertido? Qual foi a sensação de reviver essa cumplicidade?',
  },
  {
    day: 7,
    title: 'A Retrospectiva da Leveza',
    theme: 'Avalie sua semana e celebre sua nova postura emocional',
    instruction:
      'Revise os últimos 7 dias. Compare como você reagia aos pequenos estresses na semana passada e como você lidou com os imprevistos ao longo deste desafio.',
    practicalExample:
      'Releia suas anotações anteriores no diário deste e-book. Reconheça que a sua vida não ficou mágica, mas a sua forma de encará-la ficou muito mais leve e generosa.',
    promptQuestion: 'Qual foi a principal lição desta semana? O que você vai levar definitivamente para a sua vida a partir de agora?',
  },
];
