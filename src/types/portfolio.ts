export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  images?: string[];
  metrics: ProjectMetric[];
}

export interface TechCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | (string & {});
  url: string;
  label: string;
  icon: string;
}

export interface AuthorProfile {
  name: string;
  nickname: string;
  role: string;
  email: string;
  bio: string;
  statusBadge: string;
  avatarUrl: string;
  location?: string;
  socialLinks: SocialLink[];
}
