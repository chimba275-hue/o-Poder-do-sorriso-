import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  Lightbulb, 
  Smile, 
  RotateCcw,
  Sparkles, 
  Copy, 
  Check, 
  Bookmark,
  BookOpen,
  Lock
} from 'lucide-react';
import { Chapter, ReaderTheme, FontSize } from '../types';

interface ChapterViewProps {
  chapter: Chapter;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  isRead: boolean;
  onToggleRead: () => void;
  theme: ReaderTheme;
  fontSize: FontSize;
  onOpenChallenge?: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  isUnlocked: boolean;
  onOpenCheckout: () => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  isRead,
  onToggleRead,
  theme,
  fontSize,
  onOpenChallenge,
  isBookmarked,
  onToggleBookmark,
  isUnlocked,
  onOpenCheckout,
}) => {
  const [copiedQuote, setCopiedQuote] = useState(false);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-[15px] leading-relaxed';
      case 'lg':
        return 'text-[18px] leading-relaxed';
      case 'xl':
        return 'text-[20px] leading-loose';
      case 'base':
      default:
        return 'text-[16.5px] leading-relaxed';
    }
  };

  const getCardBg = () => {
    switch (theme) {
      case 'sepia':
        return 'bg-[#F9F5EE] border-[#E8DFC8] text-[#3E301F]';
      case 'dark':
        return 'bg-[#202023] border-[#2C2C30] text-[#E4E4E7]';
      case 'white':
        return 'bg-white border-slate-200 text-slate-800 shadow-xs';
      case 'cream':
      default:
        return 'bg-white border-amber-900/10 text-stone-800 shadow-xs';
    }
  };

  const handleCopyQuote = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  return (
    <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Chapter Card Container */}
      <div className={`rounded-2xl border p-6 sm:p-10 md:p-12 transition-colors duration-200 ${getCardBg()}`}>
        
        {/* Chapter Header Meta */}
        <div className="flex items-center justify-between border-b border-inherit pb-6 mb-8 gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-sans font-bold text-amber-700 dark:text-amber-400">
              {chapter.number}
            </span>
            <span className="text-stone-300 dark:text-stone-700">·</span>
            <span className="text-xs text-stone-500 font-sans">
              ~{chapter.estimatedMinutes} min de leitura
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleBookmark}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400 font-medium'
                  : 'border-transparent text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
              }`}
              title="Marcar este capítulo"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-amber-600' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Marcado' : 'Marcar'}</span>
            </button>

            <button
              onClick={onToggleRead}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                isRead
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-medium'
                  : 'border-stone-200 dark:border-zinc-700 text-stone-500 hover:text-stone-800'
              }`}
              title={isRead ? 'Capítulo lido' : 'Marcar como concluído'}
            >
              <CheckCircle2 className={`w-4 h-4 ${isRead ? 'text-emerald-600' : 'text-stone-400'}`} />
              <span className="hidden sm:inline">{isRead ? 'Concluído' : 'Marcar Lido'}</span>
            </button>
          </div>
        </div>

        {/* Chapter Title & Subtitle */}
        <header className="mb-10">
          <h1 className={`font-editorial-display text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-balance ${
            theme === 'dark' ? 'text-white' : 'text-stone-900'
          }`}>
            {chapter.title}
          </h1>
          <p className={`font-editorial-serif text-lg italic text-balance ${
            theme === 'dark' ? 'text-white/90' : 'text-stone-600'
          }`}>
            {chapter.subtitle}
          </p>
        </header>

        {/* Epigraph Callout Box (if present) */}
        {chapter.epigraph && (
          <aside className="my-8 p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 relative">
            <Quote className="w-8 h-8 text-amber-600/30 absolute top-4 right-4 pointer-events-none" />
            <blockquote className={`font-editorial-serif text-base sm:text-lg italic pr-8 ${
              theme === 'dark' ? 'text-white' : 'text-stone-800'
            }`}>
              "{chapter.epigraph.phrase}"
            </blockquote>
            <cite className="block text-xs uppercase tracking-wider font-sans font-semibold text-amber-800 dark:text-amber-400 mt-2 not-italic">
              — {chapter.epigraph.author}
            </cite>
            {chapter.epigraph.humorousComment && (
              <div className={`mt-3 pt-3 border-t border-amber-500/15 text-xs flex items-start gap-2 ${
                theme === 'dark' ? 'text-white/80' : 'text-stone-600'
              }`}>
                <Smile className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span className="italic">{chapter.epigraph.humorousComment}</span>
              </div>
            )}
          </aside>
        )}

        {/* If locked and not introduction, show attractive paywall teaser */}
        {!isUnlocked && chapter.id !== 'intro' ? (
          <div className="space-y-8 font-editorial-serif">
            {/* Show first paragraph preview */}
            {chapter.sections[0]?.paragraphs?.[0] && (
              <p className={`${getFontSizeClass()} ${
                theme === 'dark' ? 'text-white' : 'text-stone-800'
              } drop-cap`}>
                {chapter.sections[0].paragraphs[0]}
              </p>
            )}

            {/* Locked Paywall Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-linear-to-b from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 text-center space-y-5">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center">
                <Lock className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 block mb-1">
                  Conteúdo Exclusivo da Versão Completa
                </span>
                <h3 className="font-editorial-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">
                  Desbloqueie o Livro Completo Para Continuar a Leitura
                </h3>
              </div>
              <p className="font-editorial-serif text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-lg mx-auto leading-relaxed">
                Você leu a introdução gratuita de <em>"O Poder do Sorriso"</em>. Por apenas <strong>R$ 37,90</strong> (ou 4x de R$ 9,98), você desbloqueia o livro integral com todos os 9 capítulos, o Desafio dos 7 Dias, os 30 motivos e o leitor em PDF.
              </p>
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl shadow-emerald-600/30 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <Lock className="w-4 h-4" />
                <span>Desbloquear Acesso Completo — R$ 37,90</span>
              </button>
              <div className="flex items-center justify-center gap-4 text-xs text-stone-400">
                <span>Pagamento único</span>
                <span>·</span>
                <span>Acesso vitalício imediato</span>
                <span>·</span>
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        ) : (
          /* Chapter Body Sections */
          <div className="space-y-8 font-editorial-serif">
            {chapter.sections.map((section, sIndex) => (
              <div key={sIndex} className="space-y-5">
                {section.heading && (
                  <h2 className={`font-editorial-display text-2xl font-semibold mt-8 mb-4 pt-4 border-t border-inherit ${
                    theme === 'dark' ? 'text-white' : 'text-stone-900'
                  }`}>
                    {section.heading}
                  </h2>
                )}

              {section.paragraphs?.map((para, pIndex) => {
                const isFirstEver = sIndex === 0 && pIndex === 0;
                return (
                  <p 
                    key={pIndex} 
                    className={`${getFontSizeClass()} ${
                      theme === 'dark' ? 'text-white' : 'text-stone-800'
                    } ${isFirstEver ? 'drop-cap' : ''}`}
                  >
                    {para}
                  </p>
                );
              })}

              {/* Bullet Points with Clean Typography */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <div className="my-6 space-y-3 font-sans">
                  {section.bulletPoints.map((item, bIndex) => (
                    <div 
                      key={bIndex}
                      className="p-4 rounded-xl bg-black/2 dark:bg-white/5 border border-inherit flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {bIndex + 1}
                      </div>
                      <div>
                        <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${theme === 'dark' ? 'text-white/90' : 'text-stone-600'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Callouts ("Sorria, mas não perca o juízo!", "Dica prática do dia", "Exercício") */}
              {section.callouts && section.callouts.map((callout, cIndex) => {
                const isHumor = callout.type === 'humor';
                const isTip = callout.type === 'tip';
                const isExercise = callout.type === 'exercise';
                const isReframing = callout.type === 'reframing';

                return (
                  <div
                    key={cIndex}
                    className={`my-6 p-5 sm:p-6 rounded-xl border transition-colors ${
                      isHumor 
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-white'
                        : isTip
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-white'
                        : isExercise
                        ? 'bg-sky-500/10 border-sky-500/30 text-sky-950 dark:text-white'
                        : 'bg-purple-500/10 border-purple-500/30 text-purple-950 dark:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 font-sans font-bold text-xs uppercase tracking-wider">
                      {isHumor && <Smile className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
                      {isTip && <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                      {isExercise && <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />}
                      {isReframing && <RotateCcw className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
                      <span>{callout.title}</span>
                    </div>

                    <p className={`font-editorial-serif text-sm sm:text-base leading-relaxed ${
                      theme === 'dark' ? 'text-white' : 'text-inherit'
                    }`}>
                      {callout.content}
                    </p>

                    {callout.authorOrNote && (
                      <span className={`block mt-2 text-xs font-sans italic ${
                        theme === 'dark' ? 'text-white/70' : 'text-stone-500'
                      }`}>
                        {callout.authorOrNote}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        )}

        {/* Chapter 8 interactive shortcut CTA */}
        {chapter.id === 'cap8' && onOpenChallenge && (
          <div className="mt-10 p-6 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-center">
            <h3 className="font-editorial-serif text-lg font-bold mb-2">Pronto para começar o seu desafio prático?</h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto mb-4">
              Acesse agora o diário interativo dos 7 dias, marque suas tarefas diárias e anote suas percepções.
            </p>
            <button
              onClick={onOpenChallenge}
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <Sparkles className="w-4 h-4" />
              <span>Abrir Diário do Desafio</span>
            </button>
          </div>
        )}

        {/* Footer Navigation: Previous / Next Chapter */}
        <footer className="mt-12 pt-8 border-t border-inherit flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-sm">
          <div>
            {hasPrevious && onPrevious ? (
              <button
                onClick={onPrevious}
                className="w-full sm:w-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-inherit hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-stone-600 dark:text-stone-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Capítulo Anterior</span>
              </button>
            ) : <div />}
          </div>

          <div className="flex items-center gap-3">
            {chapter.epigraph && (
              <button
                onClick={() => handleCopyQuote(`"${chapter.epigraph?.phrase}" — ${chapter.epigraph?.author}`)}
                className="p-2 rounded-lg border border-inherit hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs flex items-center gap-1.5 cursor-pointer text-stone-500"
                title="Copiar citação para compartilhar"
              >
                {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden md:inline">{copiedQuote ? 'Copiado!' : 'Copiar citação'}</span>
              </button>
            )}

            {hasNext && onNext ? (
              <button
                onClick={onNext}
                className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors cursor-pointer shadow-xs"
              >
                <span>Próximo Capítulo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onToggleRead}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors cursor-pointer shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Leitura Concluída</span>
              </button>
            )}
          </div>
        </footer>

      </div>
    </article>
  );
};
