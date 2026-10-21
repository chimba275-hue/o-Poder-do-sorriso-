import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Heart,
  Smile,
  ShieldCheck,
  Feather
} from 'lucide-react';
import { BOOK_METADATA } from '../data/bookContent';
import { ReaderTheme } from '../types';

interface CoverViewProps {
  onStartReading: () => void;
  onOpenChallenge: () => void;
  onOpenReasons: () => void;
  theme: ReaderTheme;
}

export const CoverView: React.FC<CoverViewProps> = ({
  onStartReading,
  onOpenChallenge,
  onOpenReasons,
  theme,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Book Cover Container with Luxury Editorial Frame */}
      <div className={`relative rounded-3xl border shadow-xl overflow-hidden transition-all duration-300 ${
        isDark 
          ? 'bg-[#1C1C1F] border-zinc-800 text-stone-100 shadow-amber-950/20' 
          : 'bg-linear-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFE6] border-amber-900/15 text-stone-900 shadow-stone-300/40'
      }`}>
        {/* Subtle Decorative Editorial Ribbons */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-radial from-amber-400/15 via-amber-300/5 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-radial from-emerald-400/10 via-teal-300/5 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative p-6 sm:p-12 md:p-16 flex flex-col items-center text-center">
          {/* Top Editorial Ribbon */}
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-amber-800 dark:text-amber-400 mb-6">
            <Feather className="w-3.5 h-3.5" />
            <span>Guia Prático de Inteligência Emocional & Leveza</span>
            <span aria-hidden="true">·</span>
            <span>{BOOK_METADATA.edition}</span>
          </div>

          {/* Book Title with High-Contrast Editorial Typography */}
          <h1 className={`font-editorial-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-2xl leading-[1.1] mb-5 text-balance ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            {BOOK_METADATA.title}
          </h1>

          {/* Subtitle */}
          <p className={`font-editorial-serif text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed mb-8 italic text-balance ${
            isDark ? 'text-white' : 'text-stone-700'
          }`}>
            "{BOOK_METADATA.subtitle}"
          </p>

          {/* Conceptual Vector Artwork: Radiant Golden Smile & Morning Sun */}
          <div className="my-6 relative flex items-center justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-linear-to-tr from-amber-200/50 via-amber-100/30 to-amber-50/10 dark:from-amber-900/30 dark:via-zinc-800 dark:to-zinc-900 border border-amber-500/20 flex flex-col items-center justify-center relative shadow-inner p-6">
              {/* Stylized Sunburst Smile SVG */}
              <svg 
                viewBox="0 0 200 200" 
                className="w-32 h-32 sm:w-36 sm:h-36 text-amber-600 dark:text-amber-400 drop-shadow-md"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Sun halo soft arcs */}
                <path d="M40 70 A 70 70 0 0 1 160 70" strokeOpacity="0.4" strokeDasharray="3 6" />
                {/* Gentle smiling eyes */}
                <path d="M60 85 Q 75 70 90 85" strokeWidth="5" />
                <path d="M110 85 Q 125 70 140 85" strokeWidth="5" />
                {/* Radiant open smile curve */}
                <path d="M50 115 Q 100 170 150 115" strokeWidth="6" className="text-amber-600 dark:text-amber-400" />
                <path d="M50 115 Q 100 135 150 115" strokeWidth="3" strokeOpacity="0.4" />
                {/* Small warm rays */}
                <line x1="100" y1="20" x2="100" y2="35" strokeOpacity="0.6" strokeWidth="3" />
                <line x1="155" y1="42" x2="145" y2="53" strokeOpacity="0.6" strokeWidth="3" />
                <line x1="45" y1="42" x2="55" y2="53" strokeOpacity="0.6" strokeWidth="3" />
              </svg>

              <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-amber-800 dark:text-amber-300 mt-2">
                Leveza · Positividade · Humor
              </span>
            </div>
          </div>

          {/* Key Value Proposition Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full my-8 text-left text-xs text-stone-600 dark:text-stone-400">
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
              <Smile className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 dark:text-white font-medium">Sem Ilusão Tóxica</strong>
                <span>Valida problemas reais com humor inteligente e empatia.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 dark:text-white font-medium">Desafio de 7 Dias</strong>
                <span>Exercícios diários e diário interativo persistente.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 dark:text-white font-medium">30 Motivos para Sorrir</strong>
                <span>Guia para reencontrar pequenos prazeres cotidianos.</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onStartReading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-md shadow-amber-600/25 transition-all cursor-pointer group text-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Abrir Livro e Começar a Ler</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenChallenge}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-stone-300 dark:border-zinc-700 hover:bg-black/5 dark:hover:bg-white/5 font-medium transition-colors cursor-pointer text-sm"
            >
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>Desafio dos 7 Dias</span>
            </button>

            <button
              onClick={onOpenReasons}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-stone-300 dark:border-zinc-700 hover:bg-black/5 dark:hover:bg-white/5 font-medium transition-colors cursor-pointer text-sm"
            >
              <Heart className="w-4 h-4 text-rose-500" />
              <span>30 Motivos</span>
            </button>
          </div>

          {/* Meta specs */}
          <div className="mt-10 pt-6 border-t border-stone-300/60 dark:border-zinc-800 w-full flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Tempo de leitura estimado: ~{BOOK_METADATA.totalEstimatedMinutes} min</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Conteúdo embasado cientificamente</span>
            </div>
            <span>·</span>
            <span>ISBN {BOOK_METADATA.isbn}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
