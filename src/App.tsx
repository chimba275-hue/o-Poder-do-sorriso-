import React, { useState, useEffect } from 'react';
import { CHAPTERS, BOOK_METADATA } from './data/bookContent';
import { ReaderTheme, ViewMode, FontSize, JournalState } from './types';
import { ReaderHeader } from './components/ReaderHeader';
import { SidebarToc } from './components/SidebarToc';
import { CoverView } from './components/CoverView';
import { ChapterView } from './components/ChapterView';
import { InteractiveChallenge } from './components/InteractiveChallenge';
import { ThirtyReasonsView } from './components/ThirtyReasonsView';
import { ContinuousBookView } from './components/ContinuousBookView';
import { SalesPage } from './components/SalesPage';
import { CheckoutModal } from './components/CheckoutModal';

const STORAGE_KEY_THEME = 'smile_reader_theme';
const STORAGE_KEY_FONT = 'smile_reader_font_size';
const STORAGE_KEY_VIEW_MODE = 'smile_reader_view_mode';
const STORAGE_KEY_READ_CHAPTERS = 'smile_read_chapters';
const STORAGE_KEY_BOOKMARK = 'smile_bookmark_chapter';
const STORAGE_KEY_JOURNAL = 'smile_journal_state';
const STORAGE_KEY_LAST_CHAPTER = 'smile_last_chapter';
const STORAGE_KEY_UNLOCKED = 'smile_book_unlocked';

