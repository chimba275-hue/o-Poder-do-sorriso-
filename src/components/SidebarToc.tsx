import React from 'react';
import { 
  X, 
  BookOpen, 
  CheckCircle2, 
  Bookmark, 
  Calendar, 
  Sparkles, 
  BookmarkCheck,
  Clock,
  Compass,
  Lock
} from 'lucide-react';
import { CHAPTERS, BOOK_METADATA } from '../data/bookContent';
import { ReaderTheme } from '../types';

interface SidebarTocProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapterId: string;
  onSelectChapter: (id: string) => void;
  theme: ReaderTheme;
  readChapters: string[];
  bookmarkChapterId?: string;
  onSaveBookmark: (id: string) => void;
  isUnlocked: boolean;
}

export const SidebarToc: React.FC<SidebarTocProps> = ({
  isOpen,
  onClose,
  currentChapterId,
  onSelectChapter,
  theme,
  readChapters,
  bookmarkChapterId,
  onSaveBookmark,
  isUnlocked,
}) => {
  if (!isOpen) return null;

  const getSidebarBg = () => {
    switch (theme) {
      case 'sepia':
        return 'bg-[#F4EFE6] text-[#433422] border-[#E2D5B4]';
      case 'dark':
        return 'bg-[#1C1C1F] text-white border-[#2E2E33]';
      case 'white':
        return 'bg-white text-slate-900 border-slate-200';
      case 'cream':
      default:
        return 'bg-[#FAF7F2] text-stone-900 border-amber-900/10';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden no-print">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`absolute inset-y-0 left-0 max-w-sm w-full shadow-2xl flex flex-col border-r transition-transform duration-300 ${getSidebarBg()}`}>
        {/* Drawer Header */}
        <div className="p-5 border-b border-inherit flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600" />
            <h2 className="font-editorial-serif font-bold text-lg">Sumário & Navegação</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar Sumário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Jumps */}
        <div className="px-5 py-3 border-b border-inherit bg-black/2 dark:bg-white/2 flex items-center justify-between text-xs">
          <button
            onClick={() => {
              onSelectChapter('cover');
              onClose();
            }}
            className="font-medium hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Capa</span>
          </button>
          <span className="text-stone-400">·</span>
          <button
            onClick={() => {
              onSelectChapter('cap8');
              onClose();
            }}
            className="font-medium hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-1"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Desafio 7 Dias</span>
          </button>
          <span className="text-stone-400">·</span>
          <button
            onClick={() => {
              onSelectChapter('bonus-reasons');
              onClose();
            }}
            className="font-medium hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>30 Motivos</span>
          </button>
        </div>

        {/* Chapter List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
          <div className="px-2 py-1 text-xs uppercase tracking-widest text-stone-500 font-sans font-semibold">
            Capítulos do E-book
          </div>

          {CHAPTERS.map((chapter) => {
            const isCurrent = currentChapterId === chapter.id;
            const isRead = readChapters.includes(chapter.id);
            const isBookmarked = bookmarkChapterId === chapter.id;

            return (
              <div
                key={chapter.id}
                className={`group rounded-xl p-3 transition-all flex items-start gap-3 cursor-pointer ${
                  isCurrent
                    ? 'bg-amber-500/15 border border-amber-500/30 font-medium'
                    : 'hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                onClick={() => {
                  onSelectChapter(chapter.id);
                  onClose();
                }}
              >
                <div className="mt-0.5 shrink-0">
                  {isRead ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-stone-400 flex items-center justify-center text-[9px] text-stone-500">
                      {typeof chapter.number === 'number' ? chapter.number : '•'}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-amber-800 dark:text-amber-400 font-sans font-semibold flex items-center gap-1">
                      <span>{chapter.number}</span>
                      {!isUnlocked && chapter.id !== 'intro' && (
                        <Lock className="w-2.5 h-2.5 text-stone-400" />
                      )}
                    </span>
                    <div className="flex items-center gap-1.5 text-stone-400 text-[11px]">
                      <Clock className="w-3 h-3" />
                      <span>{chapter.estimatedMinutes} min</span>
                    </div>
                  </div>
                  <h3 className={`font-editorial-serif text-sm font-semibold truncate group-hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-stone-900'
                  }`}>
                    {chapter.title}
                  </h3>
                  <p className={`text-xs line-clamp-1 mt-0.5 ${
                    theme === 'dark' ? 'text-white/80' : 'text-stone-500'
                  }`}>
                    {chapter.subtitle}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSaveBookmark(chapter.id);
                  }}
                  className={`p-1 rounded-md transition-colors ${
                    isBookmarked 
                      ? 'text-amber-600 hover:text-amber-700' 
                      : 'text-stone-300 hover:text-stone-500 opacity-0 group-hover:opacity-100'
                  }`}
                  title={isBookmarked ? 'Capítulo marcado como leitura atual' : 'Marcar como página atual'}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer info in drawer */}
        <div className="p-4 border-t border-inherit text-xs text-stone-500 flex items-center justify-between bg-black/2 dark:bg-white/2">
          <span>{BOOK_METADATA.title}</span>
          <span>{BOOK_METADATA.edition}</span>
        </div>
      </aside>
    </div>
  );
};
