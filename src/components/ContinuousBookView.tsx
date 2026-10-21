import React from 'react';
import { CHAPTERS, BOOK_METADATA, THIRTY_REASONS, SEVEN_DAYS_CHALLENGE } from '../data/bookContent';
import { ReaderTheme, FontSize, JournalState } from '../types';
import { Quote, Smile, Lightbulb, Sparkles, RotateCcw, CheckCircle2, Feather, Heart } from 'lucide-react';

interface ContinuousBookViewProps {
  theme: ReaderTheme;
  fontSize: FontSize;
  journal: JournalState;
  onNavigateToChapter: (id: string) => void;
}

export const ContinuousBookView: React.FC<ContinuousBookViewProps> = ({
  theme,
  fontSize,
  journal,
  onNavigateToChapter,
}) => {
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

  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6 space-y-16">
      
      {/* Front Book Title for Continuous Scroll */}
      <div className={`p-8 sm:p-12 rounded-2xl border text-center ${getCardBg()}`}>
        <div className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-semibold text-amber-700 dark:text-amber-400 mb-3 font-sans">
          <Feather className="w-3.5 h-3.5" />
          <span>{BOOK_METADATA.edition}</span>
        </div>
        <h1 className="font-editorial-display text-4xl sm:text-5xl font-bold mb-4 text-stone-900 dark:text-white">
          {BOOK_METADATA.title}
        </h1>
        <p className="font-editorial-serif text-lg sm:text-xl italic text-stone-600 dark:text-stone-300 max-w-xl mx-auto mb-6">
          {BOOK_METADATA.subtitle}
        </p>
        <div className="text-xs text-stone-400 font-sans">
          ISBN {BOOK_METADATA.isbn} · Leitura Contínua Integrada
        </div>
      </div>

      {/* Chapters in sequence */}
      {CHAPTERS.map((chapter) => (
        <section 
          key={chapter.id} 
          id={`chapter-${chapter.id}`}
          className={`rounded-2xl border p-6 sm:p-10 md:p-12 ${getCardBg()} chapter-container`}
        >
          {/* Header */}
          <div className="border-b border-inherit pb-4 mb-6">
            <span className="text-xs uppercase tracking-widest font-sans font-bold text-amber-700 dark:text-amber-400">
              {chapter.number}
            </span>
            <h2 className="font-editorial-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white mt-1">
              {chapter.title}
            </h2>
            <p className="font-editorial-serif text-base italic text-stone-600 dark:text-stone-300 mt-1">
              {chapter.subtitle}
            </p>
          </div>

          {/* Epigraph */}
          {chapter.epigraph && (
            <aside className="my-6 p-5 rounded-xl bg-amber-500/5 border border-amber-500/20 relative">
              <Quote className="w-6 h-6 text-amber-600/30 absolute top-4 right-4 pointer-events-none" />
              <blockquote className="font-editorial-serif italic text-base sm:text-lg text-stone-800 dark:text-stone-200">
                "{chapter.epigraph.phrase}"
              </blockquote>
              <cite className="block text-xs uppercase tracking-wider font-sans font-semibold text-amber-800 dark:text-amber-400 mt-2 not-italic">
                — {chapter.epigraph.author}
              </cite>
              {chapter.epigraph.humorousComment && (
                <div className="mt-2 pt-2 border-t border-amber-500/15 text-xs text-stone-600 dark:text-stone-400 italic flex items-center gap-1.5">
                  <Smile className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{chapter.epigraph.humorousComment}</span>
                </div>
              )}
            </aside>
          )}

          {/* Paragraphs */}
          <div className="space-y-6 font-editorial-serif">
            {chapter.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-4">
                {section.heading && (
                  <h3 className={`font-editorial-display text-xl font-bold mt-6 mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-stone-900'
                  }`}>
                    {section.heading}
                  </h3>
                )}

                {section.paragraphs?.map((para, pIdx) => {
                  const isFirst = sIdx === 0 && pIdx === 0;
                  return (
                    <p 
                      key={pIdx} 
                      className={`${getFontSizeClass()} ${
                        theme === 'dark' ? 'text-white' : 'text-stone-800'
                      } ${isFirst ? 'drop-cap' : ''}`}
                    >
                      {para}
                    </p>
                  );
                })}

                {/* Bullets */}
                {section.bulletPoints && (
                  <div className="my-4 space-y-3 font-sans">
                    {section.bulletPoints.map((item, bIdx) => (
                      <div key={bIdx} className="p-3.5 rounded-xl bg-black/2 dark:bg-white/5 border border-inherit flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {bIdx + 1}
                        </div>
                        <div>
                          <strong className={`text-sm font-semibold block ${
                            theme === 'dark' ? 'text-white' : 'text-stone-900'
                          }`}>
                            {item.title}
                          </strong>
                          <span className={`text-xs sm:text-sm ${
                            theme === 'dark' ? 'text-white/90' : 'text-stone-600'
                          }`}>
                            {item.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Callouts */}
                {section.callouts && section.callouts.map((callout, cIdx) => (
                  <div
                    key={cIdx}
                    className="my-5 p-5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-stone-900 dark:text-white"
                  >
                    <div className="flex items-center gap-2 mb-1.5 font-sans font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-300">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{callout.title}</span>
                    </div>
                    <p className={`font-editorial-serif text-sm sm:text-base leading-relaxed ${
                      theme === 'dark' ? 'text-white' : 'text-inherit'
                    }`}>
                      {callout.content}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* If Chapter 8, render the completed days & journal reflections summary */}
          {chapter.id === 'cap8' && (
            <div className="mt-8 pt-6 border-t border-inherit">
              <h4 className="font-editorial-display text-lg font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Status do Seu Desafio de 7 Dias</span>
              </h4>
              <div className="space-y-4">
                {SEVEN_DAYS_CHALLENGE.map((day) => {
                  const isDone = journal.completedDays.includes(day.day);
                  const note = journal.responses[day.day];

                  return (
                    <div key={day.day} className="p-4 rounded-xl border border-inherit bg-black/2 dark:bg-white/2 text-xs">
                      <div className="flex items-center justify-between font-medium">
                        <span className="font-bold">Dia {day.day}: {day.title}</span>
                        <span className={isDone ? 'text-emerald-600 font-semibold' : 'text-stone-400'}>
                          {isDone ? 'Cumprido ✓' : 'Pendente'}
                        </span>
                      </div>
                      {note && (
                        <div className="mt-2 pt-2 border-t border-inherit font-editorial-serif italic text-stone-700 dark:text-stone-300">
                          "{note}"
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* If 30 Reasons Chapter, render all 30 reasons nicely */}
          {chapter.id === 'bonus-reasons' && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {THIRTY_REASONS.map((reason, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-inherit bg-black/2 dark:bg-white/2 text-xs font-editorial-serif flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold font-sans text-[10px] shrink-0">
                    {idx + 1}
                  </span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

    </div>
  );
};