export default function App() {
  // Theme & Preferences State
  const [theme, setTheme] = useState<ReaderTheme>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_THEME);
      return (saved as ReaderTheme) || 'cream';
    } catch {
      return 'cream';
    }
  });

  const [fontSize, setFontSize] = useState<FontSize>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FONT);
      return (saved as FontSize) || 'base';
    } catch {
      return 'base';
    }
  });

  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_VIEW_MODE);
      return (saved as ViewMode) || 'paged';
    } catch {
      return 'paged';
    }
  });

  // Current Chapter Navigation State
  const [currentChapterId, setCurrentChapterId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LAST_CHAPTER);
      return saved || 'cover';
    } catch {
      return 'cover';
    }
  });

  // Global Access State: whether user has unlocked/purchased full access
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_UNLOCKED) === 'true';
    } catch {
      return false;
    }
  });

  // Active View Tab: 'sales' (Página de Vendas) ou 'reader' (Área do Livro)
  const [activeTab, setActiveTab] = useState<'sales' | 'reader'>('sales');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleUnlockFullBook = () => {
    setIsUnlocked(true);
    try {
      localStorage.setItem(STORAGE_KEY_UNLOCKED, 'true');
    } catch {}
    setActiveTab('reader');
    setCurrentChapterId('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetAccess = () => {
    setIsUnlocked(false);
    try {
      localStorage.removeItem(STORAGE_KEY_UNLOCKED);
    } catch {}
  };

  // Sidebar Drawer
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Read chapters list
  const [readChapters, setReadChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_READ_CHAPTERS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Bookmark Chapter
  const [bookmarkChapterId, setBookmarkChapterId] = useState<string | undefined>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_BOOKMARK) || undefined;
    } catch {
      return undefined;
    }
  });

  // Journal State for 7-Day Challenge & Custom Favorites
  const [journal, setJournal] = useState<JournalState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_JOURNAL);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {
      completedDays: [],
      responses: {},
      personalNotes: '',
      favoriteReasons: [0, 4, 9, 12, 17, 29], // pre-favorited wholesome items
    };
  });

  // Sync to localStorage and HTML root
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch {}

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.style.colorScheme = 'light';
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FONT, fontSize);
    } catch {}
  }, [fontSize]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_VIEW_MODE, viewMode);
    } catch {}
  }, [viewMode]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LAST_CHAPTER, currentChapterId);
    } catch {}
  }, [currentChapterId]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_READ_CHAPTERS, JSON.stringify(readChapters));
    } catch {}
  }, [readChapters]);

  useEffect(() => {
    try {
      if (bookmarkChapterId) {
        localStorage.setItem(STORAGE_KEY_BOOKMARK, bookmarkChapterId);
      } else {
        localStorage.removeItem(STORAGE_KEY_BOOKMARK);
      }
    } catch {}
  }, [bookmarkChapterId]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_JOURNAL, JSON.stringify(journal));
    } catch {}
  }, [journal]);

  // Overall reading progress calculation
  const totalChaptersCount = CHAPTERS.length;
  const progressPercent = Math.min(
    100,
    Math.round((readChapters.length / totalChaptersCount) * 100)
  );

  // Toggle chapter read status
  const handleToggleRead = (id: string) => {
    setReadChapters((prev) => {
      const next = prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id];
      return next;
    });
  };

  // Toggle bookmark
  const handleToggleBookmark = (id: string) => {
    setBookmarkChapterId((prev) => (prev === id ? undefined : id));
  };

  // Toggle favorite reason
  const handleToggleFavoriteReason = (index: number) => {
    setJournal((prev) => {
      const alreadyFav = prev.favoriteReasons.includes(index);
      return {
        ...prev,
        favoriteReasons: alreadyFav
          ? prev.favoriteReasons.filter((i) => i !== index)
          : [...prev.favoriteReasons, index],
      };
    });
  };

  // Navigation helpers
  const chapterIndex = CHAPTERS.findIndex((c) => c.id === currentChapterId);
  const currentChapter = chapterIndex >= 0 ? CHAPTERS[chapterIndex] : null;

  const handleNextChapter = () => {
    if (currentChapterId === 'cover') {
      setCurrentChapterId('intro');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (chapterIndex >= 0 && chapterIndex < CHAPTERS.length - 1) {
      const nextId = CHAPTERS[chapterIndex + 1].id;
      setCurrentChapterId(nextId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapterId === 'intro') {
      setCurrentChapterId('cover');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (chapterIndex > 0) {
      const prevId = CHAPTERS[chapterIndex - 1].id;
      setCurrentChapterId(prevId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard navigation for page flipping (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'paged') return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight') {
        handleNextChapter();
      } else if (e.key === 'ArrowLeft') {
        handlePreviousChapter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, currentChapterId, chapterIndex]);

  // PDF Print trigger
  const handlePrintPdf = () => {
    window.print();
  };

  // Page background styling based on theme
  const getAppThemeClasses = () => {
    switch (theme) {
      case 'sepia':
        return 'bg-[#F4EFE6] text-[#3D2E1E]';
      case 'dark':
        return 'bg-[#121214] text-white dark';
      case 'white':
        return 'bg-[#F8FAFC] text-slate-900';
      case 'cream':
      default:
        return 'bg-[#FAF7F2] text-stone-900';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 flex flex-col ${getAppThemeClasses()}`}>
      
      {/* Top Header Bar */}
      <ReaderHeader
        currentChapterId={currentChapterId}
        currentChapterTitle={currentChapter ? currentChapter.title : BOOK_METADATA.title}
        theme={theme}
        setTheme={setTheme}
        viewMode={viewMode}
        setViewMode={setViewMode}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onOpenToc={() => setIsSidebarOpen(true)}
        onPrintPdf={handlePrintPdf}
        onNavigate={(id) => {
          setCurrentChapterId(id);
          setActiveTab('reader');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        progressPercent={progressPercent}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        isUnlocked={isUnlocked}
        onResetAccess={handleResetAccess}
      />

      {/* Sidebar Drawer */}
      <SidebarToc
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentChapterId={currentChapterId}
        onSelectChapter={(id) => {
          setCurrentChapterId(id);
          setActiveTab('reader');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        theme={theme}
        readChapters={readChapters}
        bookmarkChapterId={bookmarkChapterId}
        onSaveBookmark={handleToggleBookmark}
        isUnlocked={isUnlocked}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'sales' ? (
          <SalesPage
            onOpenCheckout={() => setIsCheckoutOpen(true)}
            onPreviewBook={() => {
              setActiveTab('reader');
              setCurrentChapterId('intro');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            theme={theme}
          />
        ) : viewMode === 'continuous' ? (
          <ContinuousBookView
            theme={theme}
            fontSize={fontSize}
            journal={journal}
            onNavigateToChapter={(id) => {
              setCurrentChapterId(id);
              setViewMode('paged');
            }}
          />
        ) : (
          <>
            {currentChapterId === 'cover' ? (
              <CoverView
                onStartReading={() => {
                  setCurrentChapterId('intro');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenChallenge={() => {
                  setCurrentChapterId('cap8');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenReasons={() => {
                  setCurrentChapterId('bonus-reasons');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                theme={theme}
              />
            ) : currentChapterId === 'cap8' ? (
              <InteractiveChallenge
                journal={journal}
                onUpdateJournal={setJournal}
                theme={theme}
                onPrintPdf={handlePrintPdf}
              />
            ) : currentChapterId === 'bonus-reasons' ? (
              <ThirtyReasonsView
                favoriteIndices={journal.favoriteReasons}
                onToggleFavorite={handleToggleFavoriteReason}
                theme={theme}
              />
            ) : currentChapter ? (
              <ChapterView
                chapter={currentChapter}
                onPrevious={chapterIndex > 0 ? handlePreviousChapter : () => setCurrentChapterId('cover')}
                onNext={chapterIndex < CHAPTERS.length - 1 ? handleNextChapter : undefined}
                hasPrevious={true}
                hasNext={chapterIndex < CHAPTERS.length - 1}
                isRead={readChapters.includes(currentChapter.id)}
                onToggleRead={() => handleToggleRead(currentChapter.id)}
                theme={theme}
                fontSize={fontSize}
                onOpenChallenge={() => {
                  setCurrentChapterId('cap8');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                isBookmarked={bookmarkChapterId === currentChapter.id}
                onToggleBookmark={() => handleToggleBookmark(currentChapter.id)}
                isUnlocked={isUnlocked}
                onOpenCheckout={() => setIsCheckoutOpen(true)}
              />
            ) : null}
          </>
        )}
      </main>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccessUnlock={handleUnlockFullBook}
        theme={theme}
      />

      {/* Footer info (non-print) */}
      <footer className="no-print border-t border-black/5 dark:border-white/10 py-8 px-4 text-center text-xs text-stone-500 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-editorial-serif font-bold text-stone-800 dark:text-stone-200">
              {BOOK_METADATA.title}
            </span>
            <span>·</span>
            <span>{BOOK_METADATA.edition}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setActiveTab('sales');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline cursor-pointer font-semibold text-amber-700 dark:text-amber-400"
            >
              Página de Vendas (70% OFF)
            </button>
            <button
              onClick={() => {
                setActiveTab('reader');
                setCurrentChapterId('cover');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline cursor-pointer"
            >
              Capa
            </button>
            <button
              onClick={() => {
                setActiveTab('reader');
                setCurrentChapterId('cap8');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline cursor-pointer"
            >
              Desafio 7 Dias
            </button>
            <button
              onClick={() => {
                setCurrentChapterId('bonus-reasons');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline cursor-pointer"
            >
              30 Motivos
            </button>
            <button
              onClick={handlePrintPdf}
              className="hover:underline cursor-pointer text-amber-700 dark:text-amber-400 font-medium"
            >
              Imprimir / PDF
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
