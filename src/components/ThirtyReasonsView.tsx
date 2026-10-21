import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Shuffle, 
  Search, 
  Plus, 
  Check, 
  Smile, 
  Share2,
  BookmarkCheck
} from 'lucide-react';
import { THIRTY_REASONS } from '../data/bookContent';
import { ReaderTheme } from '../types';

interface ThirtyReasonsViewProps {
  favoriteIndices: number[];
  onToggleFavorite: (index: number) => void;
  theme: ReaderTheme;
}

export const ThirtyReasonsView: React.FC<ThirtyReasonsViewProps> = ({
  favoriteIndices,
  onToggleFavorite,
  theme,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFavoritesOnly, setFilterFavoritesOnly] = useState(false);
  const [randomReasonIndex, setRandomReasonIndex] = useState<number | null>(null);
  const [customReasons, setCustomReasons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('smile_custom_reasons');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [newReasonInput, setNewReasonInput] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

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

  const handleAddCustomReason = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReasonInput.trim()) return;
    const updated = [newReasonInput.trim(), ...customReasons];
    setCustomReasons(updated);
    try {
      localStorage.setItem('smile_custom_reasons', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setNewReasonInput('');
    setShowAddForm(false);
  };

  const handlePickRandom = () => {
    const randomIndex = Math.floor(Math.random() * THIRTY_REASONS.length);
    setRandomReasonIndex(randomIndex);
  };

  const filteredReasons = THIRTY_REASONS.map((text, idx) => ({ text, idx })).filter(item => {
    const matchesSearch = item.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFav = filterFavoritesOnly ? favoriteIndices.includes(item.idx) : true;
    return matchesSearch && matchesFav;
  });

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Header Container */}
      <div className={`rounded-2xl border p-6 sm:p-10 mb-8 ${getCardBg()}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400 mb-1">
              <Smile className="w-4 h-4" />
              <span>Bônus Especial do Livro</span>
            </div>
            <h1 className="font-editorial-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
              30 Pequenas Razões Cotidianas Para Sorrir
            </h1>
            <p className="font-editorial-serif text-sm sm:text-base text-stone-600 dark:text-stone-300 mt-2 max-w-xl">
              Para quando você achar que o dia foi um desastre completo. Salve seus motivos favoritos ou sorteie um para iluminar o momento.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePickRandom}
              className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Shuffle className="w-4 h-4" />
              <span>Sortear um Motivo</span>
            </button>
          </div>
        </div>

        {/* Highlighted Random Reason Card */}
        {randomReasonIndex !== null && (
          <div className="mt-6 p-5 rounded-xl bg-linear-to-r from-amber-500/15 to-emerald-500/15 border border-amber-500/30 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase font-sans font-bold tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Motivo Sorteado Para Você Hoje (#{randomReasonIndex + 1})
              </span>
              <button 
                onClick={() => setRandomReasonIndex(null)}
                className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                Fechar
              </button>
            </div>
            <p className="font-editorial-serif text-lg font-medium text-stone-900 dark:text-white italic">
              "{THIRTY_REASONS[randomReasonIndex]}"
            </p>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="mt-8 pt-6 border-t border-inherit flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por café, chuva, cama, abraço..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 text-stone-800 dark:text-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterFavoritesOnly(!filterFavoritesOnly)}
              className={`px-3 py-2 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                filterFavoritesOnly
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-400 font-medium'
                  : 'border-stone-300 dark:border-zinc-700 text-stone-600 dark:text-stone-400 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${filterFavoritesOnly ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>Favoritos ({favoriteIndices.length})</span>
            </button>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-3 py-2 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300 hover:bg-amber-500/20 transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Adicionar Meu Motivo</span>
            </button>
          </div>
        </div>

        {/* Add custom reason form */}
        {showAddForm && (
          <form onSubmit={handleAddCustomReason} className="mt-4 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={newReasonInput}
              onChange={(e) => setNewReasonInput(e.target.value)}
              placeholder="Qual foi a pequena coisa boa que fez você sorrir hoje?"
              className="flex-1 p-2 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold cursor-pointer shrink-0"
            >
              Salvar Motivo
            </button>
          </form>
        )}
      </div>

      {/* Custom User Reasons (if any) */}
      {customReasons.length > 0 && !filterFavoritesOnly && (
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seus Motivos Pessoais Adicionados</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {customReasons.map((reason, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-stone-800 dark:text-stone-200 font-editorial-serif text-sm flex items-start gap-3`}
              >
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ★
                </div>
                <p className="flex-1">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reasons Grid (30 Items) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredReasons.map(({ text, idx }) => {
          const isFav = favoriteIndices.includes(idx);

          return (
            <div
              key={idx}
              className={`group p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${getCardBg()} ${
                isFav ? 'ring-1 ring-rose-500/30' : ''
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-400 flex items-center justify-center text-xs font-sans font-bold shrink-0 mt-0.5">
                {idx + 1}
              </div>

              <div className="flex-1 min-w-0">
                <p className={`font-editorial-serif text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-white' : 'text-stone-800'
                }`}>
                  {text}
                </p>
              </div>

              <button
                onClick={() => onToggleFavorite(idx)}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ${
                  isFav
                    ? 'text-rose-500 hover:text-rose-600'
                    : 'text-stone-300 dark:text-stone-600 hover:text-rose-400'
                }`}
                title={isFav ? 'Remover dos favoritos' : 'Salvar como favorito'}
              >
                <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
              </button>
            </div>
          );
        })}
      </div>

      {filteredReasons.length === 0 && (
        <div className="text-center py-12 text-stone-500 font-editorial-serif text-base">
          Nenhum motivo encontrado com esse filtro. Tente buscar outra palavra!
        </div>
      )}
    </div>
  );
};
