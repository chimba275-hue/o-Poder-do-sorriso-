export type ReaderTheme = 'cream' | 'white' | 'sepia' | 'dark';
export type ViewMode = 'paged' | 'continuous';
export type FontSize = 'sm' | 'base' | 'lg' | 'xl';

export interface CalloutBox {
  type: 'humor' | 'tip' | 'exercise' | 'reframing' | 'quote';
  title: string;
  content: string;
  authorOrNote?: string;
}

export interface Chapter {
  id: string;
  number: number | string;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  epigraph?: {
    phrase: string;
    author: string;
    humorousComment?: string;
  };
  introDropCap: string;
  sections: {
    heading?: string;
    paragraphs?: string[];
    callouts?: CalloutBox[];
    bulletPoints?: {
      title: string;
      description: string;
    }[];
  }[];
}

export interface DayChallenge {
  day: number;
  title: string;
  theme: string;
  instruction: string;
  practicalExample: string;
  promptQuestion: string;
}

export interface JournalState {
  completedDays: number[];
  responses: Record<number, string>;
  personalNotes: string;
  favoriteReasons: number[];
}

export interface Bookmark {
  chapterId: string;
  chapterTitle: string;
  timestamp: string;
}
