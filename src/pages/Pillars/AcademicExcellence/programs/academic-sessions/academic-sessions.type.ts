export interface Instructor {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Session {
  id: string;
  week: string;
  title: string;
  desc: string;
  date: string;
  time: string;
  instructor: Instructor;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  lumaUrl: string;
  objective: string;
  audience: string;
  capacity: string;
  modality: string;
  scheduleTitle: string;
  highlights: string[];
  sessions: Session[];
}