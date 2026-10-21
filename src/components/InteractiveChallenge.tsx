import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Save, 
  Download, 
  Sparkles, 
  Lightbulb, 
  BookMarked,
  ArrowRight,
  ArrowLeft,
  Share2,
  Trash2
} from 'lucide-react';
import { SEVEN_DAYS_CHALLENGE } from '../data/bookContent';
import { JournalState, ReaderTheme } from '../types';

interface InteractiveChallengeProps {
  journal: JournalState;
  onUpdateJournal: (updater: (prev: JournalState) => JournalState) => void;
  theme: ReaderTheme;
  onPrintPdf: () => void;
}

export const InteractiveChallenge: React.FC<InteractiveChallengeProps> = ({
  journal,
  onUpdateJournal,
  theme,
  onPrintPdf,
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [saveToast, setSaveToast] = useState(false);

  const currentChallenge = SEVEN_DAYS_CHALLENGE.find(c => c.day === activeDay) || SEVEN_DAYS_CHALLENGE[0];
  const isCompleted = journal.completedDays.includes(activeDay);
  const currentReflection = journal.responses[activeDay] || '';

  const handleToggleDayComplete = (day: number) => {
    onUpdateJournal(prev => {
      const alreadyDone = prev.completedDays.includes(day);
      return {
        ...prev,
        completedDays: alreadyDone
          ? prev.completedDays.filter(d => d !== day)
          : [...prev.completedDays, day],
      };
    });
  };

  const handleTextChange = (text: string) => {
    onUpdateJournal(prev => ({
      ...prev,
      responses: {
        ...prev.responses,
        [activeDay]: text,
      },
    }));
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 1500);
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

  const completedCount = journal.completedDays.length;

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Header Banner */}
      <div className={`rounded-2xl border p-6 sm:p-8 mb-8 ${getCardBg()}`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Plano Prático de Transformação Pessoal</span>
            </div>
            <h1 className="font-editorial-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
              O Desafio dos 7 Dias do Sorriso
            </h1>
            <p className="font-editorial-serif text-sm sm:text-base text-stone-600 dark:text-stone-300 mt-2">
              Uma semana de pequenas atitudes intencionais para reconfigurar a sua rotina com mais leveza, presença e bom humor.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0 text-center w-full sm:w-auto">
            <span className="text-2xl font-bold text-amber-800 dark:text-amber-300">
              {completedCount}/7
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
              Dias Concluídos
            </span>
          </div>
        </div>

        {/* Progress meter */}
        <div className="w-full bg-stone-200 dark:bg-zinc-700 h-2 rounded-full overflow-hidden mt-6">
          <div 
            className="h-full bg-linear-to-r from-amber-500 to-emerald-500 transition-all duration-300"
            style={{ width: `${(completedCount / 7) * 100}%` }}
          />
        </div>
      </div>

      {/* Day Selector Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {SEVEN_DAYS_CHALLENGE.map((c) => {
          const isDone = journal.completedDays.includes(c.day);
          const isSelected = activeDay === c.day;

          return (
            <button
              key={c.day}
              onClick={() => setActiveDay(c.day)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
                isSelected
                  ? 'bg-amber-600 border-amber-600 text-white shadow-sm'
                  : isDone
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20'
                  : 'bg-white dark:bg-zinc-800/80 border-stone-200 dark:border-zinc-700 text-stone-700 dark:text-stone-300 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {isDone ? (
                <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
              ) : (
                <Circle className="w-3.5 h-3.5 opacity-40" />
              )}
              <span>Dia {c.day}</span>
            </button>
          );
        })}
      </div>

      {/* Active Day Detail Card */}
      <div className={`rounded-2xl border p-6 sm:p-10 ${getCardBg()}`}>
        {/* Day Card Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-inherit pb-6 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              Desafio do Dia {currentChallenge.day} de 7
            </span>
            <h2 className="font-editorial-display text-2xl sm:text-3xl font-bold mt-1 text-stone-900 dark:text-white">
              {currentChallenge.title}
            </h2>
            <p className="font-editorial-serif text-sm sm:text-base italic text-stone-600 dark:text-stone-300 mt-1">
              "{currentChallenge.theme}"
            </p>
          </div>

          <button
            onClick={() => handleToggleDayComplete(currentChallenge.day)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer border ${
              isCompleted
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-zinc-700 hover:bg-stone-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Desafio Cumprido!' : 'Marcar como Cumprido'}</span>
          </button>
        </div>

        {/* Instructions */}
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/25">
            <h3 className="text-xs uppercase tracking-wider font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-2 font-sans">
              <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Instrução Prática para Hoje</span>
            </h3>
            <p className={`font-editorial-serif text-base leading-relaxed ${
              theme === 'dark' ? 'text-white' : 'text-stone-800'
            }`}>
              {currentChallenge.instruction}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
            <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2 mb-2 font-sans">
              <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Exemplo do Cotidiano</span>
            </h3>
            <p className={`font-editorial-serif text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-white' : 'text-stone-800'
            }`}>
              {currentChallenge.practicalExample}
            </p>
          </div>

          {/* Journal Reflection Area */}
          <div className="mt-8 pt-6 border-t border-inherit">
            <div className="flex items-center justify-between mb-3">
              <label 
                htmlFor="reflection-input"
                className={`font-editorial-serif font-bold text-base sm:text-lg flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-stone-900'
                }`}
              >
                <BookMarked className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Caderno de Registro & Reflexão Pessoal</span>
              </label>

              {saveToast && (
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-pulse flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Salvo automaticamente
                </span>
              )}
            </div>

            <p className={`text-xs sm:text-sm mb-3 italic ${
              theme === 'dark' ? 'text-white/90' : 'text-stone-600'
            }`}>
              {currentChallenge.promptQuestion}
            </p>

            <textarea
              id="reflection-input"
              rows={5}
              value={currentReflection}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Escreva aqui como foi a sua experiência, suas dificuldades, surpresas e o que mudou na sua percepção..."
              className={`w-full p-4 rounded-xl border border-stone-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/90 text-sm font-editorial-serif focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all placeholder:text-stone-400 ${
                theme === 'dark' ? 'text-white' : 'text-stone-800'
              }`}
            />

            <div className="flex items-center justify-between text-xs text-stone-500 mt-2">
              <span>Suas respostas ficam salvas no seu navegador.</span>
              <span>{currentReflection.length} caracteres</span>
            </div>
          </div>
        </div>

        {/* Bottom Pagination for Days */}
        <div className="mt-8 pt-6 border-t border-inherit flex items-center justify-between">
          <button
            onClick={() => setActiveDay(prev => Math.max(1, prev - 1))}
            disabled={activeDay === 1}
            className="px-4 py-2 rounded-lg border border-inherit hover:bg-black/5 dark:hover:bg-white/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-medium flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dia Anterior</span>
          </button>

          <button
            onClick={onPrintPdf}
            className="px-4 py-2 rounded-lg bg-amber-600/10 hover:bg-amber-600/20 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Exportar respostas para PDF"
          >
            <Download className="w-4 h-4" />
            <span>Exportar Diário em PDF</span>
          </button>

          <button
            onClick={() => setActiveDay(prev => Math.min(7, prev + 1))}
            disabled={activeDay === 7}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Próximo Dia</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
