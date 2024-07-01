interface NoteType {
  createdAt: string;
  description: string;
  id: string;
  title: string;
  user_id: number;
}

export type { NoteType };

interface HelloType {
  id: string;
  name: string;
  description: string;
}

export type { HelloType };
