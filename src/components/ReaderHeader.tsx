import { 
  BookOpen, 
  Menu, 
  Printer, 
  Sun, 
  Moon, 
  BookMarked,
  ScrollText,
  FileText,
  Lock,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';
import { ReaderTheme, ViewMode, FontSize } from '../types';

interface ReaderHeaderProps {
  currentChapterId: string;
  currentChapterTitle: string;
  theme: ReaderTheme;
  setTheme: (t: ReaderTheme) => void;
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  onOpenToc: () => void;
  onPrintPdf: () => void;
  onNavigate: (id: string) => void;
  progressPercent: number;
  activeTab: 'sales' | 'reader';
  setActiveTab: (t: 'sales' | 'reader') => void;
  onOpenCheckout: () => void;
  isUnlocked: boolean;
  onResetAccess?: () => void;
}

export const ReaderHeader: React.FC<ReaderHeaderProps> = ({
  theme,
  setTheme,
  viewMode,
  setViewMode,
  fontSize,
  setFontSize,
  onOpenToc,
  onPrintPdf,
  onNavigate,
  progressPercent,
  activeTab,
  setActiveTab,
  onOpenCheckout,
  isUnlocked,
  onResetAccess,
}) => {
  const getHeaderThemeClasses = () => {
    switch (theme) {
      case 'sepia':
        return 'bg-[#F4EFE6] border-[#E6DCB8] text-[#433422]';
      case 'dark':
        return 'bg-[#18181B] border-[#27272A] text-white';
      case 'white':
        return 'bg-white border-slate-200 text-slate-800';
      case 'cream':
      default:
        return 'bg-[#FAF7F2] border-amber-900/10 text-stone-900';
    }
  };

  const getSubToolbarThemeClasses = () => {
    switch (theme) {
      case 'sepia':
        return 'bg-[#EFE9DC] border-[#E2D5B4] text-[#55432B]';
      case 'dark':
        return 'bg-[#212124] border-[#2E2E33] text-stone-200';
      case 'white':
        return 'bg-slate-50 border-slate-200 text-slate-700';
      case 'cream':
      default:
        return 'bg-[#F5F0E6] border-amber-900/10 text-stone-700';
    }
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-200 no-print border-b shadow-xs ${getHeaderThemeClasses()}`}>
      {/* Strict Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenToc}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title="Abrir Sumário e Capítulos"
            aria-label="Abrir Sumário"
          >
            <Menu className="w-5 h-5" />
          </button>
          <button 
            onClick={() => {
              setActiveTab('sales');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="text-left group cursor-pointer flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-700 dark:text-amber-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="whitespace-nowrap shrink-0">
              <span className="font-editorial-serif text-lg font-bold tracking-tight block leading-tight group-hover:text-amber-600 transition-colors">
                O Poder do Sorriso
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-5 Single-line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium whitespace-nowrap shrink-0">
          <button
            onClick={() => {
              setActiveTab('sales');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors cursor-pointer flex items-center gap-1.5 font-semibold ${
              activeTab === 'sales'
                ? 'text-amber-600 dark:text-amber-400 underline underline-offset-4'
                : 'hover:text-amber-600'
            }`}
          >
            <span>Página de Vendas</span>
            <span className="text-[10px] bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold px-1.5 py-0.5 rounded">
              70% OFF
            </span>
          </button>
          
          <button
            onClick={() => {
              setActiveTab('reader');
              onNavigate('cover');
            }}
            className={`transition-colors cursor-pointer ${
              activeTab === 'reader'
                ? 'text-amber-600 dark:text-amber-400 font-semibold underline underline-offset-4'
                : 'hover:text-amber-600'
            }`}
          >
            Área do Livro
          </button>

          <button
            onClick={() => {
              setActiveTab('reader');
              onNavigate('cap8');
            }}
            className="hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-1"
          >
            <BookMarked className="w-3.5 h-3.5 text-amber-600" />
            <span>Desafio 7 Dias</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('reader');
              onNavigate('bonus-reasons');
            }}
            className="hover:text-amber-600 transition-colors cursor-pointer"
          >
            30 Motivos
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {isUnlocked ? (
            <div className="flex items-center gap-1.5">
              <div 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 whitespace-nowrap shrink-0"
                title="Você possui acesso vitalício a todo o conteúdo"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Acesso VIP Ativo</span>
              </div>
            </div>
          ) : (
            <button
              onClick={onOpenCheckout}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all cursor-pointer whitespace-nowrap shrink-0 hover:scale-105 active:scale-95"
              title="Desbloquear Acesso Completo ao Livro"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Desbloquear (R$ 37,90)</span>
            </button>
          )}

          <button
            onClick={onPrintPdf}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-stone-300 dark:border-zinc-700 hover:bg-black/5 dark:hover:bg-white/5 shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
            title="Salvar como PDF ou Imprimir"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>
        </div>
      </div>

      {/* Sub-toolbar: Reading Ergonomics (Font, Theme, View Mode) */}
      <div className={`px-4 sm:px-6 py-2 border-t text-xs transition-colors duration-200 ${getSubToolbarThemeClasses()}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Quick chapter switch info */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenToc}
              className="font-medium hover:underline flex items-center gap-1.5 text-amber-700 dark:text-amber-400 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Sumário Geral</span>
            </button>
            <span className="text-stone-400">·</span>
            <span className="text-stone-500 font-sans hidden sm:inline">
              Progresso do livro: <strong className="text-stone-800 dark:text-stone-200">{progressPercent}%</strong>
            </span>
          </div>

          {/* Reading Controls */}
          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-md p-0.5">
              <button
                onClick={() => setViewMode('paged')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === 'paged'
                    ? 'bg-white dark:bg-zinc-800 text-amber-800 dark:text-amber-400 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
                title="Modo Página a Página"
              >
                <BookOpen className="w-3 h-3" />
                <span className="hidden md:inline">Páginas</span>
              </button>
              <button
                onClick={() => setViewMode('continuous')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === 'continuous'
                    ? 'bg-white dark:bg-zinc-800 text-amber-800 dark:text-amber-400 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
                title="Modo Rolo Contínuo"
              >
                <ScrollText className="w-3 h-3" />
                <span className="hidden md:inline">Contínuo</span>
              </button>
            </div>

            {/* Font Size Adjusters */}
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-md p-0.5 text-xs font-serif font-bold">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  fontSize === 'sm' ? 'bg-white dark:bg-zinc-800 text-amber-700 shadow-xs' : 'text-stone-600'
                }`}
                title="Texto Pequeno"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  fontSize === 'base' ? 'bg-white dark:bg-zinc-800 text-amber-700 shadow-xs' : 'text-stone-600'
                }`}
                title="Texto Normal"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  fontSize === 'lg' ? 'bg-white dark:bg-zinc-800 text-amber-700 shadow-xs' : 'text-stone-600'
                }`}
                title="Texto Médio"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  fontSize === 'xl' ? 'bg-white dark:bg-zinc-800 text-amber-700 shadow-xs' : 'text-stone-600'
                }`}
                title="Texto Grande"
              >
                A++
              </button>
            </div>

            {/* Theme Selector */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setTheme('cream')}
                className={`w-5 h-5 rounded-full bg-[#FAF7F2] border border-amber-800/30 transition-transform ${
                  theme === 'cream' ? 'ring-2 ring-amber-600 scale-110' : 'hover:scale-105'
                }`}
                title="Tema Papel Creme (Padrão)"
                aria-label="Tema Creme"
              />
              <button
                onClick={() => setTheme('white')}
                className={`w-5 h-5 rounded-full bg-white border border-slate-300 transition-transform ${
                  theme === 'white' ? 'ring-2 ring-amber-600 scale-110' : 'hover:scale-105'
                }`}
                title="Tema Branco Limpo"
                aria-label="Tema Branco"
              />
              <button
                onClick={() => setTheme('sepia')}
                className={`w-5 h-5 rounded-full bg-[#F4EFE6] border border-[#D5C29D] transition-transform ${
                  theme === 'sepia' ? 'ring-2 ring-amber-600 scale-110' : 'hover:scale-105'
                }`}
                title="Tema Sépia Aconchegante"
                aria-label="Tema Sépia"
              />
              <button
                onClick={() => setTheme('dark')}
                className={`w-5 h-5 rounded-full bg-[#18181B] border border-zinc-700 transition-transform flex items-center justify-center text-amber-400 ${
                  theme === 'dark' ? 'ring-2 ring-amber-500 scale-110' : 'hover:scale-105'
                }`}
                title="Tema Noturno Suave"
                aria-label="Tema Noturno"
              >
                <Moon className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar line */}
      <div className="w-full h-1 bg-stone-200 dark:bg-zinc-800">
        <div
          className="h-full bg-linear-to-r from-amber-500 to-amber-600 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
};
