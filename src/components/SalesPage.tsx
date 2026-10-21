import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Clock, 
  HelpCircle, 
  Smile, 
  Heart, 
  Calendar, 
  BookOpen, 
  Zap, 
  ChevronDown, 
  Flame,
  Award,
  Users,
  Lock,
  Gift
} from 'lucide-react';
import { ReaderTheme } from '../types';

interface SalesPageProps {
  onOpenCheckout: () => void;
  onPreviewBook: () => void;
  theme: ReaderTheme;
}

export const SalesPage: React.FC<SalesPageProps> = ({
  onOpenCheckout,
  onPreviewBook,
  theme,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const isDark = theme === 'dark';

  const faqs = [
    {
      q: 'Como vou receber o meu acesso após o pagamento?',
      a: 'O acesso é imediato! Assim que o seu pagamento for confirmado (no PIX ou Cartão é na hora), você terá acesso instantâneo ao e-book interativo, à ferramenta do Diário de 7 Dias e à opção de baixar em PDF.',
    },
    {
      q: 'Funciona no celular, tablet e computador?',
      a: 'Sim! O leitor foi desenvolvido com tecnologia de ponta responsiva. Você pode ler no smartphone, tablet ou computador, com ajuste de tamanho de fonte e suporte a tema noturno confortável.',
    },
    {
      q: 'Tenho uma rotina muito corrida, vou conseguir colocar em prática?',
      a: 'Com certeza! Os capítulos são curtos, objetivos e envolventes (levam de 4 a 6 minutos cada). O plano de rotina inclui versões de apenas 5 a 15 minutos diários para quem tem pouco tempo.',
    },
    {
      q: 'Isso é mais um daqueles livros de positividade forçada?',
      a: 'Definitivamente não. O livro combate abertamente a "positividade tóxica". Reconhecemos que a dor, o cansaço e os problemas são reais. O objetivo é dar a você ferramentas de inteligência emocional e bom humor para não surtar com os pequenos desastres cotidianos.',
    },
    {
      q: 'E se eu não gostar ou achar que não serviu para mim?',
      a: 'Você está 100% protegido pela nossa Garantia Blindada de 7 Dias. Se você ler e não sentir seus dias mais leves, basta nos enviar um e-mail e devolveremos cada centavo do seu dinheiro. Sem perguntas e sem ressentimentos.',
    },
  ];

  return (
    <div className={`w-full overflow-hidden transition-colors ${
      isDark ? 'bg-[#121214] text-white' : 'bg-[#FAF7F2] text-stone-900'
    }`}>
      
      {/* Top Urgent Ribbon */}
      <div className="bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm">
        <Flame className="w-4 h-4 fill-amber-200 text-amber-200 animate-bounce" />
        <span>CONDIÇÃO ESPECIAL DE LANÇAMENTO: 70% DE DESCONTO + 5 BÔNUS EXCLUSIVOS</span>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        {/* Subtle glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-radial from-amber-500/15 via-amber-300/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Social Proof Star Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-6">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span>Mais de 1.420 leitores satisfeitos em todo o Brasil</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-editorial-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] mb-6 text-balance">
          Como Parar de Engolir Estresse e Enfrentar a Rotina com Mais <span className="text-amber-600 dark:text-amber-400 underline decoration-amber-500/30">Leveza e Bom Humor</span>
        </h1>

        {/* Subtitle */}
        <p className="font-editorial-serif text-lg sm:text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
          O guia definitivo para desarmar os pequenos desastres do cotidiano, rir das trapalhadas humanas e viver dias mais serenos — sem positividade tóxica ou ilusões cor-de-rosa.
        </p>

        {/* Big CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-base sm:text-lg shadow-xl shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-3 group"
          >
            <span>QUERO GARANTIR MEU ACESSO COM 70% OFF</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={onPreviewBook}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-stone-300 dark:border-zinc-700 hover:bg-black/5 dark:hover:bg-white/5 text-stone-700 dark:text-stone-300 font-medium text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Ver Prévia do Livro</span>
          </button>
        </div>

        {/* Security badges below hero */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500 dark:text-stone-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Garantia Incondicional de 7 Dias
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" />
            Acesso Imediato no Celular ou PC
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-stone-400" />
            Pagamento 100% Criptografado
          </span>
        </div>
      </section>

      {/* SECTION: PAIN POINTS (IDENTIFICATION) */}
      <section className="py-16 px-4 sm:px-6 bg-stone-100/70 dark:bg-zinc-900/50 border-y border-stone-200/80 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400">
              Você já se sentiu assim?
            </span>
            <h2 className="font-editorial-display text-2xl sm:text-4xl font-bold mt-2">
              A sensação de que a vida virou uma lista infinita de cobranças
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1F] border border-stone-200 dark:border-zinc-800 space-y-2">
              <span className="text-rose-500 font-bold text-lg block">❌ O Despertador Terrorista</span>
              <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Você acorda cansado, já calculando mentalmente quantos problemas tem para apagar até o final do dia, antes mesmo de pôr os pés fora da cama.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1F] border border-stone-200 dark:border-zinc-800 space-y-2">
              <span className="text-rose-500 font-bold text-lg block">❌ O Efeito "Pavio Curto"</span>
              <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Um café derramado, uma fechada no trânsito ou um colega desatento têm o poder de arruinar o seu humor pelas próximas 8 horas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1F] border border-stone-200 dark:border-zinc-800 space-y-2">
              <span className="text-rose-500 font-bold text-lg block">❌ A Mente Que Não Desliga</span>
              <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Na hora de dormir, o corpo pede trégua, mas a sua cabeça começa a reprisar todas as conversas do dia e antecipar catástrofes de amanhã.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1F] border border-stone-200 dark:border-zinc-800 space-y-2">
              <span className="text-rose-500 font-bold text-lg block">❌ A Culpa por Não Estar Radiante</span>
              <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                As redes sociais cobram gratidão incondicional 24h por dia, fazendo você se sentir inadequado por simplesmente estar exausto.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
            <h3 className="font-editorial-serif text-lg font-bold text-amber-900 dark:text-amber-200 mb-1">
              Respira fundo: você não está quebrado e não é o único.
            </h3>
            <p className="font-editorial-serif text-sm text-stone-700 dark:text-stone-300 max-w-xl mx-auto">
              A verdade é que ninguém nos ensinou a lidar com as trapalhadas da vida moderna. Mas existe um caminho mais suave — e ele começa com um sorriso consciente.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: THE TRANSFORMATION & WHAT YOU WILL DISCOVER */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400">
            A Virada de Chave
          </span>
          <h2 className="font-editorial-display text-3xl sm:text-4xl font-bold mt-2">
            O Que Este Livro Vai Fazer Pela Sua Mente e Pela Sua Rotina
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-[#1C1C1F] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-editorial-display text-lg font-bold">Blindagem Emocional Realista</h3>
            <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Aprenda a diferenciar o que é tragédia real do que é apenas café derramado. Economize 80% da sua energia nervosa diária.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-[#1C1C1F] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-editorial-display text-lg font-bold">O Desafio Prático dos 7 Dias</h3>
            <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Um passo a passo diário com diário interativo integrado para reconfigurar seus circuitos mentais de gratidão e leveza.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-[#1C1C1F] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-600 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-editorial-display text-lg font-bold">Humor Que Conecta Pessoas</h3>
            <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Use a gentileza desarmadora para melhorar casamentos, relações familiares e transformar o ambiente de trabalho sem atritos.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: COMPLETE OFFER STACK */}
      <section className="py-20 px-4 sm:px-6 bg-linear-to-b from-stone-100 to-amber-500/10 dark:from-zinc-900/60 dark:to-zinc-900 border-t border-stone-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Gift className="w-4 h-4" />
              <span>Pacote Completo e Exclusivo</span>
            </div>
            <h2 className="font-editorial-display text-3xl sm:text-4xl font-bold">
              Veja Tudo o Que Você Recebe Hoje ao Garantir Seu Acesso:
            </h2>
          </div>

          {/* Stack list */}
          <div className="rounded-3xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-[#1C1C1F] p-6 sm:p-10 shadow-xl space-y-6">
            
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-inherit">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-display font-bold text-base sm:text-lg">
                    Livro Digital Integral "O Poder do Sorriso"
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                    9 capítulos desenvolvidos, introdução, conclusão e referências científicas completas.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-stone-500 line-through shrink-0">
                R$ 67,00
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 pb-4 border-b border-inherit">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-display font-bold text-base sm:text-lg">
                    Bônus #1: O Diário Interativo do Desafio dos 7 Dias
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                    Plataforma com caderno de notas embutido e salvamento automático das suas reflexões.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 shrink-0">
                GRÁTIS (R$ 47,00)
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 pb-4 border-b border-inherit">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-display font-bold text-base sm:text-lg">
                    Bônus #2: Guia das 30 Pequenas Razões Cotidianas para Sorrir
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                    Com ferramenta de sorteio aleatório diário e salvamento de favoritos.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 shrink-0">
                GRÁTIS (R$ 29,00)
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 pb-4 border-b border-inherit">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-display font-bold text-base sm:text-lg">
                    Bônus #3: Manual da Rotina Leve em Três Tempos
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                    Roteiro matinal, vespertino e noturno de 5 a 15 minutos para dias corridos.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 shrink-0">
                GRÁTIS (R$ 37,00)
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 pb-4 border-b border-inherit">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-display font-bold text-base sm:text-lg">
                    Bônus #4: Leitor Digital Moderno com 4 Temas & Modo Noturno
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                    Ajuste de fonte, letras brancas de alto contraste e navegação por teclado.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 shrink-0">
                GRÁTIS (R$ 39,00)
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-display font-bold text-base sm:text-lg">
                    Bônus #5: Versão em PDF Diagramada em Alta Definição para Impressão
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                    Pronta para imprimir ou salvar no Kindle, tablet ou computador.
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 shrink-0">
                GRÁTIS (R$ 27,00)
              </span>
            </div>

            {/* Price Box */}
            <div className="pt-6 border-t-2 border-dashed border-stone-200 dark:border-zinc-800 text-center space-y-4">
              <div className="text-stone-400 text-sm">
                Valor Total de Tudo Somado: <span className="line-through">R$ 246,00</span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400 block mb-1">
                  Hoje Por Apenas:
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-stone-500">R$</span>
                  <span className="text-4xl sm:text-6xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    37,90
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-500">à vista</span>
                </div>
                <span className="text-xs text-stone-500 block mt-1">
                  ou em até <strong>4x de R$ 9,98</strong> sem juros (menos de R$ 1,30 por dia!)
                </span>
              </div>

              <button
                onClick={onOpenCheckout}
                className="w-full py-4 sm:py-5 rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-lg sm:text-xl shadow-xl shadow-emerald-600/30 transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span>SIM, QUERO MINHA ROTINA MAIS LEVE AGORA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <p className="text-[11px] text-stone-400">
                Acesso imediato e vitalício. Sem cobranças mensais. Pagamento único.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: TESTIMONIALS (SOCIAL PROOF) */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400">
            Quem Leu e Aplicou
          </span>
          <h2 className="font-editorial-display text-3xl sm:text-4xl font-bold mt-2">
            Histórias de Pessoas Que Trocaram o Mau Humor Pela Leveza
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-[#1C1C1F] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-editorial-serif text-sm text-stone-700 dark:text-stone-300 italic leading-relaxed">
                "Eu vivia explodindo com meus filhos e meu marido por qualquer besteira. O capítulo 3 sobre rir das trapalhadas me fez chorar de rir e me enxergar de fora. Minha casa está com um clima muito mais leve."
              </p>
            </div>
            <div>
              <strong className="block text-sm font-bold text-stone-900 dark:text-white">Mariana Fagundes</strong>
              <span className="text-xs text-stone-500">Belo Horizonte, MG · Mãe e Advogada</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-[#1C1C1F] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-editorial-serif text-sm text-stone-700 dark:text-stone-300 italic leading-relaxed">
                "Trabalho com TI sob pressão absurda. O Desafio dos 7 Dias me salvou de um princípio de burnout. O livro não é bobo nem piegas, é inteligente e muito divertido. Valeu cada centavo."
              </p>
            </div>
            <div>
              <strong className="block text-sm font-bold text-stone-900 dark:text-white">Rodrigo Mendes</strong>
              <span className="text-xs text-stone-500">São Paulo, SP · Gerente de Projetos</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-[#1C1C1F] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-editorial-serif text-sm text-stone-700 dark:text-stone-300 italic leading-relaxed">
                "A lista das 30 razões para sorrir é maravilhosa! Salvei nos favoritos do celular e quando o dia parece horrível eu abro para ler. É um verdadeiro remédio sem contraindicação."
              </p>
            </div>
            <div>
              <strong className="block text-sm font-bold text-stone-900 dark:text-white">Clara Valente</strong>
              <span className="text-xs text-stone-500">Curitiba, PR · Professora</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: 7-DAY GUARANTEE */}
      <section className="py-16 px-4 sm:px-6 bg-amber-500/10 dark:bg-zinc-900/80 border-y border-amber-500/20">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-24 h-24 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-12 h-12 text-amber-600 dark:text-amber-400" />
          </div>

          <div className="space-y-2">
            <h3 className="font-editorial-display text-2xl font-bold text-stone-900 dark:text-white">
              Garantia Blindada de Satisfação: 7 Dias de Risco Zero
            </h3>
            <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              O risco é 100% nosso. Adquira o e-book, leia os capítulos, faça o desafio dos 7 dias. Se por qualquer motivo você achar que o conteúdo não valeu a pena, basta nos enviar um único e-mail e estornaremos 100% do valor pago. Sem letras miúdas.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="py-20 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400">
            Dúvidas Frequentes
          </span>
          <h2 className="font-editorial-display text-3xl font-bold mt-2">
            Perguntas & Respostas Rápidas
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-[#1C1C1F] overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-bold text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-amber-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 font-editorial-serif text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-inherit pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL BOTTOM CTA BANNER */}
      <section className="py-16 px-4 sm:px-6 bg-linear-to-tr from-amber-700 via-amber-600 to-amber-700 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-editorial-display text-3xl sm:text-4xl font-bold">
            Sua Vida Não Precisa Ser Perfeita Para Ter Dias Mais Felizes
          </h2>
          <p className="font-editorial-serif text-base sm:text-lg text-amber-100 max-w-xl mx-auto">
            Por menos do valor de um lanche na padaria, você leva um guia completo para transformar a maneira como você encara a sua rotina.
          </p>
          <button
            onClick={onOpenCheckout}
            className="px-10 py-5 rounded-2xl bg-white text-amber-900 font-bold text-lg hover:bg-amber-50 shadow-2xl transition-all cursor-pointer inline-flex items-center gap-3 hover:scale-105 active:scale-95"
          >
            <span>QUERO APROVEITAR A OFERTA POR R$ 37,90</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="text-xs text-amber-200">
            Acesso vitalício · Garantia incondicional de 7 dias · Pagamento seguro
          </div>
        </div>
      </section>

    </div>
  );
};
