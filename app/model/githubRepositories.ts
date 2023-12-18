export interface IGithubRepositories {
  id: number;
  name: string;
  fork: boolean;
  description: string;
  topics: string[];
  html_url: string;
  homepage: string;
  created_at: string;
  updated_at: string;
}
